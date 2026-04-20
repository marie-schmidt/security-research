---
title: Blog Taxonomy | Categories & Tags
author: marie
date: 2026-04-20T00:00:00-07:00
categories: []
tags: []
description: "Reference guide for organizing posts on the security research blog"
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

# Blog Taxonomy
Reference for how posts are organized on this blog. Categories form the hierarchical skeleton (broad, stable). Tags are flat and cross-cutting (specific, searchable).
## Guiding principles
- **Categories are the skeleton.** Hierarchical, 4–5 top-level buckets, stable over time.
- **Tags are the muscle.** Flat, specific, reusable across categories.
- **Start small.** Only create categories when there are posts to fill them. Empty categories look worse than a short list.
- **Consistency beats cleverness.** Lowercase-hyphenated tags, picked from a known list.
-----
## Categories (hierarchical)
```
Web Security
├── Vulnerabilities
├── Methodology
└── Writeups
Cloud Security
├── Azure
├── AWS
└── IaC
Tooling
├── Burp Extensions
├── Nuclei Templates
└── Scripts
Labs & CTFs
├── Hack The Box
├── PortSwigger
└── CTF
Bug Bounty
├── Disclosed Reports
└── Methodology
```
### Why this structure
**Web Security** is the flagship category — it will hold the most posts and maps directly to the kind of work offensive-security consulting roles look for.
- *Vulnerabilities* — bug class explainers (e.g. “SSRF deep dive,” “Understanding prototype pollution”)
- *Methodology* — how-to posts on testing approach, recon, reporting
- *Writeups* — specific targets (labs, bounty targets, research)
**Cloud Security** leverages professional depth in Azure. Most pure-pentest bloggers skip cloud; owning this niche is a differentiator.
**Tooling** is the most recruiter-visible category. A hiring manager scanning the blog will click here first. Keep it separate even when it starts empty.
**Labs & CTFs** is where most early volume will live. Keeping it separate from Web Security signals these are learning artifacts rather than original research — which protects credibility.
**Bug Bounty** stays distinct because it has its own methodology and because recruiters specifically look for it (it is a listed preferred qualification for most offensive-security roles).
### Categories to skip
- **Certifications** — cert study notes belong under Labs; one-off pass announcements don’t need a category.
- **Career / Personal** — keep the site technical. Career content belongs on LinkedIn, where it will actually get read.
-----
## Tags (flat, cross-cutting)
Tags describe what’s in a post regardless of category. A post in `Web Security > Writeups` about an SSRF bug might be tagged `ssrf`, `burp-suite`, `owasp-top-10`, `bug-bounty`. Someone clicking `ssrf` should then see every post touching SSRF, across all categories.
### Rules
1. **Lowercase, hyphenated.** `request-smuggling`, not `Request Smuggling` or `RequestSmuggling`.
1. **3–6 tags per post.** More dilutes discovery; fewer means the tag system isn’t doing work.
1. **Don’t duplicate the category in the tag.** If a post is in `Cloud Security > Azure`, don’t also tag it `azure` and `cloud`.
1. **Tags must be reusable.** If a tag will only ever apply to one post, it’s a note — delete it.
### Starter tag list
#### **Vulnerability classes (high reuse):**
`xss`, `sqli`, `ssrf`, `xxe`, `idor`, `rce`, `csrf`, `ssti`, `prototype-pollution`, `deserialization`, `request-smuggling`, `race-condition`, `business-logic`, `access-control`, `auth-bypass`, `jwt`, `oauth`, `saml`
#### **Tech & protocols:**
`graphql`, `rest-api`, `websocket`, `http2`, `tls`, `dns`, `ldap`
#### **Tools:**
`burp-suite`, `nuclei`, `ffuf`, `sqlmap`, `metasploit`, `frida`, `mobsf`, `ghidra`, `nmap`
#### **Platforms:**
`azure`, `aws`, `gcp`, `kubernetes`, `docker`, `active-directory`
#### **Mobile:**
`ios`, `android`, `mobile`
#### **Meta (use sparingly):**
`owasp-top-10`, `cve`, `disclosure`, `writeup`, `tutorial`
#### **Source / context:**
`hackthebox`, `portswigger`, `tryhackme`, `ctf`, `bug-bounty`
-----
## Examples
### SSRF bug found via bug bounty in an Azure-hosted app
- **Category:** `Bug Bounty > Disclosed Reports`
- **Tags:** `ssrf`, `azure`, `burp-suite`, `cloud-metadata`, `disclosure`
### PortSwigger lab walkthrough on HTTP request smuggling
- **Category:** `Labs & CTFs > PortSwigger`
- **Tags:** `request-smuggling`, `http2`, `burp-suite`, `owasp-top-10`
### Introducing a custom Burp extension
- **Category:** `Tooling > Burp Extensions`
- **Tags:** `burp-suite`, `jwt`, `automation`
### Azure Landing Zone misconfiguration deep-dive
- **Category:** `Cloud Security > Azure`
- **Tags:** `iac`, `landing-zone`, `rbac`, `misconfiguration`
-----
## Maintenance
- **Keep this file as the source of truth.** Before adding a tag to a post, check here first. If nothing fits, add the tag here *and* use it.
- **Don’t create categories before they’re needed.** Start with `Web Security`, `Labs & CTFs`, and `Tooling`. Add others when posts exist to fill them.
- **Review every 10 posts.** Consolidate synonyms (e.g. `xss` vs `cross-site-scripting` — pick one), kill unused categories, prune orphan tags.
- **Avoid the synonym trap.** `xss` / `XSS` / `cross-site-scripting` split SEO and confuse readers. Pick one spelling per concept, forever.
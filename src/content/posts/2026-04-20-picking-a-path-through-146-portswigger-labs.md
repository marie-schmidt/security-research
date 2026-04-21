---
title: "Episode #2: Picking a Path Through 146 PortSwigger Labs"
author: marie
date: 2026-04-21T00:00:00-07:00
categories: ["Labs & CTFs", PortSwigger]
tags: [portswigger, roadmap]
description: "Starting the Foundation phase: figuring out what order to attack 146 web security labs when the platform itself doesn't give you one."
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

Foundation phase started. I opened the [PortSwigger Web Security Academy](https://portswigger.net/web-security) on Monday night with a raspberry iced matcha by my side and the kind of optimism that only lasts until you see the sidebar.

**Thirty-one topic areas. Roughly 146 labs. Three difficulty tiers. Zero opinion on what to do first.**
The Academy is famously comprehensive — that's why it's the gold standard — but "comprehensive" and "linear" are not the same thing. You can click into SQL Injection or Prototype Pollution or Web LLM Attacks with equal ease, and there's no "recommended next lab" button when you finish one. Which is fair: experienced people should be able to jump around. But I'm not experienced. I'm trying to build foundations, and foundations need an order.

So Episode #2 is about choosing one.

## Two defensible strategies
There are really two ways to work through the Academy, and they optimize for different things.
```mermaid
flowchart TD
   Start([146 labs, 31 categories, 3 difficulties]) --> Choice{Which order?}
   Choice -->|Breadth-first| BF[All Apprentice labs<br/>across all categories]
   Choice -->|Depth-first| DF[One category end-to-end<br/>Apprentice to Practitioner to Expert]
   BF --> BFpro[Pro: touch every bug class early<br/>Pro: broad pattern recognition<br/>Con: no deep intuition in any one area]
   DF --> DFpro[Pro: deep mastery per category<br/>Pro: momentum from finishing things<br/>Con: weeks before seeing some bug classes]
   BFpro --> Hybrid[Hybrid: breadth-first for Apprentice<br/>depth-first from Practitioner onward]
   DFpro --> Hybrid
   Hybrid --> Go([Start with all Apprentice labs])
```
**Breadth-first** — do every Apprentice lab, across all 31 categories, before touching a single Practitioner. The logic: build a shallow mental model of every bug class before going deep on any. A beginner's best leverage is knowing what to *look* for; depth comes later. Downside: you spend weeks without ever feeling like you've mastered anything.
**Depth-first** — finish each category completely (Apprentice → Practitioner → Expert) before moving to the next. The logic: real mastery comes from going deep. Finishing a category feels good and teaches you patterns that don't emerge from surface-level exposure. Downside: you could spend six weeks on SQL Injection before ever seeing a CSRF or SSRF lab, which is weird if your goal is pattern recognition across bug classes.

## The approach I picked
Hybrid, leaning breadth-first.
- **Weeks 1–2:** Every Apprentice lab across every category. Target: ~45 labs. The point is exposure — I want to have *seen* every major bug class at least once, even if I couldn't write an exploit from scratch yet.
- **Weeks 3–10:** Practitioner labs, depth-first by category, following [onyxwizard's roadmap order](https://github.com/onyxwizard/portswigger-academy). That order groups related concepts well and has been used successfully by others, which is worth more than any ordering I could invent from scratch.
- **Weeks 11+:** Expert labs, selectively. Some Expert labs are genuinely brutal and not worth the time ROI unless you've decided to specialize. I'll pick them based on what's still confusing after the Practitioner pass.

## Credit where it's due
The per-category ordering above comes from [onyxwizard/portswigger-academy](https://github.com/onyxwizard/portswigger-academy) — a public lab tracker that lays out all 146 labs in a sensible learning order, tags them by difficulty, and includes emoji status markers for tracked progress. I'm not replicating it here; I'm following their ordering and linking to it.
If you're starting PortSwigger yourself, fork that repo before you do anything else. Save yourself the decision fatigue.

## The tracker
Here's the 31-category summary with progress counters. Each writeup column will fill in as I publish — for now they're empty, which is the honest state of things.
|# |Category                      |Labs   |Progress   |Writeups|
|--|------------------------------|------:|----------:|--------|
|1 |SQL Injection                 |18     |0 / 18     |—       |
|2 |Cross-Site Scripting (XSS)    |30     |0 / 30     |—       |
|3 |CSRF                          |12     |0 / 12     |—       |
|4 |Clickjacking                  |5      |0 / 5      |—       |
|5 |DOM-based Vulnerabilities     |7      |0 / 7      |—       |
|6 |CORS                          |3      |0 / 3      |—       |
|7 |XXE Injection                 |9      |0 / 9      |—       |
|8 |SSRF                          |7      |0 / 7      |—       |
|9 |HTTP Request Smuggling        |21     |0 / 21     |—       |
|10|OS Command Injection          |5      |0 / 5      |—       |
|11|Server-Side Template Injection|7      |0 / 7      |—       |
|12|Path Traversal                |6      |0 / 6      |—       |
|13|Access Control                |13     |0 / 13     |—       |
|14|Authentication                |14     |0 / 14     |—       |
|15|WebSockets                    |3      |0 / 3      |—       |
|16|Web Cache Poisoning           |13     |0 / 13     |—       |
|17|Insecure Deserialization      |10     |0 / 10     |—       |
|18|Information Disclosure        |5      |0 / 5      |—       |
|19|Business Logic                |11     |0 / 11     |—       |
|20|HTTP Host Header Attacks      |7      |0 / 7      |—       |
|21|OAuth Authentication          |6      |0 / 6      |—       |
|22|File Upload Vulnerabilities   |7      |0 / 7      |—       |
|23|JWT Attacks                   |8      |0 / 8      |—       |
|24|Essential Skills              |2      |0 / 2      |—       |
|25|Prototype Pollution           |10     |0 / 10     |—       |
|26|GraphQL API Vulnerabilities   |5      |0 / 5      |—       |
|27|Race Conditions               |6      |0 / 6      |—       |
|28|NoSQL Injection               |4      |0 / 4      |—       |
|29|API Testing                   |5      |0 / 5      |—       |
|30|Web LLM Attacks               |4      |0 / 4      |—       |
|31|Web Cache Deception           |5      |0 / 5      |—       |
|  |**Total**                     |**146**|**0 / 146**|        |
I'll keep this table updated in this post as I go, and link out to writeups as they land. Not every lab will get a dedicated writeup — the simple Apprentice ones probably don't need one — but anything that taught me something non-obvious will.

## Starting point
First seven labs, all Apprentice, picked to hit as many bug-class categories as possible in the first sitting:
1. SQL injection vulnerability in WHERE clause allowing retrieval of hidden data
1. Basic clickjacking with CSRF token protection
1. Basic SSRF against the local server
1. Exploiting XXE using external entities to retrieve files
1. Reflected XSS into HTML context with nothing encoded
1. OS command injection, simple case
1. File path traversal, simple case
Seven labs across seven bug classes. By the end of week one I want all Apprentice SQL Injection, XSS, and Access Control labs done — those three alone cover about 40 labs and a big chunk of what actually shows up in bug bounty reports.

## What's next here
The next post will either be (a) a technical writeup of the first non-trivial lab that surprised me, or (b) Episode #3 at the end of the Apprentice pass, whichever comes first. Technical writeups won't use the Episode convention — they'll have descriptive titles so they're findable by bug class.
If the tracker in this post doesn't update for two weeks, something's wrong with my schedule. Feel free to call it out in the comments.
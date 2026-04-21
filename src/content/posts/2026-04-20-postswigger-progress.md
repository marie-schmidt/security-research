---
title: PortSwigger Progress
author: marie
date: 2026-04-22T00:00:00-07:00
categories: ["Labs & CTFs", PortSwigger]
tags: [portswigger, roadmap]
description: "Live tracker for my pass through the PortSwigger Web Security Academy — all 146 labs, current status, and links to writeups as they land."
pin: true
toc: true
comments: true
math: false
mermaid: false
image:
  path: ""
  alt: ""
hidden: false
---

Live tracker for my pass through the [PortSwigger Web Security Academy](https://portswigger.net/web-security). Lab ordering follows [onyxwizard's roadmap](https://github.com/onyxwizard/portswigger-academy), and the reasoning behind that choice is in [Episode #2](/posts/episode-2-picking-a-path-through-portswigger-labs/).

This page updates as I go. Writeup links fill in progressively — not every lab gets one (the trivial Apprentice ones often don't), but anything that taught me something non-obvious will.

## Legend
|Symbol|Meaning           |
|:----:|------------------|
|✅     |Pwned             |
|🟡     |In progress       |
|⬜     |Not started       |
|📝     |Writeup published |
|—     |No writeup planned|

## Overall progress
|Difficulty  |Labs   |Done |%     |
|------------|------:|----:|-----:|
|Apprentice  |34     |0    |0%    |
|Practitioner|94     |0    |0%    |
|Expert      |18     |0    |0%    |
|**Total**   |**146**|**0**|**0%**|

-----

## 1. SQL Injection — 0 / 18
|Lab                                                                                                                                                                                                           |Status|Writeup|
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|[SQL injection in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)                                                                |⬜     |—      |
|[SQL injection allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass)                                                                                                    |⬜     |—      |
|[SQL injection attack, querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle)                      |⬜     |—      |
|[SQL injection attack, querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft)|⬜     |—      |
|[SQL injection attack, listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle)             |⬜     |—      |
|[SQL injection attack, listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle)                               |⬜     |—      |
|[SQL injection UNION attack, determining the number of columns returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns)                       |⬜     |—      |
|[SQL injection UNION attack, finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text)                                              |⬜     |—      |
|[SQL injection UNION attack, retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables)                                         |⬜     |—      |
|[SQL injection UNION attack, retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column)                   |⬜     |—      |
|[Blind SQL injection with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses)                                                                          |⬜     |—      |
|[Blind SQL injection with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors)                                                                                |⬜     |—      |
|[Visible error-based SQL injection](https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based)                                                                           |⬜     |—      |
|[Blind SQL injection with time delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays)                                                                                              |⬜     |—      |
|[Blind SQL injection with time delays and information retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval)                                                     |⬜     |—      |
|[Blind SQL injection with out-of-band interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band)                                                                                  |⬜     |—      |
|[Blind SQL injection with out-of-band data exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration)                                                          |⬜     |—      |
|[SQL injection with filter bypass via XML encoding](https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding)                                                 |⬜     |—      |

## 2. Cross-Site Scripting (XSS) — 0 / 30
|Lab                                                                                                                      |Status|Writeup|
|-------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|Reflected XSS into HTML context with nothing encoded                                                                     |⬜     |—      |
|Stored XSS into HTML context with nothing encoded                                                                        |⬜     |—      |
|DOM XSS in document.write sink using source location.search                                                              |⬜     |—      |
|DOM XSS in innerHTML sink using source location.search                                                                   |⬜     |—      |
|DOM XSS in jQuery anchor href attribute sink using location.search source                                                |⬜     |—      |
|DOM XSS in jQuery selector sink using a hashchange event                                                                 |⬜     |—      |
|Reflected XSS into attribute with angle brackets HTML-encoded                                                            |⬜     |—      |
|Stored XSS into anchor href attribute with double quotes HTML-encoded                                                    |⬜     |—      |
|Reflected XSS into a JavaScript string with angle brackets HTML encoded                                                  |⬜     |—      |
|DOM XSS in document.write sink using source location.search inside a select element                                      |⬜     |—      |
|DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded                                       |⬜     |—      |
|Reflected DOM XSS                                                                                                        |⬜     |—      |
|Stored DOM XSS                                                                                                           |⬜     |—      |
|Reflected XSS into HTML context with most tags and attributes blocked                                                    |⬜     |—      |
|Reflected XSS into HTML context with all tags blocked except custom ones                                                 |⬜     |—      |
|Reflected XSS with some SVG markup allowed                                                                               |⬜     |—      |
|Reflected XSS in canonical link tag                                                                                      |⬜     |—      |
|Reflected XSS into a JavaScript string with single quote and backslash escaped                                           |⬜     |—      |
|Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped      |⬜     |—      |
|Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped |⬜     |—      |
|Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped|⬜     |—      |
|Exploiting cross-site scripting to steal cookies                                                                         |⬜     |—      |
|Exploiting cross-site scripting to capture passwords                                                                     |⬜     |—      |
|Exploiting XSS to bypass CSRF defenses                                                                                   |⬜     |—      |
|Reflected XSS with AngularJS sandbox escape without strings                                                              |⬜     |—      |
|Reflected XSS with AngularJS sandbox escape and CSP                                                                      |⬜     |—      |
|Reflected XSS with event handlers and href attributes blocked                                                            |⬜     |—      |
|Reflected XSS in a JavaScript URL with some characters blocked                                                           |⬜     |—      |
|Reflected XSS protected by very strict CSP, with dangling markup attack                                                  |⬜     |—      |
|Reflected XSS protected by CSP, with CSP bypass                                                                          |⬜     |—      |

## 3. CSRF — 0 / 12
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|CSRF vulnerability with no defenses                          |⬜     |—      |
|CSRF where token validation depends on request method        |⬜     |—      |
|CSRF where token validation depends on token being present   |⬜     |—      |
|CSRF where token is not tied to user session                 |⬜     |—      |
|CSRF where token is tied to non-session cookie               |⬜     |—      |
|CSRF where token is duplicated in cookie                     |⬜     |—      |
|SameSite Lax bypass via method override                      |⬜     |—      |
|SameSite Strict bypass via client-side redirect              |⬜     |—      |
|SameSite Strict bypass via sibling domain                    |⬜     |—      |
|SameSite Lax bypass via cookie refresh                       |⬜     |—      |
|CSRF where Referer validation depends on header being present|⬜     |—      |
|CSRF with broken Referer validation                          |⬜     |—      |

## 4. Clickjacking — 0 / 5
|Lab                                                             |Status|Writeup|
|----------------------------------------------------------------|:----:|:-----:|
|Basic clickjacking with CSRF token protection                   |⬜     |—      |
|Clickjacking with form input data prefilled from a URL parameter|⬜     |—      |
|Clickjacking with a frame buster script                         |⬜     |—      |
|Exploiting clickjacking vulnerability to trigger DOM-based XSS  |⬜     |—      |
|Multistep clickjacking                                          |⬜     |—      |

## 5. DOM-based Vulnerabilities — 0 / 7
|Lab                                             |Status|Writeup|
|------------------------------------------------|:----:|:-----:|
|DOM XSS using web messages                      |⬜     |—      |
|DOM XSS using web messages and a JavaScript URL |⬜     |—      |
|DOM XSS using web messages and JSON.parse       |⬜     |—      |
|DOM-based open redirection                      |⬜     |—      |
|DOM-based cookie manipulation                   |⬜     |—      |
|Exploiting DOM clobbering to enable XSS         |⬜     |—      |
|Clobbering DOM attributes to bypass HTML filters|⬜     |—      |

## 6. CORS — 0 / 3
|Lab                                               |Status|Writeup|
|--------------------------------------------------|:----:|:-----:|
|CORS vulnerability with basic origin reflection   |⬜     |—      |
|CORS vulnerability with trusted null origin       |⬜     |—      |
|CORS vulnerability with trusted insecure protocols|⬜     |—      |

## 7. XXE Injection — 0 / 9
|Lab                                                                   |Status|Writeup|
|----------------------------------------------------------------------|:----:|:-----:|
|Exploiting XXE using external entities to retrieve files              |⬜     |—      |
|Exploiting XXE to perform SSRF attacks                                |⬜     |—      |
|Blind XXE with out-of-band interaction                                |⬜     |—      |
|Blind XXE with out-of-band interaction via XML parameter entities     |⬜     |—      |
|Exploiting blind XXE to exfiltrate data using a malicious external DTD|⬜     |—      |
|Exploiting blind XXE to retrieve data via error messages              |⬜     |—      |
|Exploiting XInclude to retrieve files                                 |⬜     |—      |
|Exploiting XXE via image file upload                                  |⬜     |—      |
|Exploiting XXE to retrieve data by repurposing a local DTD            |⬜     |—      |

## 8. SSRF — 0 / 7
|Lab                                                       |Status|Writeup|
|----------------------------------------------------------|:----:|:-----:|
|Basic SSRF against the local server                       |⬜     |—      |
|Basic SSRF against another back-end system                |⬜     |—      |
|Blind SSRF with out-of-band detection                     |⬜     |—      |
|SSRF with blacklist-based input filter                    |⬜     |—      |
|SSRF with filter bypass via open redirection vulnerability|⬜     |—      |
|Blind SSRF with Shellshock exploitation                   |⬜     |—      |
|SSRF with whitelist-based input filter                    |⬜     |—      |

## 9. HTTP Request Smuggling — 0 / 21
|Lab                                                                                         |Status|Writeup|
|--------------------------------------------------------------------------------------------|:----:|:-----:|
|HTTP request smuggling, confirming a CL.TE vulnerability via differential responses         |⬜     |—      |
|HTTP request smuggling, confirming a TE.CL vulnerability via differential responses         |⬜     |—      |
|Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability|⬜     |—      |
|Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability|⬜     |—      |
|Exploiting HTTP request smuggling to reveal front-end request rewriting                     |⬜     |—      |
|Exploiting HTTP request smuggling to capture other users' requests                          |⬜     |—      |
|Exploiting HTTP request smuggling to deliver reflected XSS                                  |⬜     |—      |
|Response queue poisoning via H2.TE request smuggling                                        |⬜     |—      |
|H2.CL request smuggling                                                                     |⬜     |—      |
|HTTP/2 request smuggling via CRLF injection                                                 |⬜     |—      |
|HTTP/2 request splitting via CRLF injection                                                 |⬜     |—      |
|CL.0 request smuggling                                                                      |⬜     |—      |
|HTTP request smuggling, basic CL.TE vulnerability                                           |⬜     |—      |
|HTTP request smuggling, basic TE.CL vulnerability                                           |⬜     |—      |
|HTTP request smuggling, obfuscating the TE header                                           |⬜     |—      |
|Exploiting HTTP request smuggling to perform web cache poisoning                            |⬜     |—      |
|Exploiting HTTP request smuggling to perform web cache deception                            |⬜     |—      |
|Bypassing access controls via HTTP/2 request tunnelling                                     |⬜     |—      |
|Web cache poisoning via HTTP/2 request tunnelling                                           |⬜     |—      |
|Client-side desync                                                                          |⬜     |—      |
|Server-side pause-based request smuggling                                                   |⬜     |—      |

## 10. OS Command Injection — 0 / 5
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|OS command injection, simple case                            |⬜     |—      |
|Blind OS command injection with time delays                  |⬜     |—      |
|Blind OS command injection with output redirection           |⬜     |—      |
|Blind OS command injection with out-of-band interaction      |⬜     |—      |
|Blind OS command injection with out-of-band data exfiltration|⬜     |—      |

## 11. Server-Side Template Injection — 0 / 7
|Lab                                                                                 |Status|Writeup|
|------------------------------------------------------------------------------------|:----:|:-----:|
|Basic server-side template injection                                                |⬜     |—      |
|Server-side template injection (code context)                                       |⬜     |—      |
|Server-side template injection using documentation                                  |⬜     |—      |
|Server-side template injection in an unknown language with a documented exploit     |⬜     |—      |
|Server-side template injection with information disclosure via user-supplied objects|⬜     |—      |
|Server-side template injection in a sandboxed environment                           |⬜     |—      |
|Server-side template injection with a custom exploit                                |⬜     |—      |

## 12. Path Traversal — 0 / 6
|Lab                                                                          |Status|Writeup|
|-----------------------------------------------------------------------------|:----:|:-----:|
|File path traversal, simple case                                             |⬜     |—      |
|File path traversal, traversal sequences blocked with absolute path bypass   |⬜     |—      |
|File path traversal, traversal sequences stripped non-recursively            |⬜     |—      |
|File path traversal, traversal sequences stripped with superfluous URL-decode|⬜     |—      |
|File path traversal, validation of start of path                             |⬜     |—      |
|File path traversal, validation of file extension with null byte bypass      |⬜     |—      |

## 13. Access Control — 0 / 13
|Lab                                                                  |Status|Writeup|
|---------------------------------------------------------------------|:----:|:-----:|
|Unprotected admin functionality                                      |⬜     |—      |
|Unprotected admin functionality with unpredictable URL               |⬜     |—      |
|User role controlled by request parameter                            |⬜     |—      |
|User role can be modified in user profile                            |⬜     |—      |
|User ID controlled by request parameter                              |⬜     |—      |
|User ID controlled by request parameter, with unpredictable user IDs |⬜     |—      |
|User ID controlled by request parameter with data leakage in redirect|⬜     |—      |
|User ID controlled by request parameter with password disclosure     |⬜     |—      |
|Insecure direct object references                                    |⬜     |—      |
|URL-based access control can be circumvented                         |⬜     |—      |
|Method-based access control can be circumvented                      |⬜     |—      |
|Multi-step process with no access control on one step                |⬜     |—      |
|Referer-based access control                                         |⬜     |—      |

## 14. Authentication — 0 / 14
|Lab                                                            |Status|Writeup|
|---------------------------------------------------------------|:----:|:-----:|
|Username enumeration via different responses                   |⬜     |—      |
|2FA simple bypass                                              |⬜     |—      |
|Password reset broken logic                                    |⬜     |—      |
|Username enumeration via subtly different responses            |⬜     |—      |
|Username enumeration via response timing                       |⬜     |—      |
|Broken brute-force protection, IP block                        |⬜     |—      |
|Username enumeration via account lock                          |⬜     |—      |
|2FA broken logic                                               |⬜     |—      |
|Brute-forcing a stay-logged-in cookie                          |⬜     |—      |
|Offline password cracking                                      |⬜     |—      |
|Password reset poisoning via middleware                        |⬜     |—      |
|Password brute-force via password change                       |⬜     |—      |
|Broken brute-force protection, multiple credentials per request|⬜     |—      |
|2FA bypass using a brute-force attack                          |⬜     |—      |

## 15. WebSockets — 0 / 3
|Lab                                                            |Status|Writeup|
|---------------------------------------------------------------|:----:|:-----:|
|Manipulating WebSocket messages to exploit vulnerabilities     |⬜     |—      |
|Cross-site WebSocket hijacking                                 |⬜     |—      |
|Manipulating the WebSocket handshake to exploit vulnerabilities|⬜     |—      |

## 16. Web Cache Poisoning — 0 / 13
|Lab                                                                                             |Status|Writeup|
|------------------------------------------------------------------------------------------------|:----:|:-----:|
|Web cache poisoning with an unkeyed header                                                      |⬜     |—      |
|Web cache poisoning with an unkeyed cookie                                                      |⬜     |—      |
|Web cache poisoning with multiple headers                                                       |⬜     |—      |
|Targeted web cache poisoning using an unknown header                                            |⬜     |—      |
|Web cache poisoning via an unkeyed query string                                                 |⬜     |—      |
|Web cache poisoning via an unkeyed query parameter                                              |⬜     |—      |
|Parameter cloaking                                                                              |⬜     |—      |
|Web cache poisoning via a fat GET request                                                       |⬜     |—      |
|URL normalization                                                                               |⬜     |—      |
|Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria|⬜     |—      |
|Combining web cache poisoning vulnerabilities                                                   |⬜     |—      |
|Cache key injection                                                                             |⬜     |—      |
|Internal cache poisoning                                                                        |⬜     |—      |

## 17. Insecure Deserialization — 0 / 10
|Lab                                                                |Status|Writeup|
|-------------------------------------------------------------------|:----:|:-----:|
|Modifying serialized objects                                       |⬜     |—      |
|Modifying serialized data types                                    |⬜     |—      |
|Using application functionality to exploit insecure deserialization|⬜     |—      |
|Arbitrary object injection in PHP                                  |⬜     |—      |
|Exploiting Java deserialization with Apache Commons                |⬜     |—      |
|Exploiting PHP deserialization with a pre-built gadget chain       |⬜     |—      |
|Exploiting Ruby deserialization using a documented gadget chain    |⬜     |—      |
|Developing a custom gadget chain for Java deserialization          |⬜     |—      |
|Developing a custom gadget chain for PHP deserialization           |⬜     |—      |
|Using PHAR deserialization to deploy a custom gadget chain         |⬜     |—      |

## 18. Information Disclosure — 0 / 5
|Lab                                              |Status|Writeup|
|-------------------------------------------------|:----:|:-----:|
|Information disclosure in error messages         |⬜     |—      |
|Information disclosure on debug page             |⬜     |—      |
|Source code disclosure via backup files          |⬜     |—      |
|Authentication bypass via information disclosure |⬜     |—      |
|Information disclosure in version control history|⬜     |—      |

## 19. Business Logic — 0 / 11
|Lab                                                                |Status|Writeup|
|-------------------------------------------------------------------|:----:|:-----:|
|Excessive trust in client-side controls                            |⬜     |—      |
|High-level logic vulnerability                                     |⬜     |—      |
|Inconsistent security controls                                     |⬜     |—      |
|Flawed enforcement of business rules                               |⬜     |—      |
|Low-level logic flaw                                               |⬜     |—      |
|Inconsistent handling of exceptional input                         |⬜     |—      |
|Weak isolation on dual-use endpoint                                |⬜     |—      |
|Insufficient workflow validation                                   |⬜     |—      |
|Authentication bypass via flawed state machine                     |⬜     |—      |
|Infinite money logic flaw                                          |⬜     |—      |
|Bypassing access controls using email address parsing discrepancies|⬜     |—      |

## 20. HTTP Host Header Attacks — 0 / 7
|Lab                                               |Status|Writeup|
|--------------------------------------------------|:----:|:-----:|
|Basic password reset poisoning                    |⬜     |—      |
|Host header authentication bypass                 |⬜     |—      |
|Web cache poisoning via ambiguous requests        |⬜     |—      |
|Routing-based SSRF                                |⬜     |—      |
|SSRF via flawed request parsing                   |⬜     |—      |
|Host validation bypass via connection state attack|⬜     |—      |
|Password reset poisoning via dangling markup      |⬜     |—      |

## 21. OAuth Authentication — 0 / 6
|Lab                                              |Status|Writeup|
|-------------------------------------------------|:----:|:-----:|
|Authentication bypass via OAuth implicit flow    |⬜     |—      |
|SSRF via OpenID dynamic client registration      |⬜     |—      |
|Forced OAuth profile linking                     |⬜     |—      |
|OAuth account hijacking via redirect_uri         |⬜     |—      |
|Stealing OAuth access tokens via an open redirect|⬜     |—      |
|Stealing OAuth access tokens via a proxy page    |⬜     |—      |

## 22. File Upload Vulnerabilities — 0 / 7
|Lab                                                 |Status|Writeup|
|----------------------------------------------------|:----:|:-----:|
|Remote code execution via web shell upload          |⬜     |—      |
|Web shell upload via Content-Type restriction bypass|⬜     |—      |
|Web shell upload via path traversal                 |⬜     |—      |
|Web shell upload via extension blacklist bypass     |⬜     |—      |
|Web shell upload via obfuscated file extension      |⬜     |—      |
|Remote code execution via polyglot web shell upload |⬜     |—      |
|Web shell upload via race condition                 |⬜     |—      |

## 23. JWT Attacks — 0 / 8
|Lab                                                                  |Status|Writeup|
|---------------------------------------------------------------------|:----:|:-----:|
|JWT authentication bypass via unverified signature                   |⬜     |—      |
|JWT authentication bypass via flawed signature verification          |⬜     |—      |
|JWT authentication bypass via weak signing key                       |⬜     |—      |
|JWT authentication bypass via jwk header injection                   |⬜     |—      |
|JWT authentication bypass via jku header injection                   |⬜     |—      |
|JWT authentication bypass via kid header path traversal              |⬜     |—      |
|JWT authentication bypass via algorithm confusion                    |⬜     |—      |
|JWT authentication bypass via algorithm confusion with no exposed key|⬜     |—      |

## 24. Essential Skills — 0 / 2
|Lab                                                       |Status|Writeup|
|----------------------------------------------------------|:----:|:-----:|
|Discovering vulnerabilities quickly with targeted scanning|⬜     |—      |
|Scanning non-standard data structures                     |⬜     |—      |

## 25. Prototype Pollution — 0 / 10
|Lab                                                                           |Status|Writeup|
|------------------------------------------------------------------------------|:----:|:-----:|
|Client-side prototype pollution via browser APIs                              |⬜     |—      |
|DOM XSS via client-side prototype pollution                                   |⬜     |—      |
|DOM XSS via an alternative prototype pollution vector                         |⬜     |—      |
|Client-side prototype pollution via flawed sanitization                       |⬜     |—      |
|Client-side prototype pollution in third-party libraries                      |⬜     |—      |
|Privilege escalation via server-side prototype pollution                      |⬜     |—      |
|Detecting server-side prototype pollution without polluted property reflection|⬜     |—      |
|Bypassing flawed input filters for server-side prototype pollution            |⬜     |—      |
|Remote code execution via server-side prototype pollution                     |⬜     |—      |
|Exfiltrating sensitive data via server-side prototype pollution               |⬜     |—      |

## 26. GraphQL API Vulnerabilities — 0 / 5
|Lab                                          |Status|Writeup|
|---------------------------------------------|:----:|:-----:|
|Accessing private GraphQL posts              |⬜     |—      |
|Accidental exposure of private GraphQL fields|⬜     |—      |
|Finding a hidden GraphQL endpoint            |⬜     |—      |
|Bypassing GraphQL brute force protections    |⬜     |—      |
|Performing CSRF exploits over GraphQL        |⬜     |—      |

## 27. Race Conditions — 0 / 6
|Lab                                      |Status|Writeup|
|-----------------------------------------|:----:|:-----:|
|Limit overrun race conditions            |⬜     |—      |
|Bypassing rate limits via race conditions|⬜     |—      |
|Multi-endpoint race conditions           |⬜     |—      |
|Single-endpoint race conditions          |⬜     |—      |
|Exploiting time-sensitive vulnerabilities|⬜     |—      |
|Partial construction race conditions     |⬜     |—      |

## 28. NoSQL Injection — 0 / 4
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|Detecting NoSQL injection                                    |⬜     |—      |
|Exploiting NoSQL operator injection to bypass authentication |⬜     |—      |
|Exploiting NoSQL injection to extract data                   |⬜     |—      |
|Exploiting NoSQL operator injection to extract unknown fields|⬜     |—      |

## 29. API Testing — 0 / 5
|Lab                                                         |Status|Writeup|
|------------------------------------------------------------|:----:|:-----:|
|Exploiting an API endpoint using documentation              |⬜     |—      |
|Exploiting server-side parameter pollution in a query string|⬜     |—      |
|Finding and exploiting an unused API endpoint               |⬜     |—      |
|Exploiting a mass assignment vulnerability                  |⬜     |—      |
|Exploiting server-side parameter pollution in a REST URL    |⬜     |—      |

## 30. Web LLM Attacks — 0 / 4
|Lab                                        |Status|Writeup|
|-------------------------------------------|:----:|:-----:|
|Exploiting LLM APIs with excessive agency  |⬜     |—      |
|Exploiting vulnerabilities in LLM APIs     |⬜     |—      |
|Indirect prompt injection                  |⬜     |—      |
|Exploiting insecure output handling in LLMs|⬜     |—      |

## 31. Web Cache Deception — 0 / 5
|Lab                                                           |Status|Writeup|
|--------------------------------------------------------------|:----:|:-----:|
|Exploiting path mapping for web cache deception               |⬜     |—      |
|Exploiting path delimiters for web cache deception            |⬜     |—      |
|Exploiting origin server normalization for web cache deception|⬜     |—      |
|Exploiting cache server normalization for web cache deception |⬜     |—      |
|Exploiting exact-match cache rules for web cache deception    |⬜     |—      |

-----

*Last updated: 2026-04-20. Lab data and ordering follow [onyxwizard/portswigger-academy](https://github.com/onyxwizard/portswigger-academy) under MIT License.*
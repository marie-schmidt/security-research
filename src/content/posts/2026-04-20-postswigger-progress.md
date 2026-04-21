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
|#|Labs   |Done |%     |
|--|------:|----:|-----:|
|1|34     |0    |0%    |
|2|94     |0    |0%    |
|3|18     |0    |0%    |
|**Total**   |**146**|**0**|**0%**|

-----

## 1. SQL Injection — 0 / 18
|#|Lab                                                                                                                                                                                                           |Status|Writeup|
|--|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|1|[SQL injection in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)                                                                |⬜     |—      |
|2|[SQL injection allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass)                                                                                                    |⬜     |—      |
|3|[SQL injection attack, querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle)                      |⬜     |—      |
|4|[SQL injection attack, querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft)|⬜     |—      |
|5|[SQL injection attack, listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle)             |⬜     |—      |
|6|[SQL injection attack, listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle)                               |⬜     |—      |
|7|[SQL injection UNION attack, determining the number of columns returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns)                       |⬜     |—      |
|8|[SQL injection UNION attack, finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text)                                              |⬜     |—      |
|9|[SQL injection UNION attack, retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables)                                         |⬜     |—      |
|10|[SQL injection UNION attack, retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column)                   |⬜     |—      |
|11|[Blind SQL injection with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses)                                                                          |⬜     |—      |
|12|[Blind SQL injection with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors)                                                                                |⬜     |—      |
|13|[Visible error-based SQL injection](https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based)                                                                           |⬜     |—      |
|14|[Blind SQL injection with time delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays)                                                                                              |⬜     |—      |
|15|[Blind SQL injection with time delays and information retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval)                                                     |⬜     |—      |
|16|[Blind SQL injection with out-of-band interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band)                                                                                  |⬜     |—      |
|17|[Blind SQL injection with out-of-band data exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration)                                                          |⬜     |—      |
|18|[SQL injection with filter bypass via XML encoding](https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding)                                                 |⬜     |—      |

## 2. Cross-Site Scripting (XSS) — 0 / 30
|#|Lab                                                                                                                      |Status|Writeup|
|--|-------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|1|Reflected XSS into HTML context with nothing encoded                                                                     |⬜     |—      |
|2|Stored XSS into HTML context with nothing encoded                                                                        |⬜     |—      |
|3|DOM XSS in document.write sink using source location.search                                                              |⬜     |—      |
|4|DOM XSS in innerHTML sink using source location.search                                                                   |⬜     |—      |
|5|DOM XSS in jQuery anchor href attribute sink using location.search source                                                |⬜     |—      |
|6|DOM XSS in jQuery selector sink using a hashchange event                                                                 |⬜     |—      |
|7|Reflected XSS into attribute with angle brackets HTML-encoded                                                            |⬜     |—      |
|8|Stored XSS into anchor href attribute with double quotes HTML-encoded                                                    |⬜     |—      |
|9|Reflected XSS into a JavaScript string with angle brackets HTML encoded                                                  |⬜     |—      |
|10|DOM XSS in document.write sink using source location.search inside a select element                                      |⬜     |—      |
|11|DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded                                       |⬜     |—      |
|12|Reflected DOM XSS                                                                                                        |⬜     |—      |
|13|Stored DOM XSS                                                                                                           |⬜     |—      |
|14|Reflected XSS into HTML context with most tags and attributes blocked                                                    |⬜     |—      |
|15|Reflected XSS into HTML context with all tags blocked except custom ones                                                 |⬜     |—      |
|16|Reflected XSS with some SVG markup allowed                                                                               |⬜     |—      |
|17|Reflected XSS in canonical link tag                                                                                      |⬜     |—      |
|18|Reflected XSS into a JavaScript string with single quote and backslash escaped                                           |⬜     |—      |
|19|Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped      |⬜     |—      |
|20|Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped |⬜     |—      |
|21|Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped|⬜     |—      |
|22|Exploiting cross-site scripting to steal cookies                                                                         |⬜     |—      |
|23|Exploiting cross-site scripting to capture passwords                                                                     |⬜     |—      |
|24|Exploiting XSS to bypass CSRF defenses                                                                                   |⬜     |—      |
|25|Reflected XSS with AngularJS sandbox escape without strings                                                              |⬜     |—      |
|26|Reflected XSS with AngularJS sandbox escape and CSP                                                                      |⬜     |—      |
|27|Reflected XSS with event handlers and href attributes blocked                                                            |⬜     |—      |
|28|Reflected XSS in a JavaScript URL with some characters blocked                                                           |⬜     |—      |
|29|Reflected XSS protected by very strict CSP, with dangling markup attack                                                  |⬜     |—      |
|30|Reflected XSS protected by CSP, with CSP bypass                                                                          |⬜     |—      |

## 3. CSRF — 0 / 12
|#|Lab                                                          |Status|Writeup|
|--|-------------------------------------------------------------|:----:|:-----:|
|1|CSRF vulnerability with no defenses                          |⬜     |—      |
|2|CSRF where token validation depends on request method        |⬜     |—      |
|3|CSRF where token validation depends on token being present   |⬜     |—      |
|4|CSRF where token is not tied to user session                 |⬜     |—      |
|5|CSRF where token is tied to non-session cookie               |⬜     |—      |
|6|CSRF where token is duplicated in cookie                     |⬜     |—      |
|7|SameSite Lax bypass via method override                      |⬜     |—      |
|8|SameSite Strict bypass via client-side redirect              |⬜     |—      |
|9|SameSite Strict bypass via sibling domain                    |⬜     |—      |
|10|SameSite Lax bypass via cookie refresh                       |⬜     |—      |
|11|CSRF where Referer validation depends on header being present|⬜     |—      |
|12|CSRF with broken Referer validation                          |⬜     |—      |

## 4. Clickjacking — 0 / 5
|#|Lab                                                             |Status|Writeup|
|--|----------------------------------------------------------------|:----:|:-----:|
|1|Basic clickjacking with CSRF token protection                   |⬜     |—      |
|2|Clickjacking with form input data prefilled from a URL parameter|⬜     |—      |
|3|Clickjacking with a frame buster script                         |⬜     |—      |
|4|Exploiting clickjacking vulnerability to trigger DOM-based XSS  |⬜     |—      |
|5|Multistep clickjacking                                          |⬜     |—      |

## 5. DOM-based Vulnerabilities — 0 / 7
|#|Lab                                             |Status|Writeup|
|--|------------------------------------------------|:----:|:-----:|
|1|DOM XSS using web messages                      |⬜     |—      |
|2|DOM XSS using web messages and a JavaScript URL |⬜     |—      |
|3|DOM XSS using web messages and JSON.parse       |⬜     |—      |
|4|DOM-based open redirection                      |⬜     |—      |
|5|DOM-based cookie manipulation                   |⬜     |—      |
|6|Exploiting DOM clobbering to enable XSS         |⬜     |—      |
|7|Clobbering DOM attributes to bypass HTML filters|⬜     |—      |

## 6. CORS — 0 / 3
|#|Lab                                               |Status|Writeup|
|--|--------------------------------------------------|:----:|:-----:|
|1|CORS vulnerability with basic origin reflection   |⬜     |—      |
|2|CORS vulnerability with trusted null origin       |⬜     |—      |
|3|CORS vulnerability with trusted insecure protocols|⬜     |—      |

## 7. XXE Injection — 0 / 9
|#|Lab                                                                   |Status|Writeup|
|--|----------------------------------------------------------------------|:----:|:-----:|
|1|Exploiting XXE using external entities to retrieve files              |⬜     |—      |
|2|Exploiting XXE to perform SSRF attacks                                |⬜     |—      |
|3|Blind XXE with out-of-band interaction                                |⬜     |—      |
|4|Blind XXE with out-of-band interaction via XML parameter entities     |⬜     |—      |
|5|Exploiting blind XXE to exfiltrate data using a malicious external DTD|⬜     |—      |
|6|Exploiting blind XXE to retrieve data via error messages              |⬜     |—      |
|7|Exploiting XInclude to retrieve files                                 |⬜     |—      |
|8|Exploiting XXE via image file upload                                  |⬜     |—      |
|9|Exploiting XXE to retrieve data by repurposing a local DTD            |⬜     |—      |

## 8. SSRF — 0 / 7
|#|Lab                                                       |Status|Writeup|
|--|----------------------------------------------------------|:----:|:-----:|
|1|Basic SSRF against the local server                       |⬜     |—      |
|2|Basic SSRF against another back-end system                |⬜     |—      |
|3|Blind SSRF with out-of-band detection                     |⬜     |—      |
|4|SSRF with blacklist-based input filter                    |⬜     |—      |
|5|SSRF with filter bypass via open redirection vulnerability|⬜     |—      |
|6|Blind SSRF with Shellshock exploitation                   |⬜     |—      |
|7|SSRF with whitelist-based input filter                    |⬜     |—      |

## 9. HTTP Request Smuggling — 0 / 21
|#|Lab                                                                                         |Status|Writeup|
|--|--------------------------------------------------------------------------------------------|:----:|:-----:|
|1|HTTP request smuggling, confirming a CL.TE vulnerability via differential responses         |⬜     |—      |
|2|HTTP request smuggling, confirming a TE.CL vulnerability via differential responses         |⬜     |—      |
|3|Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability|⬜     |—      |
|4|Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability|⬜     |—      |
|5|Exploiting HTTP request smuggling to reveal front-end request rewriting                     |⬜     |—      |
|6|Exploiting HTTP request smuggling to capture other users' requests                          |⬜     |—      |
|7|Exploiting HTTP request smuggling to deliver reflected XSS                                  |⬜     |—      |
|8|Response queue poisoning via H2.TE request smuggling                                        |⬜     |—      |
|9|H2.CL request smuggling                                                                     |⬜     |—      |
|10|HTTP/2 request smuggling via CRLF injection                                                 |⬜     |—      |
|11|HTTP/2 request splitting via CRLF injection                                                 |⬜     |—      |
|12|CL.0 request smuggling                                                                      |⬜     |—      |
|13|HTTP request smuggling, basic CL.TE vulnerability                                           |⬜     |—      |
|14|HTTP request smuggling, basic TE.CL vulnerability                                           |⬜     |—      |
|15|HTTP request smuggling, obfuscating the TE header                                           |⬜     |—      |
|16|Exploiting HTTP request smuggling to perform web cache poisoning                            |⬜     |—      |
|17|Exploiting HTTP request smuggling to perform web cache deception                            |⬜     |—      |
|18|Bypassing access controls via HTTP/2 request tunnelling                                     |⬜     |—      |
|19|Web cache poisoning via HTTP/2 request tunnelling                                           |⬜     |—      |
|20|Client-side desync                                                                          |⬜     |—      |
|21|Server-side pause-based request smuggling                                                   |⬜     |—      |

## 10. OS Command Injection — 0 / 5
|#|Lab                                                          |Status|Writeup|
|--|-------------------------------------------------------------|:----:|:-----:|
|1|OS command injection, simple case                            |⬜     |—      |
|2|Blind OS command injection with time delays                  |⬜     |—      |
|3|Blind OS command injection with output redirection           |⬜     |—      |
|4|Blind OS command injection with out-of-band interaction      |⬜     |—      |
|5|Blind OS command injection with out-of-band data exfiltration|⬜     |—      |

## 11. Server-Side Template Injection — 0 / 7
|#|Lab                                                                                 |Status|Writeup|
|--|------------------------------------------------------------------------------------|:----:|:-----:|
|1|Basic server-side template injection                                                |⬜     |—      |
|2|Server-side template injection (code context)                                       |⬜     |—      |
|3|Server-side template injection using documentation                                  |⬜     |—      |
|4|Server-side template injection in an unknown language with a documented exploit     |⬜     |—      |
|5|Server-side template injection with information disclosure via user-supplied objects|⬜     |—      |
|6|Server-side template injection in a sandboxed environment                           |⬜     |—      |
|7|Server-side template injection with a custom exploit                                |⬜     |—      |

## 12. Path Traversal — 0 / 6
|#|Lab                                                                          |Status|Writeup|
|--|-----------------------------------------------------------------------------|:----:|:-----:|
|1|File path traversal, simple case                                             |⬜     |—      |
|2|File path traversal, traversal sequences blocked with absolute path bypass   |⬜     |—      |
|3|File path traversal, traversal sequences stripped non-recursively            |⬜     |—      |
|4|File path traversal, traversal sequences stripped with superfluous URL-decode|⬜     |—      |
|5|File path traversal, validation of start of path                             |⬜     |—      |
|6|File path traversal, validation of file extension with null byte bypass      |⬜     |—      |

## 13. Access Control — 0 / 13
|#|Lab                                                                  |Status|Writeup|
|--|---------------------------------------------------------------------|:----:|:-----:|
|1|Unprotected admin functionality                                      |⬜     |—      |
|2|Unprotected admin functionality with unpredictable URL               |⬜     |—      |
|3|User role controlled by request parameter                            |⬜     |—      |
|4|User role can be modified in user profile                            |⬜     |—      |
|5|User ID controlled by request parameter                              |⬜     |—      |
|6|User ID controlled by request parameter, with unpredictable user IDs |⬜     |—      |
|7|User ID controlled by request parameter with data leakage in redirect|⬜     |—      |
|8|User ID controlled by request parameter with password disclosure     |⬜     |—      |
|9|Insecure direct object references                                    |⬜     |—      |
|10|URL-based access control can be circumvented                         |⬜     |—      |
|11|Method-based access control can be circumvented                      |⬜     |—      |
|12|Multi-step process with no access control on one step                |⬜     |—      |
|13|Referer-based access control                                         |⬜     |—      |

## 14. Authentication — 0 / 14
|#|Lab                                                            |Status|Writeup|
|--|---------------------------------------------------------------|:----:|:-----:|
|1|Username enumeration via different responses                   |⬜     |—      |
|2|2FA simple bypass                                              |⬜     |—      |
|3|Password reset broken logic                                    |⬜     |—      |
|4|Username enumeration via subtly different responses            |⬜     |—      |
|5|Username enumeration via response timing                       |⬜     |—      |
|6|Broken brute-force protection, IP block                        |⬜     |—      |
|7|Username enumeration via account lock                          |⬜     |—      |
|8|2FA broken logic                                               |⬜     |—      |
|9|Brute-forcing a stay-logged-in cookie                          |⬜     |—      |
|10|Offline password cracking                                      |⬜     |—      |
|11|Password reset poisoning via middleware                        |⬜     |—      |
|12|Password brute-force via password change                       |⬜     |—      |
|13|Broken brute-force protection, multiple credentials per request|⬜     |—      |
|14|2FA bypass using a brute-force attack                          |⬜     |—      |

## 15. WebSockets — 0 / 3
|#|Lab                                                            |Status|Writeup|
|--|---------------------------------------------------------------|:----:|:-----:|
|1|Manipulating WebSocket messages to exploit vulnerabilities     |⬜     |—      |
|2|Cross-site WebSocket hijacking                                 |⬜     |—      |
|3|Manipulating the WebSocket handshake to exploit vulnerabilities|⬜     |—      |

## 16. Web Cache Poisoning — 0 / 13
|#|Lab                                                                                             |Status|Writeup|
|--|------------------------------------------------------------------------------------------------|:----:|:-----:|
|1|Web cache poisoning with an unkeyed header                                                      |⬜     |—      |
|2|Web cache poisoning with an unkeyed cookie                                                      |⬜     |—      |
|3|Web cache poisoning with multiple headers                                                       |⬜     |—      |
|4|Targeted web cache poisoning using an unknown header                                            |⬜     |—      |
|5|Web cache poisoning via an unkeyed query string                                                 |⬜     |—      |
|6|Web cache poisoning via an unkeyed query parameter                                              |⬜     |—      |
|7|Parameter cloaking                                                                              |⬜     |—      |
|8|Web cache poisoning via a fat GET request                                                       |⬜     |—      |
|9|URL normalization                                                                               |⬜     |—      |
|10|Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria|⬜     |—      |
|11|Combining web cache poisoning vulnerabilities                                                   |⬜     |—      |
|12|Cache key injection                                                                             |⬜     |—      |
|13|Internal cache poisoning                                                                        |⬜     |—      |

## 17. Insecure Deserialization — 0 / 10
|#|Lab                                                                |Status|Writeup|
|--|-------------------------------------------------------------------|:----:|:-----:|
|1|Modifying serialized objects                                       |⬜     |—      |
|2|Modifying serialized data types                                    |⬜     |—      |
|3|Using application functionality to exploit insecure deserialization|⬜     |—      |
|4|Arbitrary object injection in PHP                                  |⬜     |—      |
|5|Exploiting Java deserialization with Apache Commons                |⬜     |—      |
|6|Exploiting PHP deserialization with a pre-built gadget chain       |⬜     |—      |
|7|Exploiting Ruby deserialization using a documented gadget chain    |⬜     |—      |
|8|Developing a custom gadget chain for Java deserialization          |⬜     |—      |
|9|Developing a custom gadget chain for PHP deserialization           |⬜     |—      |
|10|Using PHAR deserialization to deploy a custom gadget chain         |⬜     |—      |

## 18. Information Disclosure — 0 / 5
|#|Lab                                              |Status|Writeup|
|--|-------------------------------------------------|:----:|:-----:|
|1|Information disclosure in error messages         |⬜     |—      |
|2|Information disclosure on debug page             |⬜     |—      |
|3|Source code disclosure via backup files          |⬜     |—      |
|4|Authentication bypass via information disclosure |⬜     |—      |
|5|Information disclosure in version control history|⬜     |—      |

## 19. Business Logic — 0 / 11
|#|Lab                                                                |Status|Writeup|
|--|-------------------------------------------------------------------|:----:|:-----:|
|1|Excessive trust in client-side controls                            |⬜     |—      |
|2|High-level logic vulnerability                                     |⬜     |—      |
|3|Inconsistent security controls                                     |⬜     |—      |
|4|Flawed enforcement of business rules                               |⬜     |—      |
|5|Low-level logic flaw                                               |⬜     |—      |
|6|Inconsistent handling of exceptional input                         |⬜     |—      |
|7|Weak isolation on dual-use endpoint                                |⬜     |—      |
|8|Insufficient workflow validation                                   |⬜     |—      |
|9|Authentication bypass via flawed state machine                     |⬜     |—      |
|10|Infinite money logic flaw                                          |⬜     |—      |
|11|Bypassing access controls using email address parsing discrepancies|⬜     |—      |

## 20. HTTP Host Header Attacks — 0 / 7
|#|Lab                                               |Status|Writeup|
|--|--------------------------------------------------|:----:|:-----:|
|1|Basic password reset poisoning                    |⬜     |—      |
|2|Host header authentication bypass                 |⬜     |—      |
|3|Web cache poisoning via ambiguous requests        |⬜     |—      |
|4|Routing-based SSRF                                |⬜     |—      |
|5|SSRF via flawed request parsing                   |⬜     |—      |
|6|Host validation bypass via connection state attack|⬜     |—      |
|7|Password reset poisoning via dangling markup      |⬜     |—      |

## 21. OAuth Authentication — 0 / 6
|#|Lab                                              |Status|Writeup|
|--|-------------------------------------------------|:----:|:-----:|
|1|Authentication bypass via OAuth implicit flow    |⬜     |—      |
|2|SSRF via OpenID dynamic client registration      |⬜     |—      |
|3|Forced OAuth profile linking                     |⬜     |—      |
|4|OAuth account hijacking via redirect_uri         |⬜     |—      |
|5|Stealing OAuth access tokens via an open redirect|⬜     |—      |
|6|Stealing OAuth access tokens via a proxy page    |⬜     |—      |

## 22. File Upload Vulnerabilities — 0 / 7
|#|Lab                                                 |Status|Writeup|
|--|----------------------------------------------------|:----:|:-----:|
|1|Remote code execution via web shell upload          |⬜     |—      |
|2|Web shell upload via Content-Type restriction bypass|⬜     |—      |
|3|Web shell upload via path traversal                 |⬜     |—      |
|4|Web shell upload via extension blacklist bypass     |⬜     |—      |
|5|Web shell upload via obfuscated file extension      |⬜     |—      |
|6|Remote code execution via polyglot web shell upload |⬜     |—      |
|7|Web shell upload via race condition                 |⬜     |—      |

## 23. JWT Attacks — 0 / 8
|#|Lab                                                                  |Status|Writeup|
|--|---------------------------------------------------------------------|:----:|:-----:|
|1|JWT authentication bypass via unverified signature                   |⬜     |—      |
|2|JWT authentication bypass via flawed signature verification          |⬜     |—      |
|3|JWT authentication bypass via weak signing key                       |⬜     |—      |
|4|JWT authentication bypass via jwk header injection                   |⬜     |—      |
|5|JWT authentication bypass via jku header injection                   |⬜     |—      |
|6|JWT authentication bypass via kid header path traversal              |⬜     |—      |
|7|JWT authentication bypass via algorithm confusion                    |⬜     |—      |
|8|JWT authentication bypass via algorithm confusion with no exposed key|⬜     |—      |

## 24. Essential Skills — 0 / 2
|#|Lab                                                       |Status|Writeup|
|--|----------------------------------------------------------|:----:|:-----:|
|1|Discovering vulnerabilities quickly with targeted scanning|⬜     |—      |
|2|Scanning non-standard data structures                     |⬜     |—      |

## 25. Prototype Pollution — 0 / 10
|#|Lab                                                                           |Status|Writeup|
|--|------------------------------------------------------------------------------|:----:|:-----:|
|1|Client-side prototype pollution via browser APIs                              |⬜     |—      |
|2|DOM XSS via client-side prototype pollution                                   |⬜     |—      |
|3|DOM XSS via an alternative prototype pollution vector                         |⬜     |—      |
|4|Client-side prototype pollution via flawed sanitization                       |⬜     |—      |
|5|Client-side prototype pollution in third-party libraries                      |⬜     |—      |
|6|Privilege escalation via server-side prototype pollution                      |⬜     |—      |
|7|Detecting server-side prototype pollution without polluted property reflection|⬜     |—      |
|8|Bypassing flawed input filters for server-side prototype pollution            |⬜     |—      |
|9|Remote code execution via server-side prototype pollution                     |⬜     |—      |
|10|Exfiltrating sensitive data via server-side prototype pollution               |⬜     |—      |

## 26. GraphQL API Vulnerabilities — 0 / 5
|#|Lab                                          |Status|Writeup|
|--|---------------------------------------------|:----:|:-----:|
|1|Accessing private GraphQL posts              |⬜     |—      |
|2|Accidental exposure of private GraphQL fields|⬜     |—      |
|3|Finding a hidden GraphQL endpoint            |⬜     |—      |
|4|Bypassing GraphQL brute force protections    |⬜     |—      |
|5|Performing CSRF exploits over GraphQL        |⬜     |—      |

## 27. Race Conditions — 0 / 6
|#|Lab                                      |Status|Writeup|
|--|-----------------------------------------|:----:|:-----:|
|1|Limit overrun race conditions            |⬜     |—      |
|2|Bypassing rate limits via race conditions|⬜     |—      |
|3|Multi-endpoint race conditions           |⬜     |—      |
|4|Single-endpoint race conditions          |⬜     |—      |
|5|Exploiting time-sensitive vulnerabilities|⬜     |—      |
|6|Partial construction race conditions     |⬜     |—      |

## 28. NoSQL Injection — 0 / 4
|#|Lab                                                          |Status|Writeup|
|--|-------------------------------------------------------------|:----:|:-----:|
|1|Detecting NoSQL injection                                    |⬜     |—      |
|2|Exploiting NoSQL operator injection to bypass authentication |⬜     |—      |
|3|Exploiting NoSQL injection to extract data                   |⬜     |—      |
|4|Exploiting NoSQL operator injection to extract unknown fields|⬜     |—      |

## 29. API Testing — 0 / 5
|#|Lab                                                         |Status|Writeup|
|--|------------------------------------------------------------|:----:|:-----:|
|1|Exploiting an API endpoint using documentation              |⬜     |—      |
|2|Exploiting server-side parameter pollution in a query string|⬜     |—      |
|3|Finding and exploiting an unused API endpoint               |⬜     |—      |
|4|Exploiting a mass assignment vulnerability                  |⬜     |—      |
|5|Exploiting server-side parameter pollution in a REST URL    |⬜     |—      |

## 30. Web LLM Attacks — 0 / 4
|#|Lab                                        |Status|Writeup|
|--|-------------------------------------------|:----:|:-----:|
|1|Exploiting LLM APIs with excessive agency  |⬜     |—      |
|2|Exploiting vulnerabilities in LLM APIs     |⬜     |—      |
|3|Indirect prompt injection                  |⬜     |—      |
|4|Exploiting insecure output handling in LLMs|⬜     |—      |

## 31. Web Cache Deception — 0 / 5
|#|Lab                                                           |Status|Writeup|
|--|--------------------------------------------------------------|:----:|:-----:|
|1|Exploiting path mapping for web cache deception               |⬜     |—      |
|2|Exploiting path delimiters for web cache deception            |⬜     |—      |
|3|Exploiting origin server normalization for web cache deception|⬜     |—      |
|4|Exploiting cache server normalization for web cache deception |⬜     |—      |
|5|Exploiting exact-match cache rules for web cache deception    |⬜     |—      |

-----

*Last updated: 2026-04-20. Lab data and ordering follow [onyxwizard/portswigger-academy](https://github.com/onyxwizard/portswigger-academy) under MIT License.*
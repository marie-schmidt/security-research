---
title: PortSwigger Progress
author: marie
date: 2026-04-20T00:00:00-07:00
categories: [Labs & CTFs, PortSwigger]
tags: [portswigger, roadmap]
description: “Live tracker for my pass through the PortSwigger Web Security Academy — all 146 labs, current status, and links to writeups as they land.”
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

Live tracker for my pass through the [PortSwigger Web Security Academy](https://portswigger.net/web-security). Lab ordering follows [onyxwizard’s roadmap](https://github.com/onyxwizard/portswigger-academy), and the reasoning behind that choice is in [Episode #2](/posts/episode-2-picking-a-path-through-portswigger-labs/).

This page updates as I go. Writeup links fill in progressively — not every lab gets one (the trivial Apprentice ones often don’t), but anything that taught me something non-obvious will.

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
|Difficulty  |Lab                                                                                                                                                                                                           |Status|Writeup|
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |[SQL injection in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)                                                                |⬜     |—      |
|Apprentice  |[SQL injection allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass)                                                                                                    |⬜     |—      |
|Practitioner|[SQL injection attack, querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle)                      |⬜     |—      |
|Practitioner|[SQL injection attack, querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft)|⬜     |—      |
|Practitioner|[SQL injection attack, listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle)             |⬜     |—      |
|Practitioner|[SQL injection attack, listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle)                               |⬜     |—      |
|Practitioner|[SQL injection UNION attack, determining the number of columns returned by the query](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns)                       |⬜     |—      |
|Practitioner|[SQL injection UNION attack, finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text)                                              |⬜     |—      |
|Practitioner|[SQL injection UNION attack, retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables)                                         |⬜     |—      |
|Practitioner|[SQL injection UNION attack, retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column)                   |⬜     |—      |
|Practitioner|[Blind SQL injection with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses)                                                                          |⬜     |—      |
|Practitioner|[Blind SQL injection with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors)                                                                                |⬜     |—      |
|Practitioner|[Visible error-based SQL injection](https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based)                                                                           |⬜     |—      |
|Practitioner|[Blind SQL injection with time delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays)                                                                                              |⬜     |—      |
|Practitioner|[Blind SQL injection with time delays and information retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval)                                                     |⬜     |—      |
|Practitioner|[Blind SQL injection with out-of-band interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band)                                                                                  |⬜     |—      |
|Practitioner|[Blind SQL injection with out-of-band data exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration)                                                          |⬜     |—      |
|Practitioner|[SQL injection with filter bypass via XML encoding](https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding)                                                 |⬜     |—      |

## 2. Cross-Site Scripting (XSS) — 0 / 30
|Difficulty  |Lab                                                                                                                      |Status|Writeup|
|------------|-------------------------------------------------------------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Reflected XSS into HTML context with nothing encoded                                                                     |⬜     |—      |
|Apprentice  |Stored XSS into HTML context with nothing encoded                                                                        |⬜     |—      |
|Apprentice  |DOM XSS in document.write sink using source location.search                                                              |⬜     |—      |
|Apprentice  |DOM XSS in innerHTML sink using source location.search                                                                   |⬜     |—      |
|Apprentice  |DOM XSS in jQuery anchor href attribute sink using location.search source                                                |⬜     |—      |
|Apprentice  |DOM XSS in jQuery selector sink using a hashchange event                                                                 |⬜     |—      |
|Apprentice  |Reflected XSS into attribute with angle brackets HTML-encoded                                                            |⬜     |—      |
|Apprentice  |Stored XSS into anchor href attribute with double quotes HTML-encoded                                                    |⬜     |—      |
|Apprentice  |Reflected XSS into a JavaScript string with angle brackets HTML encoded                                                  |⬜     |—      |
|Practitioner|DOM XSS in document.write sink using source location.search inside a select element                                      |⬜     |—      |
|Practitioner|DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded                                       |⬜     |—      |
|Practitioner|Reflected DOM XSS                                                                                                        |⬜     |—      |
|Practitioner|Stored DOM XSS                                                                                                           |⬜     |—      |
|Practitioner|Reflected XSS into HTML context with most tags and attributes blocked                                                    |⬜     |—      |
|Practitioner|Reflected XSS into HTML context with all tags blocked except custom ones                                                 |⬜     |—      |
|Practitioner|Reflected XSS with some SVG markup allowed                                                                               |⬜     |—      |
|Practitioner|Reflected XSS in canonical link tag                                                                                      |⬜     |—      |
|Practitioner|Reflected XSS into a JavaScript string with single quote and backslash escaped                                           |⬜     |—      |
|Practitioner|Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped      |⬜     |—      |
|Practitioner|Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped |⬜     |—      |
|Practitioner|Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped|⬜     |—      |
|Practitioner|Exploiting cross-site scripting to steal cookies                                                                         |⬜     |—      |
|Practitioner|Exploiting cross-site scripting to capture passwords                                                                     |⬜     |—      |
|Practitioner|Exploiting XSS to bypass CSRF defenses                                                                                   |⬜     |—      |
|Expert      |Reflected XSS with AngularJS sandbox escape without strings                                                              |⬜     |—      |
|Expert      |Reflected XSS with AngularJS sandbox escape and CSP                                                                      |⬜     |—      |
|Expert      |Reflected XSS with event handlers and href attributes blocked                                                            |⬜     |—      |
|Expert      |Reflected XSS in a JavaScript URL with some characters blocked                                                           |⬜     |—      |
|Expert      |Reflected XSS protected by very strict CSP, with dangling markup attack                                                  |⬜     |—      |
|Expert      |Reflected XSS protected by CSP, with CSP bypass                                                                          |⬜     |—      |

## 3. CSRF — 0 / 12
|Difficulty  |Lab                                                          |Status|Writeup|
|------------|-------------------------------------------------------------|:----:|:-----:|
|Apprentice  |CSRF vulnerability with no defenses                          |⬜     |—      |
|Practitioner|CSRF where token validation depends on request method        |⬜     |—      |
|Practitioner|CSRF where token validation depends on token being present   |⬜     |—      |
|Practitioner|CSRF where token is not tied to user session                 |⬜     |—      |
|Practitioner|CSRF where token is tied to non-session cookie               |⬜     |—      |
|Practitioner|CSRF where token is duplicated in cookie                     |⬜     |—      |
|Practitioner|SameSite Lax bypass via method override                      |⬜     |—      |
|Practitioner|SameSite Strict bypass via client-side redirect              |⬜     |—      |
|Practitioner|SameSite Strict bypass via sibling domain                    |⬜     |—      |
|Practitioner|SameSite Lax bypass via cookie refresh                       |⬜     |—      |
|Practitioner|CSRF where Referer validation depends on header being present|⬜     |—      |
|Practitioner|CSRF with broken Referer validation                          |⬜     |—      |

## 4. Clickjacking — 0 / 5
|Difficulty  |Lab                                                             |Status|Writeup|
|------------|----------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Basic clickjacking with CSRF token protection                   |⬜     |—      |
|Apprentice  |Clickjacking with form input data prefilled from a URL parameter|⬜     |—      |
|Apprentice  |Clickjacking with a frame buster script                         |⬜     |—      |
|Practitioner|Exploiting clickjacking vulnerability to trigger DOM-based XSS  |⬜     |—      |
|Practitioner|Multistep clickjacking                                          |⬜     |—      |

## 5. DOM-based Vulnerabilities — 0 / 7
|Difficulty  |Lab                                             |Status|Writeup|
|------------|------------------------------------------------|:----:|:-----:|
|Practitioner|DOM XSS using web messages                      |⬜     |—      |
|Practitioner|DOM XSS using web messages and a JavaScript URL |⬜     |—      |
|Practitioner|DOM XSS using web messages and JSON.parse       |⬜     |—      |
|Practitioner|DOM-based open redirection                      |⬜     |—      |
|Practitioner|DOM-based cookie manipulation                   |⬜     |—      |
|Expert      |Exploiting DOM clobbering to enable XSS         |⬜     |—      |
|Expert      |Clobbering DOM attributes to bypass HTML filters|⬜     |—      |

## 6. CORS — 0 / 3
|Difficulty  |Lab                                               |Status|Writeup|
|------------|--------------------------------------------------|:----:|:-----:|
|Apprentice  |CORS vulnerability with basic origin reflection   |⬜     |—      |
|Apprentice  |CORS vulnerability with trusted null origin       |⬜     |—      |
|Practitioner|CORS vulnerability with trusted insecure protocols|⬜     |—      |

## 7. XXE Injection — 0 / 9
|Difficulty  |Lab                                                                   |Status|Writeup|
|------------|----------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Exploiting XXE using external entities to retrieve files              |⬜     |—      |
|Apprentice  |Exploiting XXE to perform SSRF attacks                                |⬜     |—      |
|Practitioner|Blind XXE with out-of-band interaction                                |⬜     |—      |
|Practitioner|Blind XXE with out-of-band interaction via XML parameter entities     |⬜     |—      |
|Practitioner|Exploiting blind XXE to exfiltrate data using a malicious external DTD|⬜     |—      |
|Practitioner|Exploiting blind XXE to retrieve data via error messages              |⬜     |—      |
|Practitioner|Exploiting XInclude to retrieve files                                 |⬜     |—      |
|Practitioner|Exploiting XXE via image file upload                                  |⬜     |—      |
|Expert      |Exploiting XXE to retrieve data by repurposing a local DTD            |⬜     |—      |

## 8. SSRF — 0 / 7
|Difficulty  |Lab                                                       |Status|Writeup|
|------------|----------------------------------------------------------|:----:|:-----:|
|Apprentice  |Basic SSRF against the local server                       |⬜     |—      |
|Apprentice  |Basic SSRF against another back-end system                |⬜     |—      |
|Practitioner|Blind SSRF with out-of-band detection                     |⬜     |—      |
|Practitioner|SSRF with blacklist-based input filter                    |⬜     |—      |
|Practitioner|SSRF with filter bypass via open redirection vulnerability|⬜     |—      |
|Expert      |Blind SSRF with Shellshock exploitation                   |⬜     |—      |
|Expert      |SSRF with whitelist-based input filter                    |⬜     |—      |

## 9. HTTP Request Smuggling — 0 / 21
|Difficulty  |Lab                                                                                         |Status|Writeup|
|------------|--------------------------------------------------------------------------------------------|:----:|:-----:|
|Practitioner|HTTP request smuggling, confirming a CL.TE vulnerability via differential responses         |⬜     |—      |
|Practitioner|HTTP request smuggling, confirming a TE.CL vulnerability via differential responses         |⬜     |—      |
|Practitioner|Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability|⬜     |—      |
|Practitioner|Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability|⬜     |—      |
|Practitioner|Exploiting HTTP request smuggling to reveal front-end request rewriting                     |⬜     |—      |
|Practitioner|Exploiting HTTP request smuggling to capture other users’ requests                          |⬜     |—      |
|Practitioner|Exploiting HTTP request smuggling to deliver reflected XSS                                  |⬜     |—      |
|Practitioner|Response queue poisoning via H2.TE request smuggling                                        |⬜     |—      |
|Practitioner|H2.CL request smuggling                                                                     |⬜     |—      |
|Practitioner|HTTP/2 request smuggling via CRLF injection                                                 |⬜     |—      |
|Practitioner|HTTP/2 request splitting via CRLF injection                                                 |⬜     |—      |
|Practitioner|CL.0 request smuggling                                                                      |⬜     |—      |
|Practitioner|HTTP request smuggling, basic CL.TE vulnerability                                           |⬜     |—      |
|Practitioner|HTTP request smuggling, basic TE.CL vulnerability                                           |⬜     |—      |
|Practitioner|HTTP request smuggling, obfuscating the TE header                                           |⬜     |—      |
|Expert      |Exploiting HTTP request smuggling to perform web cache poisoning                            |⬜     |—      |
|Expert      |Exploiting HTTP request smuggling to perform web cache deception                            |⬜     |—      |
|Expert      |Bypassing access controls via HTTP/2 request tunnelling                                     |⬜     |—      |
|Expert      |Web cache poisoning via HTTP/2 request tunnelling                                           |⬜     |—      |
|Expert      |Client-side desync                                                                          |⬜     |—      |
|Expert      |Server-side pause-based request smuggling                                                   |⬜     |—      |

## 10. OS Command Injection — 0 / 5
|Difficulty  |Lab                                                          |Status|Writeup|
|------------|-------------------------------------------------------------|:----:|:-----:|
|Apprentice  |OS command injection, simple case                            |⬜     |—      |
|Practitioner|Blind OS command injection with time delays                  |⬜     |—      |
|Practitioner|Blind OS command injection with output redirection           |⬜     |—      |
|Practitioner|Blind OS command injection with out-of-band interaction      |⬜     |—      |
|Practitioner|Blind OS command injection with out-of-band data exfiltration|⬜     |—      |

## 11. Server-Side Template Injection — 0 / 7
|Difficulty  |Lab                                                                                 |Status|Writeup|
|------------|------------------------------------------------------------------------------------|:----:|:-----:|
|Practitioner|Basic server-side template injection                                                |⬜     |—      |
|Practitioner|Server-side template injection (code context)                                       |⬜     |—      |
|Practitioner|Server-side template injection using documentation                                  |⬜     |—      |
|Practitioner|Server-side template injection in an unknown language with a documented exploit     |⬜     |—      |
|Practitioner|Server-side template injection with information disclosure via user-supplied objects|⬜     |—      |
|Expert      |Server-side template injection in a sandboxed environment                           |⬜     |—      |
|Expert      |Server-side template injection with a custom exploit                                |⬜     |—      |

## 12. Path Traversal — 0 / 6
|Difficulty  |Lab                                                                          |Status|Writeup|
|------------|-----------------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |File path traversal, simple case                                             |⬜     |—      |
|Practitioner|File path traversal, traversal sequences blocked with absolute path bypass   |⬜     |—      |
|Practitioner|File path traversal, traversal sequences stripped non-recursively            |⬜     |—      |
|Practitioner|File path traversal, traversal sequences stripped with superfluous URL-decode|⬜     |—      |
|Practitioner|File path traversal, validation of start of path                             |⬜     |—      |
|Practitioner|File path traversal, validation of file extension with null byte bypass      |⬜     |—      |

## 13. Access Control — 0 / 13
|Difficulty  |Lab                                                                  |Status|Writeup|
|------------|---------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Unprotected admin functionality                                      |⬜     |—      |
|Apprentice  |Unprotected admin functionality with unpredictable URL               |⬜     |—      |
|Apprentice  |User role controlled by request parameter                            |⬜     |—      |
|Apprentice  |User role can be modified in user profile                            |⬜     |—      |
|Apprentice  |User ID controlled by request parameter                              |⬜     |—      |
|Apprentice  |User ID controlled by request parameter, with unpredictable user IDs |⬜     |—      |
|Apprentice  |User ID controlled by request parameter with data leakage in redirect|⬜     |—      |
|Apprentice  |User ID controlled by request parameter with password disclosure     |⬜     |—      |
|Apprentice  |Insecure direct object references                                    |⬜     |—      |
|Practitioner|URL-based access control can be circumvented                         |⬜     |—      |
|Practitioner|Method-based access control can be circumvented                      |⬜     |—      |
|Practitioner|Multi-step process with no access control on one step                |⬜     |—      |
|Practitioner|Referer-based access control                                         |⬜     |—      |

## 14. Authentication — 0 / 14
|Difficulty  |Lab                                                            |Status|Writeup|
|------------|---------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Username enumeration via different responses                   |⬜     |—      |
|Apprentice  |2FA simple bypass                                              |⬜     |—      |
|Apprentice  |Password reset broken logic                                    |⬜     |—      |
|Practitioner|Username enumeration via subtly different responses            |⬜     |—      |
|Practitioner|Username enumeration via response timing                       |⬜     |—      |
|Practitioner|Broken brute-force protection, IP block                        |⬜     |—      |
|Practitioner|Username enumeration via account lock                          |⬜     |—      |
|Practitioner|2FA broken logic                                               |⬜     |—      |
|Practitioner|Brute-forcing a stay-logged-in cookie                          |⬜     |—      |
|Practitioner|Offline password cracking                                      |⬜     |—      |
|Practitioner|Password reset poisoning via middleware                        |⬜     |—      |
|Practitioner|Password brute-force via password change                       |⬜     |—      |
|Expert      |Broken brute-force protection, multiple credentials per request|⬜     |—      |
|Expert      |2FA bypass using a brute-force attack                          |⬜     |—      |

## 15. WebSockets — 0 / 3
|Difficulty  |Lab                                                            |Status|Writeup|
|------------|---------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Manipulating WebSocket messages to exploit vulnerabilities     |⬜     |—      |
|Practitioner|Cross-site WebSocket hijacking                                 |⬜     |—      |
|Practitioner|Manipulating the WebSocket handshake to exploit vulnerabilities|⬜     |—      |

## 16. Web Cache Poisoning — 0 / 13
|Difficulty  |Lab                                                                                             |Status|Writeup|
|------------|------------------------------------------------------------------------------------------------|:----:|:-----:|
|Practitioner|Web cache poisoning with an unkeyed header                                                      |⬜     |—      |
|Practitioner|Web cache poisoning with an unkeyed cookie                                                      |⬜     |—      |
|Practitioner|Web cache poisoning with multiple headers                                                       |⬜     |—      |
|Practitioner|Targeted web cache poisoning using an unknown header                                            |⬜     |—      |
|Practitioner|Web cache poisoning via an unkeyed query string                                                 |⬜     |—      |
|Practitioner|Web cache poisoning via an unkeyed query parameter                                              |⬜     |—      |
|Practitioner|Parameter cloaking                                                                              |⬜     |—      |
|Practitioner|Web cache poisoning via a fat GET request                                                       |⬜     |—      |
|Practitioner|URL normalization                                                                               |⬜     |—      |
|Expert      |Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria|⬜     |—      |
|Expert      |Combining web cache poisoning vulnerabilities                                                   |⬜     |—      |
|Expert      |Cache key injection                                                                             |⬜     |—      |
|Expert      |Internal cache poisoning                                                                        |⬜     |—      |

## 17. Insecure Deserialization — 0 / 10
|Difficulty  |Lab                                                                |Status|Writeup|
|------------|-------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Modifying serialized objects                                       |⬜     |—      |
|Practitioner|Modifying serialized data types                                    |⬜     |—      |
|Practitioner|Using application functionality to exploit insecure deserialization|⬜     |—      |
|Practitioner|Arbitrary object injection in PHP                                  |⬜     |—      |
|Practitioner|Exploiting Java deserialization with Apache Commons                |⬜     |—      |
|Practitioner|Exploiting PHP deserialization with a pre-built gadget chain       |⬜     |—      |
|Practitioner|Exploiting Ruby deserialization using a documented gadget chain    |⬜     |—      |
|Expert      |Developing a custom gadget chain for Java deserialization          |⬜     |—      |
|Expert      |Developing a custom gadget chain for PHP deserialization           |⬜     |—      |
|Expert      |Using PHAR deserialization to deploy a custom gadget chain         |⬜     |—      |

## 18. Information Disclosure — 0 / 5
|Difficulty  |Lab                                              |Status|Writeup|
|------------|-------------------------------------------------|:----:|:-----:|
|Apprentice  |Information disclosure in error messages         |⬜     |—      |
|Apprentice  |Information disclosure on debug page             |⬜     |—      |
|Apprentice  |Source code disclosure via backup files          |⬜     |—      |
|Apprentice  |Authentication bypass via information disclosure |⬜     |—      |
|Practitioner|Information disclosure in version control history|⬜     |—      |

## 19. Business Logic — 0 / 11
|Difficulty  |Lab                                                                |Status|Writeup|
|------------|-------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Excessive trust in client-side controls                            |⬜     |—      |
|Apprentice  |High-level logic vulnerability                                     |⬜     |—      |
|Apprentice  |Inconsistent security controls                                     |⬜     |—      |
|Apprentice  |Flawed enforcement of business rules                               |⬜     |—      |
|Practitioner|Low-level logic flaw                                               |⬜     |—      |
|Practitioner|Inconsistent handling of exceptional input                         |⬜     |—      |
|Practitioner|Weak isolation on dual-use endpoint                                |⬜     |—      |
|Practitioner|Insufficient workflow validation                                   |⬜     |—      |
|Practitioner|Authentication bypass via flawed state machine                     |⬜     |—      |
|Practitioner|Infinite money logic flaw                                          |⬜     |—      |
|Expert      |Bypassing access controls using email address parsing discrepancies|⬜     |—      |

## 20. HTTP Host Header Attacks — 0 / 7
|Difficulty  |Lab                                               |Status|Writeup|
|------------|--------------------------------------------------|:----:|:-----:|
|Apprentice  |Basic password reset poisoning                    |⬜     |—      |
|Apprentice  |Host header authentication bypass                 |⬜     |—      |
|Practitioner|Web cache poisoning via ambiguous requests        |⬜     |—      |
|Practitioner|Routing-based SSRF                                |⬜     |—      |
|Practitioner|SSRF via flawed request parsing                   |⬜     |—      |
|Practitioner|Host validation bypass via connection state attack|⬜     |—      |
|Expert      |Password reset poisoning via dangling markup      |⬜     |—      |

## 21. OAuth Authentication — 0 / 6
|Difficulty  |Lab                                              |Status|Writeup|
|------------|-------------------------------------------------|:----:|:-----:|
|Apprentice  |Authentication bypass via OAuth implicit flow    |⬜     |—      |
|Practitioner|SSRF via OpenID dynamic client registration      |⬜     |—      |
|Practitioner|Forced OAuth profile linking                     |⬜     |—      |
|Practitioner|OAuth account hijacking via redirect_uri         |⬜     |—      |
|Practitioner|Stealing OAuth access tokens via an open redirect|⬜     |—      |
|Expert      |Stealing OAuth access tokens via a proxy page    |⬜     |—      |

## 22. File Upload Vulnerabilities — 0 / 7
|Difficulty  |Lab                                                 |Status|Writeup|
|------------|----------------------------------------------------|:----:|:-----:|
|Apprentice  |Remote code execution via web shell upload          |⬜     |—      |
|Apprentice  |Web shell upload via Content-Type restriction bypass|⬜     |—      |
|Practitioner|Web shell upload via path traversal                 |⬜     |—      |
|Practitioner|Web shell upload via extension blacklist bypass     |⬜     |—      |
|Practitioner|Web shell upload via obfuscated file extension      |⬜     |—      |
|Practitioner|Remote code execution via polyglot web shell upload |⬜     |—      |
|Expert      |Web shell upload via race condition                 |⬜     |—      |

## 23. JWT Attacks — 0 / 8
|Difficulty  |Lab                                                                  |Status|Writeup|
|------------|---------------------------------------------------------------------|:----:|:-----:|
|Apprentice  |JWT authentication bypass via unverified signature                   |⬜     |—      |
|Apprentice  |JWT authentication bypass via flawed signature verification          |⬜     |—      |
|Practitioner|JWT authentication bypass via weak signing key                       |⬜     |—      |
|Practitioner|JWT authentication bypass via jwk header injection                   |⬜     |—      |
|Practitioner|JWT authentication bypass via jku header injection                   |⬜     |—      |
|Practitioner|JWT authentication bypass via kid header path traversal              |⬜     |—      |
|Expert      |JWT authentication bypass via algorithm confusion                    |⬜     |—      |
|Expert      |JWT authentication bypass via algorithm confusion with no exposed key|⬜     |—      |

## 24. Essential Skills — 0 / 2
|Difficulty  |Lab                                                       |Status|Writeup|
|------------|----------------------------------------------------------|:----:|:-----:|
|Practitioner|Discovering vulnerabilities quickly with targeted scanning|⬜     |—      |
|Practitioner|Scanning non-standard data structures                     |⬜     |—      |

## 25. Prototype Pollution — 0 / 10
|Difficulty  |Lab                                                                           |Status|Writeup|
|------------|------------------------------------------------------------------------------|:----:|:-----:|
|Practitioner|Client-side prototype pollution via browser APIs                              |⬜     |—      |
|Practitioner|DOM XSS via client-side prototype pollution                                   |⬜     |—      |
|Practitioner|DOM XSS via an alternative prototype pollution vector                         |⬜     |—      |
|Practitioner|Client-side prototype pollution via flawed sanitization                       |⬜     |—      |
|Practitioner|Client-side prototype pollution in third-party libraries                      |⬜     |—      |
|Practitioner|Privilege escalation via server-side prototype pollution                      |⬜     |—      |
|Practitioner|Detecting server-side prototype pollution without polluted property reflection|⬜     |—      |
|Practitioner|Bypassing flawed input filters for server-side prototype pollution            |⬜     |—      |
|Practitioner|Remote code execution via server-side prototype pollution                     |⬜     |—      |
|Expert      |Exfiltrating sensitive data via server-side prototype pollution               |⬜     |—      |

## 26. GraphQL API Vulnerabilities — 0 / 5
|Difficulty  |Lab                                          |Status|Writeup|
|------------|---------------------------------------------|:----:|:-----:|
|Apprentice  |Accessing private GraphQL posts              |⬜     |—      |
|Practitioner|Accidental exposure of private GraphQL fields|⬜     |—      |
|Practitioner|Finding a hidden GraphQL endpoint            |⬜     |—      |
|Practitioner|Bypassing GraphQL brute force protections    |⬜     |—      |
|Practitioner|Performing CSRF exploits over GraphQL        |⬜     |—      |

## 27. Race Conditions — 0 / 6
|Difficulty  |Lab                                      |Status|Writeup|
|------------|-----------------------------------------|:----:|:-----:|
|Apprentice  |Limit overrun race conditions            |⬜     |—      |
|Practitioner|Bypassing rate limits via race conditions|⬜     |—      |
|Practitioner|Multi-endpoint race conditions           |⬜     |—      |
|Practitioner|Single-endpoint race conditions          |⬜     |—      |
|Practitioner|Exploiting time-sensitive vulnerabilities|⬜     |—      |
|Expert      |Partial construction race conditions     |⬜     |—      |

## 28. NoSQL Injection — 0 / 4
|Difficulty  |Lab                                                          |Status|Writeup|
|------------|-------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Detecting NoSQL injection                                    |⬜     |—      |
|Apprentice  |Exploiting NoSQL operator injection to bypass authentication |⬜     |—      |
|Practitioner|Exploiting NoSQL injection to extract data                   |⬜     |—      |
|Practitioner|Exploiting NoSQL operator injection to extract unknown fields|⬜     |—      |

## 29. API Testing — 0 / 5
|Difficulty  |Lab                                                         |Status|Writeup|
|------------|------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Exploiting an API endpoint using documentation              |⬜     |—      |
|Practitioner|Exploiting server-side parameter pollution in a query string|⬜     |—      |
|Practitioner|Finding and exploiting an unused API endpoint               |⬜     |—      |
|Practitioner|Exploiting a mass assignment vulnerability                  |⬜     |—      |
|Expert      |Exploiting server-side parameter pollution in a REST URL    |⬜     |—      |

## 30. Web LLM Attacks — 0 / 4
|Difficulty  |Lab                                        |Status|Writeup|
|------------|-------------------------------------------|:----:|:-----:|
|Apprentice  |Exploiting LLM APIs with excessive agency  |⬜     |—      |
|Practitioner|Exploiting vulnerabilities in LLM APIs     |⬜     |—      |
|Practitioner|Indirect prompt injection                  |⬜     |—      |
|Expert      |Exploiting insecure output handling in LLMs|⬜     |—      |

## 31. Web Cache Deception — 0 / 5
|Difficulty  |Lab                                                           |Status|Writeup|
|------------|--------------------------------------------------------------|:----:|:-----:|
|Apprentice  |Exploiting path mapping for web cache deception               |⬜     |—      |
|Practitioner|Exploiting path delimiters for web cache deception            |⬜     |—      |
|Practitioner|Exploiting origin server normalization for web cache deception|⬜     |—      |
|Practitioner|Exploiting cache server normalization for web cache deception |⬜     |—      |
|Expert      |Exploiting exact-match cache rules for web cache deception    |⬜     |—      |

-----

*Last updated: 2026-04-20. Lab data and ordering follow [onyxwizard/portswigger-academy](https://github.com/onyxwizard/portswigger-academy) under MIT License.*
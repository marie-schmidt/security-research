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
|[Reflected XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded)                                                                     |⬜     |—      |
|[Stored XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded)                                                                        |⬜     |—      |
|[DOM XSS in document.write sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink)                                                              |⬜     |—      |
|[DOM XSS in innerHTML sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink)                                                                   |⬜     |—      |
|[DOM XSS in jQuery anchor href attribute sink using location.search source](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink)                                                |⬜     |—      |
|[DOM XSS in jQuery selector sink using a hashchange event](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event)                                                                 |⬜     |—      |
|[Reflected XSS into attribute with angle brackets HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-attribute-angle-brackets-html-encoded)                                                            |⬜     |—      |
|[Stored XSS into anchor href attribute with double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-href-attribute-double-quotes-html-encoded)                                                    |⬜     |—      |
|[Reflected XSS into a JavaScript string with angle brackets HTML encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-html-encoded)                                                  |⬜     |—      |
|[DOM XSS in document.write sink using source location.search inside a select element](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element)                                      |⬜     |—      |
|[DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression)                                       |⬜     |—      |
|[Reflected DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected)                                                                                                        |⬜     |—      |
|[Stored DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-stored)                                                                                                           |⬜     |—      |
|[Reflected XSS into HTML context with most tags and attributes blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-most-tags-and-attributes-blocked)                                                    |⬜     |—      |
|[Reflected XSS into HTML context with all tags blocked except custom ones](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-all-standard-tags-blocked)                                                 |⬜     |—      |
|[Reflected XSS with some SVG markup allowed](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed)                                                                               |⬜     |—      |
|[Reflected XSS in canonical link tag](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag)                                                                                      |⬜     |—      |
|[Reflected XSS into a JavaScript string with single quote and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-single-quote-backslash-escaped)                                           |⬜     |—      |
|[Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-double-quotes-encoded-single-quotes-escaped)      |⬜     |—      |
|[Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-onclick-event-angle-brackets-double-quotes-html-encoded-single-quotes-backslash-escaped) |⬜     |—      |
|[Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-template-literal-angle-brackets-single-double-quotes-backslash-backticks-escaped)|⬜     |—      |
|[Exploiting cross-site scripting to steal cookies](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies)                                                                         |⬜     |—      |
|[Exploiting cross-site scripting to capture passwords](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords)                                                                     |⬜     |—      |
|[Exploiting XSS to bypass CSRF defenses](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf)                                                                                   |⬜     |—      |
|[Reflected XSS with AngularJS sandbox escape without strings](https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-without-strings)                                                              |⬜     |—      |
|[Reflected XSS with AngularJS sandbox escape and CSP](https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-and-csp)                                                                      |⬜     |—      |
|[Reflected XSS with event handlers and href attributes blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-event-handlers-and-href-attributes-blocked)                                                            |⬜     |—      |
|[Reflected XSS in a JavaScript URL with some characters blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-url-some-characters-blocked)                                                           |⬜     |—      |
|[Reflected XSS protected by very strict CSP, with dangling markup attack](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-very-strict-csp-with-dangling-markup-attack)                                                  |⬜     |—      |
|[Reflected XSS protected by CSP, with CSP bypass](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass)                                                                          |⬜     |—      |

## 3. CSRF — 0 / 12
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|[CSRF vulnerability with no defenses](https://portswigger.net/web-security/csrf/lab-no-defenses)                          |⬜     |—      |
|[CSRF where token validation depends on request method](https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-validation-depends-on-request-method)        |⬜     |—      |
|[CSRF where token validation depends on token being present](https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-validation-depends-on-token-being-present)   |⬜     |—      |
|[CSRF where token is not tied to user session](https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-not-tied-to-user-session)                 |⬜     |—      |
|[CSRF where token is tied to non-session cookie](https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-tied-to-non-session-cookie)               |⬜     |—      |
|[CSRF where token is duplicated in cookie](https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-duplicated-in-cookie)                     |⬜     |—      |
|[SameSite Lax bypass via method override](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-lax-bypass-via-method-override)                      |⬜     |—      |
|[SameSite Strict bypass via client-side redirect](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-client-side-redirect)              |⬜     |—      |
|[SameSite Strict bypass via sibling domain](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-sibling-domain)                    |⬜     |—      |
|[SameSite Lax bypass via cookie refresh](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-cookie-refresh)                       |⬜     |—      |
|[CSRF where Referer validation depends on header being present](https://portswigger.net/web-security/csrf/bypassing-referer-based-defenses/lab-referer-validation-depends-on-header-being-present)|⬜     |—      |
|[CSRF with broken Referer validation](https://portswigger.net/web-security/csrf/bypassing-referer-based-defenses/lab-referer-validation-broken)                          |⬜     |—      |

## 4. Clickjacking — 0 / 5
|Lab                                                             |Status|Writeup|
|----------------------------------------------------------------|:----:|:-----:|
|[Basic clickjacking with CSRF token protection](https://portswigger.net/web-security/clickjacking/lab-basic-csrf-protected)                   |⬜     |—      |
|[Clickjacking with form input data prefilled from a URL parameter](https://portswigger.net/web-security/clickjacking/lab-prefilled-form-input)|⬜     |—      |
|[Clickjacking with a frame buster script](https://portswigger.net/web-security/clickjacking/lab-frame-buster-script)                         |⬜     |—      |
|[Exploiting clickjacking vulnerability to trigger DOM-based XSS](https://portswigger.net/web-security/clickjacking/lab-exploiting-to-trigger-dom-based-xss)  |⬜     |—      |
|[Multistep clickjacking](https://portswigger.net/web-security/clickjacking/lab-multistep)                                          |⬜     |—      |

## 5. DOM-based Vulnerabilities — 0 / 7
|Lab                                             |Status|Writeup|
|------------------------------------------------|:----:|:-----:|
|[DOM XSS using web messages](https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages)                      |⬜     |—      |
|[DOM XSS using web messages and a JavaScript URL](https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-a-javascript-url) |⬜     |—      |
|[DOM XSS using web messages and JSON.parse](https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-json-parse)       |⬜     |—      |
|[DOM-based open redirection](https://portswigger.net/web-security/dom-based/open-redirection/lab-dom-open-redirection)                      |⬜     |—      |
|[DOM-based cookie manipulation](https://portswigger.net/web-security/dom-based/cookie-manipulation/lab-dom-cookie-manipulation)                   |⬜     |—      |
|[Exploiting DOM clobbering to enable XSS](https://portswigger.net/web-security/dom-based/dom-clobbering/lab-dom-xss-exploiting-dom-clobbering)         |⬜     |—      |
|[Clobbering DOM attributes to bypass HTML filters](https://portswigger.net/web-security/dom-based/dom-clobbering/lab-dom-clobbering-attributes-to-bypass-html-filters)|⬜     |—      |

## 6. CORS — 0 / 3
|Lab                                               |Status|Writeup|
|--------------------------------------------------|:----:|:-----:|
|[CORS vulnerability with basic origin reflection](https://portswigger.net/web-security/cors/lab-basic-origin-reflection-attack)   |⬜     |—      |
|[CORS vulnerability with trusted null origin](https://portswigger.net/web-security/cors/lab-null-origin-whitelisted-attack)       |⬜     |—      |
|[CORS vulnerability with trusted insecure protocols](https://portswigger.net/web-security/cors/lab-breaking-https-attack)|⬜     |—      |

## 7. XXE Injection — 0 / 9
|Lab                                                                   |Status|Writeup|
|----------------------------------------------------------------------|:----:|:-----:|
|[Exploiting XXE using external entities to retrieve files](https://portswigger.net/web-security/xxe/lab-exploiting-xxe-to-retrieve-files)              |⬜     |—      |
|[Exploiting XXE to perform SSRF attacks](https://portswigger.net/web-security/xxe/lab-exploiting-xxe-to-perform-ssrf)                                |⬜     |—      |
|[Blind XXE with out-of-band interaction](https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-interaction)                                |⬜     |—      |
|[Blind XXE with out-of-band interaction via XML parameter entities](https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-interaction-using-parameter-entities)     |⬜     |—      |
|[Exploiting blind XXE to exfiltrate data using a malicious external DTD](https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-exfiltration)|⬜     |—      |
|[Exploiting blind XXE to retrieve data via error messages](https://portswigger.net/web-security/xxe/blind/lab-xxe-with-data-retrieval-via-error-messages)              |⬜     |—      |
|[Exploiting XInclude to retrieve files](https://portswigger.net/web-security/xxe/lab-xinclude-attack)                                 |⬜     |—      |
|[Exploiting XXE via image file upload](https://portswigger.net/web-security/xxe/lab-xxe-via-file-upload)                                  |⬜     |—      |
|[Exploiting XXE to retrieve data by repurposing a local DTD](https://portswigger.net/web-security/xxe/blind/lab-xxe-trigger-error-message-by-repurposing-local-dtd)            |⬜     |—      |

## 8. SSRF — 0 / 7
|Lab                                                       |Status|Writeup|
|----------------------------------------------------------|:----:|:-----:|
|[Basic SSRF against the local server](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-localhost)                       |⬜     |—      |
|[Basic SSRF against another back-end system](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-backend-system)                |⬜     |—      |
|[Blind SSRF with out-of-band detection](https://portswigger.net/web-security/ssrf/blind/lab-out-of-band-detection)                     |⬜     |—      |
|[SSRF with blacklist-based input filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-blacklist-filter)                    |⬜     |—      |
|[SSRF with filter bypass via open redirection vulnerability](https://portswigger.net/web-security/ssrf/lab-ssrf-filter-bypass-via-open-redirection)|⬜     |—      |
|[Blind SSRF with Shellshock exploitation](https://portswigger.net/web-security/ssrf/blind/lab-shellshock-exploitation)                   |⬜     |—      |
|[SSRF with whitelist-based input filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-whitelist-filter)                    |⬜     |—      |

## 9. HTTP Request Smuggling — 0 / 21
|Lab                                                                                         |Status|Writeup|
|--------------------------------------------------------------------------------------------|:----:|:-----:|
|[HTTP request smuggling, confirming a CL.TE vulnerability via differential responses](https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-cl-te-via-differential-responses)         |⬜     |—      |
|[HTTP request smuggling, confirming a TE.CL vulnerability via differential responses](https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-te-cl-via-differential-responses)         |⬜     |—      |
|[Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability](https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-cl-te)|⬜     |—      |
|[Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability](https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-te-cl)|⬜     |—      |
|[Exploiting HTTP request smuggling to reveal front-end request rewriting](https://portswigger.net/web-security/request-smuggling/exploiting/lab-reveal-front-end-request-rewriting)                     |⬜     |—      |
|[Exploiting HTTP request smuggling to capture other users' requests](https://portswigger.net/web-security/request-smuggling/exploiting/lab-capture-other-users-requests)                          |⬜     |—      |
|[Exploiting HTTP request smuggling to deliver reflected XSS](https://portswigger.net/web-security/request-smuggling/exploiting/lab-deliver-reflected-xss)                                  |⬜     |—      |
|[Response queue poisoning via H2.TE request smuggling](https://portswigger.net/web-security/request-smuggling/advanced/response-queue-poisoning/lab-request-smuggling-h2-response-queue-poisoning-via-te-request-smuggling)                                        |⬜     |—      |
|[H2.CL request smuggling](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-cl-request-smuggling)                                                                     |⬜     |—      |
|[HTTP/2 request smuggling via CRLF injection](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-smuggling-via-crlf-injection)                                                 |⬜     |—      |
|[HTTP/2 request splitting via CRLF injection](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-splitting-via-crlf-injection)                                                 |⬜     |—      |
|[CL.0 request smuggling](https://portswigger.net/web-security/request-smuggling/browser/cl-0/lab-cl-0-request-smuggling)                                                                      |⬜     |—      |
|[HTTP request smuggling, basic CL.TE vulnerability](https://portswigger.net/web-security/request-smuggling/lab-basic-cl-te)                                           |⬜     |—      |
|[HTTP request smuggling, basic TE.CL vulnerability](https://portswigger.net/web-security/request-smuggling/lab-basic-te-cl)                                           |⬜     |—      |
|[HTTP request smuggling, obfuscating the TE header](https://portswigger.net/web-security/request-smuggling/lab-obfuscating-te-header)                                           |⬜     |—      |
|[Exploiting HTTP request smuggling to perform web cache poisoning](https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-poisoning)                            |⬜     |—      |
|[Exploiting HTTP request smuggling to perform web cache deception](https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-deception)                            |⬜     |—      |
|[Bypassing access controls via HTTP/2 request tunnelling](https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-bypass-access-controls-via-request-tunnelling)                                     |⬜     |—      |
|[Web cache poisoning via HTTP/2 request tunnelling](https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-web-cache-poisoning-via-request-tunnelling)                                           |⬜     |—      |
|[Client-side desync](https://portswigger.net/web-security/request-smuggling/browser/client-side-desync/lab-client-side-desync)                                                                          |⬜     |—      |
|[Server-side pause-based request smuggling](https://portswigger.net/web-security/request-smuggling/browser/pause-based-desync/lab-server-side-pause-based-request-smuggling)                                                   |⬜     |—      |

## 10. OS Command Injection — 0 / 5
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|[OS command injection, simple case](https://portswigger.net/web-security/os-command-injection/lab-simple)                            |⬜     |—      |
|[Blind OS command injection with time delays](https://portswigger.net/web-security/os-command-injection/lab-blind-time-delays)                  |⬜     |—      |
|[Blind OS command injection with output redirection](https://portswigger.net/web-security/os-command-injection/lab-blind-output-redirection)           |⬜     |—      |
|[Blind OS command injection with out-of-band interaction](https://portswigger.net/web-security/os-command-injection/lab-blind-out-of-band)      |⬜     |—      |
|[Blind OS command injection with out-of-band data exfiltration](https://portswigger.net/web-security/os-command-injection/lab-blind-out-of-band-data-exfiltration)|⬜     |—      |

## 11. Server-Side Template Injection — 0 / 7
|Lab                                                                                 |Status|Writeup|
|------------------------------------------------------------------------------------|:----:|:-----:|
|[Basic server-side template injection](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-basic)                                                |⬜     |—      |
|[Server-side template injection (code context)](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-basic-code-context)                                       |⬜     |—      |
|[Server-side template injection using documentation](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-using-documentation)                                  |⬜     |—      |
|[Server-side template injection in an unknown language with a documented exploit](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-in-an-unknown-language-with-a-documented-exploit)     |⬜     |—      |
|[Server-side template injection with information disclosure via user-supplied objects](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-with-information-disclosure-via-user-supplied-objects)|⬜     |—      |
|[Server-side template injection in a sandboxed environment](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-in-a-sandboxed-environment)                           |⬜     |—      |
|[Server-side template injection with a custom exploit](https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-with-a-custom-exploit)                                |⬜     |—      |

## 12. Path Traversal — 0 / 6
|Lab                                                                          |Status|Writeup|
|-----------------------------------------------------------------------------|:----:|:-----:|
|[File path traversal, simple case](https://portswigger.net/web-security/file-path-traversal/lab-simple)                                             |⬜     |—      |
|[File path traversal, traversal sequences blocked with absolute path bypass](https://portswigger.net/web-security/file-path-traversal/lab-absolute-path-bypass)   |⬜     |—      |
|[File path traversal, traversal sequences stripped non-recursively](https://portswigger.net/web-security/file-path-traversal/lab-sequences-stripped-non-recursively)            |⬜     |—      |
|[File path traversal, traversal sequences stripped with superfluous URL-decode](https://portswigger.net/web-security/file-path-traversal/lab-superfluous-url-decode)|⬜     |—      |
|[File path traversal, validation of start of path](https://portswigger.net/web-security/file-path-traversal/lab-validate-start-of-path)                             |⬜     |—      |
|[File path traversal, validation of file extension with null byte bypass](https://portswigger.net/web-security/file-path-traversal/lab-validate-file-extension-null-byte-bypass)      |⬜     |—      |

## 13. Access Control — 0 / 13
|Lab                                                                  |Status|Writeup|
|---------------------------------------------------------------------|:----:|:-----:|
|[Unprotected admin functionality](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality)                                      |⬜     |—      |
|[Unprotected admin functionality with unpredictable URL](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url)               |⬜     |—      |
|[User role controlled by request parameter](https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter)                            |⬜     |—      |
|[User role can be modified in user profile](https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile)                            |⬜     |—      |
|[User ID controlled by request parameter](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter)                              |⬜     |—      |
|[User ID controlled by request parameter, with unpredictable user IDs](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids) |⬜     |—      |
|[User ID controlled by request parameter with data leakage in redirect](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect)|⬜     |—      |
|[User ID controlled by request parameter with password disclosure](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure)     |⬜     |—      |
|[Insecure direct object references](https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references)                                    |⬜     |—      |
|[URL-based access control can be circumvented](https://portswigger.net/web-security/access-control/lab-url-based-access-control-can-be-circumvented)                         |⬜     |—      |
|[Method-based access control can be circumvented](https://portswigger.net/web-security/access-control/lab-method-based-access-control-can-be-circumvented)                      |⬜     |—      |
|[Multi-step process with no access control on one step](https://portswigger.net/web-security/access-control/lab-multi-step-process-with-no-access-control-on-one-step)                |⬜     |—      |
|[Referer-based access control](https://portswigger.net/web-security/access-control/lab-referer-based-access-control)                                         |⬜     |—      |

## 14. Authentication — 0 / 14
|Lab                                                            |Status|Writeup|
|---------------------------------------------------------------|:----:|:-----:|
|[Username enumeration via different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses)                   |⬜     |—      |
|[2FA simple bypass](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-simple-bypass)                                              |⬜     |—      |
|[Password reset broken logic](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-broken-logic)                                    |⬜     |—      |
|[Username enumeration via subtly different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-subtly-different-responses)            |⬜     |—      |
|[Username enumeration via response timing](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing)                       |⬜     |—      |
|[Broken brute-force protection, IP block](https://portswigger.net/web-security/authentication/password-based/lab-broken-bruteforce-protection-ip-block)                        |⬜     |—      |
|[Username enumeration via account lock](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-account-lock)                          |⬜     |—      |
|[2FA broken logic](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic)                                               |⬜     |—      |
|[Brute-forcing a stay-logged-in cookie](https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie)                          |⬜     |—      |
|[Offline password cracking](https://portswigger.net/web-security/authentication/other-mechanisms/lab-offline-password-cracking)                                      |⬜     |—      |
|[Password reset poisoning via middleware](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-poisoning-via-middleware)                        |⬜     |—      |
|[Password brute-force via password change](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-brute-force-via-password-change)                       |⬜     |—      |
|[Broken brute-force protection, multiple credentials per request](https://portswigger.net/web-security/authentication/password-based/lab-broken-brute-force-protection-multiple-credentials-per-request)|⬜     |—      |
|[2FA bypass using a brute-force attack](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-bypass-using-a-brute-force-attack)                          |⬜     |—      |

## 15. WebSockets — 0 / 3
|Lab                                                            |Status|Writeup|
|---------------------------------------------------------------|:----:|:-----:|
|[Manipulating WebSocket messages to exploit vulnerabilities](https://portswigger.net/web-security/websockets/lab-manipulating-messages-to-exploit-vulnerabilities)     |⬜     |—      |
|[Cross-site WebSocket hijacking](https://portswigger.net/web-security/websockets/cross-site-websocket-hijacking/lab)                                 |⬜     |—      |
|[Manipulating the WebSocket handshake to exploit vulnerabilities](https://portswigger.net/web-security/websockets/lab-manipulating-handshake-to-exploit-vulnerabilities)|⬜     |—      |

## 16. Web Cache Poisoning — 0 / 13
|Lab                                                                                             |Status|Writeup|
|------------------------------------------------------------------------------------------------|:----:|:-----:|
|[Web cache poisoning with an unkeyed header](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-an-unkeyed-header)                                                      |⬜     |—      |
|[Web cache poisoning with an unkeyed cookie](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-an-unkeyed-cookie)                                                      |⬜     |—      |
|[Web cache poisoning with multiple headers](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-multiple-headers)                                                       |⬜     |—      |
|[Targeted web cache poisoning using an unknown header](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-targeted-using-an-unknown-header)                                            |⬜     |—      |
|[Web cache poisoning via an unkeyed query string](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-unkeyed-query)                                                 |⬜     |—      |
|[Web cache poisoning via an unkeyed query parameter](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-unkeyed-param)                                              |⬜     |—      |
|[Parameter cloaking](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-param-cloaking)                                                                              |⬜     |—      |
|[Web cache poisoning via a fat GET request](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-fat-get)                                                       |⬜     |—      |
|[URL normalization](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-normalization)                                                                               |⬜     |—      |
|[Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-to-exploit-a-dom-vulnerability-via-a-cache-with-strict-cacheability-criteria)|⬜     |—      |
|[Combining web cache poisoning vulnerabilities](https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-combining-vulnerabilities)                                                   |⬜     |—      |
|[Cache key injection](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-cache-key-injection)                                                                             |⬜     |—      |
|[Internal cache poisoning](https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-internal)                                                                        |⬜     |—      |

## 17. Insecure Deserialization — 0 / 10
|Lab                                                                |Status|Writeup|
|-------------------------------------------------------------------|:----:|:-----:|
|[Modifying serialized objects](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-objects)                                       |⬜     |—      |
|[Modifying serialized data types](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-data-types)                                    |⬜     |—      |
|[Using application functionality to exploit insecure deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-application-functionality-to-exploit-insecure-deserialization)|⬜     |—      |
|[Arbitrary object injection in PHP](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-arbitrary-object-injection-in-php)                                  |⬜     |—      |
|[Exploiting Java deserialization with Apache Commons](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-java-deserialization-with-apache-commons)                |⬜     |—      |
|[Exploiting PHP deserialization with a pre-built gadget chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-php-deserialization-with-a-pre-built-gadget-chain)       |⬜     |—      |
|[Exploiting Ruby deserialization using a documented gadget chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-ruby-deserialization-using-a-documented-gadget-chain)    |⬜     |—      |
|[Developing a custom gadget chain for Java deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-java-deserialization)          |⬜     |—      |
|[Developing a custom gadget chain for PHP deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-php-deserialization)           |⬜     |—      |
|[Using PHAR deserialization to deploy a custom gadget chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-phar-deserialization-to-deploy-a-custom-gadget-chain)         |⬜     |—      |

## 18. Information Disclosure — 0 / 5
|Lab                                              |Status|Writeup|
|-------------------------------------------------|:----:|:-----:|
|[Information disclosure in error messages](https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-in-error-messages)         |⬜     |—      |
|[Information disclosure on debug page](https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-on-debug-page)             |⬜     |—      |
|[Source code disclosure via backup files](https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-via-backup-files)          |⬜     |—      |
|[Authentication bypass via information disclosure](https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-authentication-bypass) |⬜     |—      |
|[Information disclosure in version control history](https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-in-version-control-history)|⬜     |—      |

## 19. Business Logic — 0 / 11
|Lab                                                                |Status|Writeup|
|-------------------------------------------------------------------|:----:|:-----:|
|[Excessive trust in client-side controls](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-excessive-trust-in-client-side-controls)                            |⬜     |—      |
|[High-level logic vulnerability](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-high-level)                                     |⬜     |—      |
|[Inconsistent security controls](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-inconsistent-security-controls)                                     |⬜     |—      |
|[Flawed enforcement of business rules](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-flawed-enforcement-of-business-rules)                               |⬜     |—      |
|[Low-level logic flaw](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-low-level)                                               |⬜     |—      |
|[Inconsistent handling of exceptional input](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-inconsistent-handling-of-exceptional-input)                         |⬜     |—      |
|[Weak isolation on dual-use endpoint](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-weak-isolation-on-dual-use-endpoint)                                |⬜     |—      |
|[Insufficient workflow validation](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-insufficient-workflow-validation)                                   |⬜     |—      |
|[Authentication bypass via flawed state machine](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-authentication-bypass-via-flawed-state-machine)                     |⬜     |—      |
|[Infinite money logic flaw](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-infinite-money)                                          |⬜     |—      |
|[Bypassing access controls using email address parsing discrepancies](https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-bypassing-access-controls-using-email-address-parsing-discrepancies)|⬜     |—      |

## 20. HTTP Host Header Attacks — 0 / 7
|Lab                                               |Status|Writeup|
|--------------------------------------------------|:----:|:-----:|
|[Basic password reset poisoning](https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-basic-password-reset-poisoning)                    |⬜     |—      |
|[Host header authentication bypass](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-authentication-bypass)                 |⬜     |—      |
|[Web cache poisoning via ambiguous requests](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-web-cache-poisoning-via-ambiguous-requests)        |⬜     |—      |
|[Routing-based SSRF](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-routing-based-ssrf)                                |⬜     |—      |
|[SSRF via flawed request parsing](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-ssrf-via-flawed-request-parsing)                   |⬜     |—      |
|[Host validation bypass via connection state attack](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-host-validation-bypass-via-connection-state-attack)|⬜     |—      |
|[Password reset poisoning via dangling markup](https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-password-reset-poisoning-via-dangling-markup)      |⬜     |—      |

## 21. OAuth Authentication — 0 / 6
|Lab                                              |Status|Writeup|
|-------------------------------------------------|:----:|:-----:|
|[Authentication bypass via OAuth implicit flow](https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow)    |⬜     |—      |
|[SSRF via OpenID dynamic client registration](https://portswigger.net/web-security/oauth/openid/lab-oauth-ssrf-via-openid-dynamic-client-registration)      |⬜     |—      |
|[Forced OAuth profile linking](https://portswigger.net/web-security/oauth/lab-oauth-forced-oauth-profile-linking)                     |⬜     |—      |
|[OAuth account hijacking via redirect_uri](https://portswigger.net/web-security/oauth/lab-oauth-account-hijacking-via-redirect-uri)         |⬜     |—      |
|[Stealing OAuth access tokens via an open redirect](https://portswigger.net/web-security/oauth/lab-oauth-stealing-oauth-access-tokens-via-an-open-redirect)|⬜     |—      |
|[Stealing OAuth access tokens via a proxy page](https://portswigger.net/web-security/oauth/lab-oauth-stealing-oauth-access-tokens-via-a-proxy-page)    |⬜     |—      |

## 22. File Upload Vulnerabilities — 0 / 7
|Lab                                                 |Status|Writeup|
|----------------------------------------------------|:----:|:-----:|
|[Remote code execution via web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload)          |⬜     |—      |
|[Web shell upload via Content-Type restriction bypass](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass)|⬜     |—      |
|[Web shell upload via path traversal](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal)                 |⬜     |—      |
|[Web shell upload via extension blacklist bypass](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-extension-blacklist-bypass)     |⬜     |—      |
|[Web shell upload via obfuscated file extension](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-obfuscated-file-extension)      |⬜     |—      |
|[Remote code execution via polyglot web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-polyglot-web-shell-upload) |⬜     |—      |
|[Web shell upload via race condition](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-race-condition)                 |⬜     |—      |

## 23. JWT Attacks — 0 / 8
|Lab                                                                  |Status|Writeup|
|---------------------------------------------------------------------|:----:|:-----:|
|[JWT authentication bypass via unverified signature](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-unverified-signature)                   |⬜     |—      |
|[JWT authentication bypass via flawed signature verification](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-flawed-signature-verification)          |⬜     |—      |
|[JWT authentication bypass via weak signing key](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-weak-signing-key)                       |⬜     |—      |
|[JWT authentication bypass via jwk header injection](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jwk-header-injection)                   |⬜     |—      |
|[JWT authentication bypass via jku header injection](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jku-header-injection)                   |⬜     |—      |
|[JWT authentication bypass via kid header path traversal](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-kid-header-path-traversal)              |⬜     |—      |
|[JWT authentication bypass via algorithm confusion](https://portswigger.net/web-security/jwt/algorithm-confusion/lab-jwt-authentication-bypass-via-algorithm-confusion)                    |⬜     |—      |
|[JWT authentication bypass via algorithm confusion with no exposed key](https://portswigger.net/web-security/jwt/algorithm-confusion/lab-jwt-authentication-bypass-via-algorithm-confusion-with-no-exposed-key)|⬜     |—      |

## 24. Essential Skills — 0 / 2
|Lab                                                       |Status|Writeup|
|----------------------------------------------------------|:----:|:-----:|
|[Discovering vulnerabilities quickly with targeted scanning](https://portswigger.net/web-security/essential-skills/using-burp-scanner-during-manual-testing/lab-discovering-vulnerabilities-quickly-with-targeted-scanning)|⬜     |—      |
|[Scanning non-standard data structures](https://portswigger.net/web-security/essential-skills/using-burp-scanner-during-manual-testing/lab-scanning-non-standard-data-structures)                     |⬜     |—      |

## 25. Prototype Pollution — 0 / 10
|Lab                                                                           |Status|Writeup|
|------------------------------------------------------------------------------|:----:|:-----:|
|[Client-side prototype pollution via browser APIs](https://portswigger.net/web-security/prototype-pollution/client-side/browser-apis/lab-prototype-pollution-client-side-prototype-pollution-via-browser-apis)                              |⬜     |—      |
|[DOM XSS via client-side prototype pollution](https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-dom-xss-via-client-side-prototype-pollution)                                   |⬜     |—      |
|[DOM XSS via an alternative prototype pollution vector](https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-dom-xss-via-an-alternative-prototype-pollution-vector)                         |⬜     |—      |
|[Client-side prototype pollution via flawed sanitization](https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-client-side-prototype-pollution-via-flawed-sanitization)                       |⬜     |—      |
|[Client-side prototype pollution in third-party libraries](https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-client-side-prototype-pollution-in-third-party-libraries)                      |⬜     |—      |
|[Privilege escalation via server-side prototype pollution](https://portswigger.net/web-security/prototype-pollution/server-side/lab-privilege-escalation-via-server-side-prototype-pollution)                      |⬜     |—      |
|[Detecting server-side prototype pollution without polluted property reflection](https://portswigger.net/web-security/prototype-pollution/server-side/lab-detecting-server-side-prototype-pollution-without-polluted-property-reflection)|⬜     |—      |
|[Bypassing flawed input filters for server-side prototype pollution](https://portswigger.net/web-security/prototype-pollution/server-side/lab-bypassing-flawed-input-filters-for-server-side-prototype-pollution)            |⬜     |—      |
|[Remote code execution via server-side prototype pollution](https://portswigger.net/web-security/prototype-pollution/server-side/lab-remote-code-execution-via-server-side-prototype-pollution)                     |⬜     |—      |
|[Exfiltrating sensitive data via server-side prototype pollution](https://portswigger.net/web-security/prototype-pollution/server-side/lab-exfiltrating-sensitive-data-via-server-side-prototype-pollution)               |⬜     |—      |

## 26. GraphQL API Vulnerabilities — 0 / 5
|Lab                                          |Status|Writeup|
|---------------------------------------------|:----:|:-----:|
|[Accessing private GraphQL posts](https://portswigger.net/web-security/graphql/lab-graphql-reading-private-posts)              |⬜     |—      |
|[Accidental exposure of private GraphQL fields](https://portswigger.net/web-security/graphql/lab-graphql-accidental-field-exposure)|⬜     |—      |
|[Finding a hidden GraphQL endpoint](https://portswigger.net/web-security/graphql/lab-graphql-find-the-endpoint)            |⬜     |—      |
|[Bypassing GraphQL brute force protections](https://portswigger.net/web-security/graphql/lab-graphql-brute-force-protection-bypass)    |⬜     |—      |
|[Performing CSRF exploits over GraphQL](https://portswigger.net/web-security/graphql/lab-graphql-csrf-via-graphql-api)        |⬜     |—      |

## 27. Race Conditions — 0 / 6
|Lab                                      |Status|Writeup|
|-----------------------------------------|:----:|:-----:|
|[Limit overrun race conditions](https://portswigger.net/web-security/race-conditions/lab-race-conditions-limit-overrun)            |⬜     |—      |
|[Bypassing rate limits via race conditions](https://portswigger.net/web-security/race-conditions/lab-race-conditions-bypassing-rate-limits)|⬜     |—      |
|[Multi-endpoint race conditions](https://portswigger.net/web-security/race-conditions/lab-race-conditions-multi-endpoint)           |⬜     |—      |
|[Single-endpoint race conditions](https://portswigger.net/web-security/race-conditions/lab-race-conditions-single-endpoint)          |⬜     |—      |
|[Exploiting time-sensitive vulnerabilities](https://portswigger.net/web-security/race-conditions/lab-race-conditions-exploiting-time-sensitive-vulnerabilities)|⬜     |—      |
|[Partial construction race conditions](https://portswigger.net/web-security/race-conditions/lab-race-conditions-partial-construction)     |⬜     |—      |

## 28. NoSQL Injection — 0 / 4
|Lab                                                          |Status|Writeup|
|-------------------------------------------------------------|:----:|:-----:|
|[Detecting NoSQL injection](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-detection)                                    |⬜     |—      |
|[Exploiting NoSQL operator injection to bypass authentication](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-bypass-authentication) |⬜     |—      |
|[Exploiting NoSQL injection to extract data](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-data)                   |⬜     |—      |
|[Exploiting NoSQL operator injection to extract unknown fields](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-unknown-fields)|⬜     |—      |

## 29. API Testing — 0 / 5
|Lab                                                         |Status|Writeup|
|------------------------------------------------------------|:----:|:-----:|
|[Exploiting an API endpoint using documentation](https://portswigger.net/web-security/api-testing/lab-exploiting-api-endpoint-using-documentation)              |⬜     |—      |
|[Exploiting server-side parameter pollution in a query string](https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-query-string)|⬜     |—      |
|[Finding and exploiting an unused API endpoint](https://portswigger.net/web-security/api-testing/lab-exploiting-unused-api-endpoint)               |⬜     |—      |
|[Exploiting a mass assignment vulnerability](https://portswigger.net/web-security/api-testing/lab-exploiting-mass-assignment-vulnerability)                  |⬜     |—      |
|[Exploiting server-side parameter pollution in a REST URL](https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-rest-url)    |⬜     |—      |

## 30. Web LLM Attacks — 0 / 4
|Lab                                        |Status|Writeup|
|-------------------------------------------|:----:|:-----:|
|[Exploiting LLM APIs with excessive agency](https://portswigger.net/web-security/llm-attacks/lab-exploiting-llm-apis-with-excessive-agency)  |⬜     |—      |
|[Exploiting vulnerabilities in LLM APIs](https://portswigger.net/web-security/llm-attacks/lab-exploiting-vulnerabilities-in-llm-apis)     |⬜     |—      |
|[Indirect prompt injection](https://portswigger.net/web-security/llm-attacks/lab-indirect-prompt-injection)                  |⬜     |—      |
|[Exploiting insecure output handling in LLMs](https://portswigger.net/web-security/llm-attacks/lab-exploiting-insecure-output-handling-in-llms)|⬜     |—      |

## 31. Web Cache Deception — 0 / 5
|Lab                                                           |Status|Writeup|
|--------------------------------------------------------------|:----:|:-----:|
|[Exploiting path mapping for web cache deception](https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-path-mapping)               |⬜     |—      |
|[Exploiting path delimiters for web cache deception](https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-path-delimiters)            |⬜     |—      |
|[Exploiting origin server normalization for web cache deception](https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-origin-server-normalization)|⬜     |—      |
|[Exploiting cache server normalization for web cache deception](https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-cache-server-normalization) |⬜     |—      |
|[Exploiting exact-match cache rules for web cache deception](https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-exact-match-cache-rules)    |⬜     |—      |

-----

*Last updated: 2026-04-20. Lab data and ordering follow [onyxwizard/portswigger-academy](https://github.com/onyxwizard/portswigger-academy) under MIT License.*
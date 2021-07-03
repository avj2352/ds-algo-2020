# Web Security Fundamentals

In this course, we'll cover session hijacking and how to prevent it, secure cookie configuration and making them hard to steal -

- Using chralesproxy to simulate a man-in-the-middle attack, 
- using HTTPS and HSTS to mitigate man-in-the-middle attacks. 
- Using CSRF tokens in SameSite cookies to mitigate CSRF attacks. 
- Using the CSP to mitigate XSS attacks. 
- You'll learn security rules of thumb such as defense in-depth and principle of list power.



### Check CURL version

```bash
curl --version
# curl 7.64.1 (x86_64-apple-darwin20.0) libcurl/7.64.1 (SecureTransport) LibreSSL/2.8.3 zlib/1.2.11 nghttp2/1.41.0
```



## MITM

A **man in the middle (MITM)** is a piece of software using *malicious code* that sits between the client making a request and the server receiving the request.

- Hackers can use Tools like **Charles Proxy** or **Wireshark** as an HTTP monitor, 
- They usually target to observe HTTP that is insecure traffic, 
  - sniff the session ID, 
  - alter the message, 
  - and post on the user's behalf.

### Prevention

- Setup SSL certificate
- Run Web server on HTTP(s) port 443
- Redirect port 80 to port 443

### Redirect Node Express to HTTPS

```javascript
const redirApp = express();
redirApp.use(function(req, res) {
    return res.redirect(`https://${domain}${req.url}`)
});
redirapp.listen(80);
```



## HSTS & the Problem it addresses

### Problem: Redirect from HTTP to HTTPs

If we look closer at the problem, it all stems from the fact that a browser will still make an HTTP request. It's the server that tells the browser to make a second request to HTTPS. What if we could tell the browser that when it sees an **HTTP URL** to fill it in and actually treat it as an **HTTPS URL**.

>  Thankfully, there is a request **header that** does just that. It's called **HSTS**, otherwise known as **HTTPS Strict Transport Security.**

Express has a package called `helmet`, which we'll add into our `package.json`. That provides a set of utilities including the ability to add HSTS headers. First, we'll add the helmet package to our dependencies and then import it in our application.

---




#Authentication and Authorization

- **Authentication** is the process of verifying *"you are who you say you are"* (e.g. username + password).
- **Authorization** is process of verifying *"you are permitted to do what you are trying to do"* (e.g. role).

## Tools
- [JWT](https://jwt.io/)
- [OAuth](https://oauth.net/)
- [Passport](http://www.passportjs.org/docs/)
- [Socket.IO](https://socket.io/)

## Passport vs OAuth
- Passport lets you authenticate the user before granting the user access to your API. It does not directly check authorization (whether a user is allowed to perform a certain action) after authentication.
- What OAuth does that Passport doesn't, is that it allows users to control authorization, such as:
	- grant a service access to their personal information
	- allow or forbid certain privileges (scopes in OAuth)

## References
- [Do You Really Know CORS?](http://performantcode.com/web/do-you-really-know-cors)
- [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [OAuth 2.0 Tutorial](http://tutorials.jenkov.com/oauth2/index.html)
- [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [Cookies, Bearer Tokens, and Token-based Authentication](https://stackoverflow.com/a/38470665/4534389)
- [10 Things You Should Know about Tokens](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies//)
- [JWT vs OAuth authentication](https://stackoverflow.com/questions/39909419/jwt-vs-oauth-authentication)
- [What's the difference between passport and oauth?](https://stackoverflow.com/questions/36490904/whats-the-difference-between-passport-and-oauth)
- [Implementing OAuth 2.0 with Node.js ](https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/)
- [How to make an OAuth 2 server with Node.js](https://blog.cloudboost.io/how-to-make-an-oauth-2-server-with-node-js-a6db02dc2ce7)
# Nassim API
- Backend for a mock stock trading app.

## Stack
- Server: Node.js, Express.js
- Database: MongoDB Atlas, Google Cloud
- Deployment: Heroku, Netlify, Travis CI

## Planning
- [ ] [Data model and data flow diagrams](https://www.lucidchart.com/invitations/accept/a3d05af8-7701-45f3-9d95-aea6e53bf1fe)
	- [x] Data model
	- [ ] Data flow
- [x] [User flow and class diagrams](https://www.lucidchart.com/invitations/accept/b753933a-e61a-419a-bb17-512399382754) - click tabs on the bottom to toggle between user flow diagram and class diagram
	- [x] [Buy and Sell mindmap](https://www.mindmeister.com/1142330199?t=X3o3zAO1xb)
	- [x] Buy
	- [x] Sell
	- [x] Sign up
	- [x] Sign in
- [ ] Page mockups
	- [ ] [Header and Footer](https://wireframe.cc/)
	- [ ] Home
	- [ ] Landing
	- [x] Market View
		- [x] [grid view](https://wireframe.cc/6lapy6)
		- [x] [list view](https://wireframe.cc/8Wsa4O)
	- [x] [Stock](https://wireframe.cc/OLjSTq)
	- [ ] [Transactions]()
	- [ ] [Portfolio]()
	- [ ] [Account]()

## Setup
- [x] Configure environment variables in `config`
	- [x] Database URL
	- [x] Port
- [x] Configure variables in `.env` ([reference](https://www.npmjs.com/package/dotenv))
	- [x] Database URL
	- [x] Port
	- [x] Alpha Vantage API key
- [x] Server
	- [x] Allow module export
- [x] Models, controllers, routes
	- [x] Account
	- [x] Stock
	- [x] Portfolio
	- [x] Transaction
- [ ] Basic classes
- [ ] Development database
	- [ ] MongoDB shell
	- [ ] Mock data
- [ ] Testing

## Develop
### Core Components
- Stock
	- [ ] Buy
	- [ ] Sell
- Transaction
	- [ ] Stock
	- [ ] Price
	- [ ] Quantity
	- [ ] Value
- Account
	- [ ] Email
	- [ ] Password
	- [ ] Balance
	- [ ] Assets
- Portfolio
	- [ ] Value
	- [ ] Stock
### Authentication
- [ ] Sign up
- [ ] Sign in
- [ ] Google sign-in - [reference](https://developers.google.com/identity/sign-in/web/sign-in)
- [ ] Facebook sign-in - [reference](https://developers.facebook.com/docs/facebook-login/web)

## Deploy
- [ ] Production database
	- [ ] MongoDB Atlas
	- [ ] Google Cloud Platform
- [ ] Travis CI
- [ ] Netlify
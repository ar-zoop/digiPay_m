# DigiPay: Digital Wallet
An e-rupi voucher ecosystem.
A solution for corporate, government,users and merchants.

## Description

### What is E-Rupi? 
E-Rupi is a person and purpose-specific voucher. It can only be redeemed by the intended person for the intended purpose. The transaction takes place between a user's e-voucher and the merchant's bank.
It is an offline process. One must make a manual requests to the bank for issuance of E-Rupi Voucher. 

### Our Solution
Keeping the essence of e-rupi voucher alive we built an online digital wallet to provide extra features on top of the offline feature. 

## Table of Contents 

- [Folder Setup](#folder)
- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [Running the project](#running)
- [Node.js API's](#Node)

## Folder Setup

### Backend
`src` -> Inside the src folder the actual code resides.

Lets take a look inside the `src` folder

`config` -> Connected MySQL database and entered its password.

`server-config.js`-> Environment variables: PORT, SALT_ROUNDS, JWT_EXPIRY, JWT_SECRET

`routes` -> V1 version of routing API in this folder. Routing of banks, merchants, transactions, users, and vouchers.

`middlewares` -> Validator and authenticator for banks is here.

`controllers` -> The connection setters between Routers and Services. Controllers are made for banks, merchants, transactions, users, and vouchers.

`repositories` -> DB connections of banks, merchants, transactions, users, and vouchers are here.

`services` -> All business logic for banks, merchants, transactions, users, and vouchers are here.

`utils` -> 
- Helper methods: auth, error-response, success-response, Twilio here.
- Error classes here.

### Frontend 

`public` -> Contains static assets such as index.html and other public files.

`src` -> The main directory where the React source code resides.

`components`-> Holds the reusable components used throughout the application.

`styles`-> Contains CSS or styling files.

`utils`: Contains utility functions or helper modules.

`App.js`-> The main component that serves as the entry point for the frontend.

`index.js`-> The entry point for rendering the React application.

`.gitignore`-> Specifies which files and directories to ignore in version control.

`package.json`-> Configuration file that contains project dependencies, scripts, and oth

## Installation

### Setting up backend 
Go inside the folder path and execute the following command:

`npm install`

In the root directory create a .env file and add the following env variables

PORT=<port number of your choice>

ex: `PORT=3000`

go inside the `src` folder and execute the following command: `npx sequelize init`

By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

### Setting up frontend

Navigate to the frontend directory: cd frontend

Run the following command to install frontend dependencies:


npm install

## Configuration

If the project requires configuration, you may need to provide specific details or environment variables for both the backend and frontend.

### Backend 

The .env file resides here. It has the port, salt_rounds, jwt_secret, and jwt_expiry.

## Running the project

### Backend

Open a terminal and navigate to the backend directory.

Run the following command to start the backend server:

To run the server execute : `npm run dev`

This command will start the backend server, which will listen for incoming API requests.

### Frontend

Open a new terminal window (while keeping the backend server running in the previous terminal) and navigate to the frontend directory.

Run the following command to start the frontend development server: `npm run dev`

## Features
### User
- Request Vouchers
- Extend Expiry of a voucher
- Pay to Merchant
- Review Expenditure Analysis
- Review Yojana's related to the user
- Transation History

### Merchant
- Accept Payment
- Review Customer Analysis : See what yojana related vouchers are being redeemed
- Transaction History

### Government
- Create Voucher
- Distribute Voucher
- Analysis : Distribution analysis, Vouchers being expired without being redeemd analysis
- Vouchers redeemed transaction
- Users voucher tracking

### Corporate 
- Create Voucher
- Distribute Voucher
- Analysis : Distribution analysis, Vouchers being expired without being redeemd analysis
- Employee Transaction History

## Node.js API's

1. POST User: signup `localhost:3000/api/v1/users/signup`

![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/e32deb82-faac-4522-b015-8195c8d1d558)


2. POST User: signIn `localhost:3000/api/v1/users/signin`
   ![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/807bdc95-de9f-4be3-995f-017f35b1cfb2)

3. PATCH User: Set pincode `localhost:3000/api/v1/users/pincode`
![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/ce4744eb-5922-4bb0-95c5-4bdb81285c66)

4. GET User: Check pincode `localhost:3000/api/v1/users/pincode`
![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/bf1b72c4-a634-4421-a668-91c9a64b451d)

5. GET User: Get User details `localhost:3000/api/v1/users`
![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/34aee674-ddf1-46a3-8f29-8e8520c722b5)


6. PATCH User: Resend voucher `localhost:3000/api/v1/vouchers`
![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/ccddbe29-6cf1-4c09-bc62-34e7f0f26313)


7. POST User: Request a voucher `User: localhost:3000/api/v1/vouchers`
![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/229bfb00-b34b-43cd-8904-c3833cd9f1b8)

8. GET User: Get voucher `localhost:3000/api/v1/vouchers`


![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/5816d258-972d-433f-a057-35e8adfcf37a)

9. GET User: Get voucher Cop `localhost:3000/api/v1/vouchers`


![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/811c04bc-f4ca-41a2-a61c-8d9004c86074)

10. POST Merchant: Signup `localhost:3000/api/v1/merchants`
![image](https://github.com/ar-zoop/digiPay_m/assets/65864642/943d8b27-b167-4c38-b93b-0c107949d151)


11. POST Merchant: SignIn `localhost:3000/api/v1/merchants/signin`

![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/7afe9044-abc3-44a7-a5ab-014878329695)

12. POST Merchant: create acquirer bank `localhost:3000/api/v1/merchants/addBank`

![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/ad50e4d5-3a74-4c8d-8928-ac51b1866d37)


13. GET Merchant: Request OTP `localhost:3000/api/v1/merchants/requestOTP`

![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/35b24443-0215-4f0f-a107-227c0327c70c)


14. POST Merchant: Accept Payment `localhost:3000/api/v1/merchants/acceptPayment`

![image](https://github.com/Hanshika-Mehta/frontend_digipay/assets/65864642/8544e1a5-c06c-450b-aad5-1182070827f5)


  
   

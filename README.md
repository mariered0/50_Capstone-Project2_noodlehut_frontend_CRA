# E-commerce Website - NoodleHut

## Overview
NoodleHut is an e-commerce website for a take-out restaurant where uses can see information of the restaurant and the menu which is coming from an API, add to cart, and create their accounts.

![landing_page](https://github.com/mariered0/50_Capstone-Project2_noodlehut_frontend_CRA/blob/main/documentation/landing_page.png?raw=true)

App deployed: [NoodleHut](https://noodlehut.surge.sh/)</br>
Backend: [Github Repo](https://github.com/mariered0/50_Capstone-Project2_backend)


## Data Source

Data (the restaurant menu) is sourced by an API that I created.</br>


## Database Schema
![database schema](https://github.com/mariered0/50_Capstone-Project2_noodlehut_frontend_CRA/blob/main/documentation/Schema_NoodleHut.png?raw=true)

## Technologies Used
**Backend**<br>

* Express (Node.js)
* PostgreSQL (database)
* Node-pg (connection to database)
* bcrypt (password hashing)
* Json Web Token (authentication)
* JSON Schema (data validation)

**Frontend**<br>

* React (frontend framework)
* Material UI (frontend framework)
* formik (form validation)
* yup (form data validation)

## Usage
**Features**<br>
Users can:

* browse the restaurant's menu
* add items to their cart
* sign up/sign in to their account
* edit their account information
* order take-outs <br>

**How to Use**<br>
Prepare the backend and database.<br>

1. Clone the backend repo with the following command and Enter.
```
$ git clone https://github.com/mariered0/50_Capstone-Project2_backend
```
2. Navigate to the '50_Capstone-Project2_backend' folder.

3. Install the backend dependencies by the following command:
```
npm install
```
4. Create NoodleHut database with the following command:
```
psql < noodlehut.sql
```
5. Start the backend with the following command:
```
npm start
```

Prepare the frontend.<br>

1. Clone the frontend repo with the following command and Enter.
```
$ git clone https://github.com/mariered0/50_Capstone-Project2_noodlehut_frontend_CRA
```
2. Navigate to the '50_Capstone-Project2_noodlehut_frontend_CRA' folder.

3. Install the frontend dependencies by the following command:
```
npm install
```

4. Start the frontend with the following command:
```
npm start
```

## Features to Be Added
* Payment process
* In-app inquiry (messages)
* Admin section (restaurant-side)
* Announcement section



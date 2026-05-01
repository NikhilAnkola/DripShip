# DripShip

A MERN Stack based e-commerce project inspired by the dropshipping business model, built using MongoDB, Express.js, React.js, and Node.js.

Although the original goal was to build a complete dropshipping platform with advanced supplier-side workflow, due to project timeline constraints, the current implementation focuses on the core e-commerce functionalities such as authentication, product browsing, cart management, and protected user actions.

This project was developed as a solo academic micro-project to demonstrate full-stack MERN development concepts including frontend-backend integration, JWT authentication, MongoDB data handling, and responsive UI design.

---

## Project Overview

DripShip allows users to:

- Register and create an account
- Login securely using JWT Authentication
- Browse products dynamically from MongoDB
- View product details
- Add products to cart
- Remove products from cart
- View total cart price
- Use Remember Me functionality
- Use Show/Hide Password functionality
- Experience login attempt limiting after multiple failed attempts
- Navigate through animated product gallery with pagination

The project simulates the foundation of a dropshipping/e-commerce platform where users can browse and manage products before future expansion into supplier integration, payment systems, and order management.

---

## Tech Stack

### Frontend

- React.js
- JavaScript
- CSS
- Framer Motion (for animations)

### Backend

- Node.js
- Express.js

### Database

- MongoDB (Localhost using MongoDB Compass)

### Authentication & Security

- JWT (JSON Web Token)
- bcrypt.js (Password Hashing)

### API Testing / Development

- REST APIs using Express Routes

---

## Key Features

### User Authentication

- Secure user registration
- Password hashing using bcrypt
- JWT-based login authentication
- Protected routes using middleware
- Remember Me functionality using localStorage
- Show/Hide Password toggle
- Login attempt limiter (locks after 3 failed attempts)

---

### Product Management

- Dynamic product fetching from MongoDB
- Product cards with image, price, and description
- Product detail toggle
- Smooth pagination for product browsing
- Framer Motion based UI animations

---

### Cart System

- Add to Cart functionality
- Prevent duplicate cart additions
- Protected cart access using JWT verification
- Remove from Cart functionality
- Dynamic total price calculation
- Cart popup overlay UI

---

## Project Structure

```bash
DripShip/
│
├── backend/
│   ├── middleware/
│   │   └── verifyToken.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── public/
│
├── src/
│   ├── images/
│   ├── App.js
│   ├── Cart.js
│   ├── Gallery.js
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   └── index.js
│
├── package.json
└── README.md
```

--- 

## Screenshots
### Landing Page
- Welcome page before login/register
- (../screenshots/landingPage.png)

### Registration Page
- User registration form with password visibility toggle

### Login Page
- JWT login system with Remember Me and login attempt limiter

### Home Page
- Hero section with animated feature cards

### Product Gallery
- Product listing with Add to Cart, View Details, and Pagination

### Cart Popup
- Dynamic cart overlay with total price and remove option

### MongoDB Collections
- Users Collection
- Products Collection
- Cart stored inside User document

---
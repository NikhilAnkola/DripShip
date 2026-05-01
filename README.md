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
Welcome page before login/register
![Landing Page](screenshots/landingPage.png)

### Registration Page
User registration form with password visibility toggle
![Registration Page](screenshots/registrationPage.png)

### Login Page
- JWT login system with Remember Me and login attempt limiter
- ![Login Page](screenshots/loginPage.png)

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

## MongoDB Database Design

### User Schema
```javascript
{
  name,
  username,
  email,
  password,
  cart: [
    {
      productId
    }
  ]
}
```

### Product Schema
```javascript
{
  name,
  price,
  image,
  description
}
```

--- 

## Installation & Setup

### Step 1: Clone the Repository
- git clone https://github.com/NikhilAnkola/DripShip.git
- cd DripShip

### Step 2: Install Frontend Dependencies
- npm install

### Step 3: Install Backend Dependencies
- cd backend
- npm install

### Step 4: Create .env File

Inside the backend folder, create a .env file:

- JWT_SECRET=your_secret_key
- MONGO_URI=mongodb://localhost:27017/DripShip

### Step 5: Start Frontend
- npm start

Frontend runs on:
- http://localhost:3000

### Step 6: Start Backend

Open a new terminal:

- cd backend
- node server.js

Backend runs on:

- http://localhost:5000

---

## API Routes

### User Routes
- POST   /api/users/register
- POST   /api/users/login
- GET    /api/users

### Product Routes
- GET    /api/products
- GET    /api/products/:id

### Cart Routes
- POST   /api/cart/add
- GET    /api/cart
- DELETE /api/cart/remove/:

---

## Current Limitations

This is important for honesty and realistic project presentation.

Currently the project does NOT include:

- Payment Gateway Integration
- Admin Dashboard
- Order Tracking
- Supplier Integration
- Inventory Sync
- Automated Dropshipping Workflow
- Wishlist Backend Logic
- Product Quantity Management
- Checkout System

The project currently functions as a strong MERN e-commerce foundation rather than a complete production-ready dropshipping platform.

---

## Future Improvements

Possible future upgrades:

- Razorpay / Stripe Payment Integration
- Admin Dashboard
- Product Quantity System
- Order History & Tracking
- Wishlist Backend
- Supplier-side Dropshipping Integration
- Automated Order Processing
- Inventory Management
- Product Search & Filters
- Full Production Deployment

--- 

## Learning Outcomes

Through this project, I learned:

- MERN stack architecture
- REST API development
- JWT Authentication
- Password hashing using bcrypt
- Protected routes using middleware
- MongoDB schema design
- React state management
- Frontend + Backend integration
- LocalStorage usage
- Real-world debugging and deployment structure

---

## Author
### Nikhil Ankola

B.Tech Information Technology
3rd Year Undergraduate Student

Built as a solo MERN stack academic micro-project.

GitHub: https://github.com/NikhilAnkola

---

## Final Note

DripShip started as a complete dropshipping platform idea, but due to time constraints, it evolved into a fully functional MERN-based e-commerce system with authentication and cart management.

Rather than pretending unfinished features exist, this project honestly represents a strong practical implementation of full-stack development fundamentals and serves as a solid base for future expansion.
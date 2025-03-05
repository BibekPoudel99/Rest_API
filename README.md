# 📌 Express.js REST API with MongoDB & Authentication

## 🚀 Overview
This project is a **REST API** built with **Express.js** and **MongoDB**, featuring **user authentication** using **JWT (JSON Web Tokens)**. It allows users to register, log in, and perform CRUD operations securely.

## ✨ Features
- 📌 **User Authentication** (Register/Login with JWT)
- 🔐 **Secure Routes** (JWT-based access control)
- 📄 **MongoDB Database** (CRUD operations)
- ⚡ **RESTful Endpoints** (GET, POST, PUT, DELETE)
- 📂 **MVC Structure** for better scalability

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: Express Validator, Bcrypt.js (for password hashing)

## 🔧 Installation & Setup
### 1️⃣ Install MongoDB
Ensure you have **MongoDB** installed and running locally.
- [Download MongoDB](https://www.mongodb.com/try/download/community)
- Add MongoDB to your system's **PATH** environment variable for command-line access.
- Verify installation:
```bash
mongod --version
```

### 2️⃣ Set Up the Project
```bash
# Clone the repository
git clone https://github.com/BibekPoudel99/Rest_API.git
cd Rest_API

# Install dependencies
npm install

# Set up environment variables (.env file)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# Start the server
npm start
```

## 🛠️ API Endpoints
### 🔹 User Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login and get JWT token |

### 🔹 User Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users (Protected) |
| DELETE | `/api/users/:id` | Delete a user (Protected) |

---
 **Happy Coding!** 


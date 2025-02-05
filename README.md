# 📌 Express.js REST API with MongoDB & Authentication

## 🚀 Overview
This project is a **REST API** built with **Express.js** a framework of **NodeJS** and **MongoDB**, featuring **user authentication** using **JWT (JSON Web Tokens)**. It allows users to register, log in, and perform CRUD operations securely.

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


# 🏠 Buyer Portal (Take-Home Assessment)

## 📌 Overview

This project is a simple **Buyer Portal for a real-estate broker**.
It allows users to register, log in, and manage their favorite properties securely.

---

## 🚀 Features

### 🔐 Authentication

* Secure register/login using JWT (stored in HTTP-only cookies)
* Password hashing (no raw passwords stored)

---

### 🧑‍💻 Buyer Dashboard

* Displays logged-in user’s **name and role**
* Shows **My Favorites (properties)**
* Add/remove properties from favorites
* Users can only access their own data

---

### ❤️ Favorites System

* Add property to favorites
* Remove property from favorites
* Data is user-specific and protected

---

### 🛡️ Security & Validation

* Server-side validation for all inputs
* Protected routes using middleware
* JWT-based authentication
* Proper error handling

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Axios
* Zustand (state management)
* react-toastify (toast message)
* react-icons (icons)


**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Joi validation

---

## ⚙️ How to Run the App

### 1️⃣ Clone the repository

```bash
git clone git@github.com:bibek-b/Buyer-Portal.git
cd Buyer-Portal
```

---

### 2️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:

```env
VITE_SERVER_URL=http://localhost:9000/api
```

Run frontend:

```bash
npm run dev
```

---

### 3️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```env
RUNNING_PORT=9000
JWT_SECRET=YOUR_SECRET_KEY
MONGODB_URL=YOUR_MONGO_DB_URL
FRONTEND_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

---

## 🔄 Example Flow

1. Register/Login a user
3. Navigate to dashboard
4. View available properties
5. Add properties to favorites ❤️
6. Remove properties from favorites ❌
7. Logout

---

## 📂 Database Design (Simple)

* **Users**

  * id
  * name
  * email
  * password (hashed)
  * role

* **Favorites**

  * userId
  * propertyId

  * **Properities**

  * name
  * location
  * price

---

## ✅ Notes

* Authentication is handled using **JWT stored in HTTP-only cookies**
* Favorites are **user-specific and protected via middleware**
* Clean separation between frontend and backend

---

## 👨‍💻 Author

Bibek Gadel

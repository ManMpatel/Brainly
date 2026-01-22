# 📘 Brainly – Full Stack Knowledge Sharing Platform

Brainly is a **personal full-stack web application** designed to help users create and manage educational content in a structured and user-friendly way.
The project focuses on implementing modern full-stack development practices including authentication, REST APIs, and a clean frontend–backend architecture.

🚧 **Project Status:** In Progress

## 🎥 Project Demo (Video)

A full walkthrough video of the project is available, demonstrating:

* User registration (Sign Up)
* User login (Sign In)
* Dashboard view
* Adding new content
* Viewing added content

 **Demo Video:**

https://github.com/user-attachments/assets/f304e451-6500-46db-8871-40b5c1dd3fca


---

##  Key Features

* User **Sign Up** and **Sign In**
* **JWT-based authentication**
* Protected routes for authenticated users
* Create and store educational content
* User dashboard to manage created content
* Clean and responsive UI
* Modular frontend and backend architecture
  
---

## Tech Stack

### Frontend

* React
* TypeScript
* HTML
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Tokens (JWT)

### Tools

* Git & GitHub
* Postman
* VS Code

---

## 📂 Project Structure

```
Brainly/
│
├── Brainly-f/        # Frontend (React + TypeScript)
│
├── Brainly-b/        # Backend (Node.js + Express)
│
└── README.md
```

---

Example:

```
https://youtu.be/your-video-link
```

---

## Getting Started (Run Locally)

### Prerequisites

* Node.js installed
* MongoDB (local or cloud)
* Git

---

### 🔹 Backend Setup

```bash
cd Brainly-b
npm install
npm run dev
```

Create a `.env` file and add:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 🔹 Frontend Setup

```bash
cd Brainly-f
npm install
npm start
```

---

## 🔐 Authentication Flow

1. User registers using Sign Up
2. User logs in using Sign In
3. Backend generates a JWT token
4. Token is used to access protected routes
5. Authenticated users can access the dashboard and create content

---

## Future Improvements

* Edit content functionality
* Delete content functionality
* Share content using unique links
* Role-based access control
* Deployment (Vercel / Render)
* UI enhancements

---

## Author

**Man Manojkumar Patel**
 Sydney, Australia
🔗 GitHub: [https://github.com/ManMpatel/Brainly](https://github.com/ManMpatel/Brainly)


## ⭐ Note

This project is actively being developed as part of my full-stack learning journey and will continue to evolve with additional features and improvements.



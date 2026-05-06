# Team Task Manager

A full-stack Task Management web application built using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.

## 🚀 Live Demo

[https://team-task-manager-svpg.onrender.com](https://team-task-manager-svpg.onrender.com)

---

## 📌 Features

* User Authentication (Signup/Login)
* JWT-based Authentication
* Role-based Access (Admin/User)
* Project Management APIs
* Task Management APIs
* Dashboard APIs
* MongoDB Atlas Integration
* Responsive Frontend UI
* Live Deployment on Render

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Render
* GitHub

---

## 📂 Project Structure

```bash
team-task-manager/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   └── dashboard.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/96ArunKumar/team-task-manager.git
```

### 2️⃣ Navigate to Backend Folder

```bash
cd team-task-manager/backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Run the Server

```bash
node server.js
```

Server will run on:

```bash
http://localhost:5000
```

---

## 🔑 API Routes

### Authentication

| Method | Route            |
| ------ | ---------------- |
| POST   | /api/auth/signup |
| POST   | /api/auth/login  |

### Projects

| Method | Route         |
| ------ | ------------- |
| GET    | /api/projects |
| POST   | /api/projects |

### Tasks

| Method | Route      |
| ------ | ---------- |
| GET    | /api/tasks |
| POST   | /api/tasks |

### Dashboard

| Method | Route          |
| ------ | -------------- |
| GET    | /api/dashboard |

---

## 🌐 Deployment

The application is deployed on Render.

Live URL:

[https://team-task-manager-svpg.onrender.com](https://team-task-manager-svpg.onrender.com)

---

## 👨‍💻 Author

### Arun Kumar

* GitHub: [https://github.com/96ArunKumar](https://github.com/96ArunKumar)
* LinkedIn: [https://www.linkedin.com/in/arun-chauhan-4a8830299](https://www.linkedin.com/in/arun-chauhan-4a8830299)

---

## 📜 License

This project is open-source and available under the MIT License.

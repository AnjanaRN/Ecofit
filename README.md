# 🌿 EcoFit – Environmental Impact Assessment Tool

⭐ Built as a Web Programming Mini Project

EcoFit is a full-stack web application that helps users evaluate the environmental impact of their clothing choices. It provides insights into sustainability metrics such as water usage, carbon footprint, and toxicity, and allows users to manage a digital wardrobe.

---

## 📌 Features

### 🧮 Impact Calculator

* Calculates environmental impact based on:

  * Material type (Cotton, Polyester, Khadi, Hemp, etc.)
  * Country of manufacture
  * Washing frequency
  * Certifications
* Displays:

  * Impact Score (0–100)
  * Water Usage (Litres)
  * Carbon Footprint (kg CO₂)
  * Toxicity Level

---

### 👗 Wardrobe Management

* Save clothing items with calculated impact
* View saved wardrobe items
* Delete items from wardrobe

---

### 🌱 Eco Tips & Material Guide

* Sustainability tips for better clothing choices
* Information about eco-friendly materials

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js (JSX Components)
* HTML (via `index.html`)
* CSS (Styling & Responsive Design)
* JavaScript (ES6+)

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* SQLite (`ecofit.db`)

### 🔹 API Communication

* Axios

### 🔹 Version Control

* Git & GitHub

---

## ⚙️ Project Architecture

```text
User (Browser)
      ↓
React Frontend (JSX Components)
      ↓
Calculation Logic (Calculator.js)
      ↓
Axios (API Calls)
      ↓
Node.js + Express Backend
      ↓
SQLite Database (ecofit.db)
      ↓
Response → UI Update
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AnjanaRN/Ecofit.git
cd Ecofit
```

---

### 2️⃣ Run Backend

```bash
cd server
npm install
node server.js
```

---

### 3️⃣ Run Frontend

```bash
cd client
npm install
npm start
```

---

## 🌐 How It Works

1. User inputs clothing details in the calculator
2. React calculates environmental impact using condition-based logic
3. Results are displayed instantly
4. User can save the item to wardrobe
5. Data is sent via Axios to backend
6. Backend stores data in SQLite database
7. Wardrobe data can be retrieved or deleted

---

## 📂 Project Structure

```text
Ecofit/
│
├── client/        # React frontend
│   ├── src/pages/
│   └── public/
│
├── server/        # Node.js backend
│   ├── server.js
│   └── ecofit.db
│
├── README.md
└── .gitignore
```

---

## 👥 Contributors

* Anjana Nair
* Veena Nair
* Rudra Nair
* Krishna Nair



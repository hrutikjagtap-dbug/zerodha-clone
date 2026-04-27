# 📈 Zerodha Clone - Full Stack Trading Platform

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Server-Express-000000?style=flat-square&logo=express)](https://expressjs.com/)

A comprehensive MERN stack application replicating the core ecosystem of Zerodha. This project demonstrates high-level architecture by separating the marketing site, the trading dashboard, and the data API.

---
## 🖥️ User Interface Preview

### Interactive Trading Dashboard
The dashboard provides a real-time feel of market movements, allowing users to track their portfolio and watchlists seamlessly.
<img width="1916" height="1018" alt="Screenshot 2026-04-27 130512" src="https://github.com/user-attachments/assets/e6a9d44a-9150-45ab-9956-2867767058ec" />
<img width="1916" height="969" alt="Screenshot 2026-04-27 130627" src="https://github.com/user-attachments/assets/cf346faf-62b4-458a-8b55-83db48add4e6" />
<img width="1917" height="1008" alt="image" src="https://github.com/user-attachments/assets/9fdb8999-8114-4cd2-b0de-02781a6a8329" />
<img width="1912" height="952" alt="image" src="https://github.com/user-attachments/assets/7af46ec3-0479-4724-9132-5d0f838fded3" />




## 🏗️ Project Architecture

Unlike standard monolithic apps, this project is split into three dedicated services:

* **`frontend/`**: The customer-facing landing page. Focused on SEO, responsive design, and brand storytelling.
* **`dashboard/`**: The actual trading engine UI. Features complex state management, data visualization (Chart.js/Google Charts), and portfolio tracking.
* **`backend/`**: A RESTful API built with Express and MongoDB to handle user authentication, stock data, and order placement.

---

## ✨ Key Features

- **Responsive Landing Page**: Built with React and modern CSS for a pixel-perfect Zerodha feel.
- **Interactive Dashboard**: Real-time-style data simulation and portfolio views.
- **Stock Watchlist**: Functionality to view and track various market indices (NSE/BSE).
- **Buy/Sell Simulation**: Backend logic to process simulated orders and update user holdings.
- **Secure Architecture**: Environment variable protection and structured API routing.

---

## 🛠️ Installation & Setup

1. **Clone the project:**
   ```bash
   git clone [https://github.com/hrutikjagtap-dbug/zerodha-clone.git](https://github.com/hrutikjagtap-dbug/zerodha-clone.git)

# 🚗 DealerVerse – Gamified Dealership Performance Platform

> DealerVerse is a gamified dealership management platform developed for the **CarVerse Hackathon**. It motivates dealership employees through XP, leaderboards, quests, achievements, and department competitions while providing managers with real-time insights using live dealership data.

---

# 📌 Problem Statement

Dealerships involve multiple departments such as:

- 🚗 Sales
- 💰 Accounts
- 🏦 Finance

Employees perform hundreds of tasks daily, but there is:

- No motivation system
- No performance visibility
- No healthy competition
- No rewards for completing tasks

DealerVerse solves this by introducing **gamification** into dealership operations.

---

# 💡 Solution

DealerVerse converts everyday dealership activities into a game.

Employees earn:

- ⭐ XP (Experience Points)
- 🏅 Achievements
- 🎯 Daily Quests
- 🏆 Leaderboard Rankings
- 🚀 Levels
- 🏢 Department Competition

This encourages employees to improve productivity while allowing managers to monitor overall dealership performance.

---

# ✨ Features

## 🔐 Authentication

- Employee Login
- Secure Backend API

---

## 📊 Dashboard

Live statistics from MongoDB

- Total Employees
- Total Events
- Total Locations
- Total Departments

---

## 📅 Live Activity

Displays dealership event logs such as:

- Booking Created
- Discount Created
- Discount Approved
- Credit Approved
- Booking Cancellation
- Finance Activities

---

## 🏆 Leaderboard

Ranks employees based on XP earned.

XP is calculated from dealership activities.

Example:

| Activity | XP |
|----------|---:|
| Booking Created | +20 |
| Discount Created | +15 |
| Discount Escalated | +20 |
| Discount Approved | +30 |
| Credit Added | +25 |
| Credit Approved | +40 |

---

## ⭐ Employee Levels

| XP | Level |
|----|------|
| 0-999 | Level 1 |
| 1000-2999 | Level 2 |
| 3000-5999 | Level 3 |
| 6000-9999 | Level 4 |
| 10000-14999 | Level 5 |
| 15000+ | Level 6 |

---

## 🏅 Achievements

Employees unlock badges automatically.

- 🥉 Bronze Seller
- 🥈 Silver Seller
- 🥇 Gold Seller
- 💎 Diamond Seller

---

## 🎯 Daily Quests

Employees complete daily objectives.

Examples:

- Create Bookings
- Approve Discounts
- Approve Credits

Progress bars display quest completion.

---

## 🏢 Department Battle

Departments compete based on XP.

Example:

- Sales
- Accounts
- Finance

Winning department is displayed on the dashboard.

---

## 📈 Analytics Dashboard

Live analytics include:

- Department Performance
- Employee Performance
- Event Statistics
- Branch Statistics

---

# 🏗️ System Architecture

```
Frontend (HTML/CSS/JavaScript)
            │
            ▼
      Fetch REST APIs
            │
            ▼
Node.js + Express Backend
            │
            ▼
MongoDB Atlas
            │
            ▼
DealerVerse Database
```

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Charts

- Chart.js

---

# 📂 Project Structure

```
DealerVerse
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── css
│   ├── js
│   ├── pages
│   └── index.html
│
└── README.md
```

---

# 🗄️ Database Collections

DealerVerse

```
employees
eventLogs
locations
```

---

## employees

Stores employee information.

Fields include:

- Name
- Department
- XP
- Level
- Coins

---

## eventLogs

Stores dealership activities.

Examples:

- BOOKING_CREATED
- DISCOUNT_APPROVED
- CREDIT_APPROVED
- BOOKING_CANCELLATION_REQUEST_CREATED

---

## locations

Stores dealership branch details.

---

# 🔌 REST APIs

## Authentication

```
POST /api/auth/login
```

---

## Dashboard

```
GET /api/dashboard
```

---

## Event Logs

```
GET /api/eventlogs
```

---

## Leaderboard

```
GET /api/leaderboard
```

---

## Quests

```
GET /api/quests
```

---

## Department Battle

```
GET /api/departments
```

---

## Analytics

```
GET /api/analytics/department
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/DealerVerse.git
```

---

## Backend

```bash
cd backend

npm install

npm start
```

---

## Frontend

Open

```
frontend/index.html
```

using VS Code Live Server.

---

# ⚙️ Environment Variables

Create a `.env` file inside `backend`.

```env
MONGO_URI=your_mongodb_connection_string

PORT=5000

JWT_SECRET=your_secret_key
```

---

# 📊 Workflow

```
Employee Login

↓

Dashboard

↓

Dealer Activity

↓

MongoDB Event Logs

↓

XP Calculation

↓

Leaderboard

↓

Achievements

↓

Department Competition

↓

Analytics
```

---

# 🎯 Hackathon Highlights

✅ Live MongoDB Integration

✅ Real Dealership Dataset

✅ XP System

✅ Employee Levels

✅ Achievements

✅ Daily Quests

✅ Leaderboard

✅ Department Battle

✅ Analytics Dashboard

---

# 🌟 Future Enhancements

- Real-time notifications
- Email alerts
- AI performance recommendations
- Predictive sales analytics
- Mobile application
- Role-based dashboards
- Reward redemption system

---


# 📄 License

Developed for the **CarVerse Hackathon**.

For educational and demonstration purposes.

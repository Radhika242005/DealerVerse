const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const eventLogRoutes = require("./routes/eventLogRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
dotenv.config();

connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/eventlogs", eventLogRoutes);
app.use("/api/dashboard",dashboardRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.get("/", (req, res) => {
  res.send("DealerVerse Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
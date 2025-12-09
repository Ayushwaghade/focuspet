// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // for .env

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const app = express();

// ----- Middleware -----
app.use(cors()); // allow all origins in dev
app.use(express.json()); // parse JSON body

// ----- Routes -----
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Focus Pet API is running 🚀");
});

// ----- DB + Server -----
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/focuspet";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

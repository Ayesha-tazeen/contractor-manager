const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// load env variables
dotenv.config();

// database connection
const connectDB = require("./config/db");


// connect database
connectDB();

// app init
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// port config
const PORT = process.env.PORT || 5000;

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

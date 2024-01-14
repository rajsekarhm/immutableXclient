const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const { createToken } = require("./jwt");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.post("/login", async (req, res) => {
  try {
    const token = createToken(req.body.name,req.body.password)
    const option = { expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) };
    res.status(201).cookie("auth-jwt", token, option).json({ success: true, isAuth:true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});

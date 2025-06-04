import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // <-- Get token from cookie
  console.log("Token =>" , token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ✅ Set req.user
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export default verifyToken;

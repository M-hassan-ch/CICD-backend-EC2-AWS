const express = require("express");
const app = express();

// Your existing route definitions here
app.get("/api", (req, res) => {
  res.status(200).json({ status: "Success", message: "Hello from express server!" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "I am healthy" });
});

module.exports = app;

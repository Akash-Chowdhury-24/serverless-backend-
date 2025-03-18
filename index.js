const express = require('express');
const serverless = require('@vendia/serverless-express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');

const connectDB = require('./database/db');
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express.js on AWS Lambda!" });
});

module.exports.handler = serverless({ app });
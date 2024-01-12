"use strict";
const Mongoose = require("mongoose");


const uri = `mongodb+srv://zahidsammy95:${process.env.DB_PASS}@job-portal.kpz9fyl.mongodb.net/jobPortal?retryWrites=true&w=majority`

// Connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: " + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;
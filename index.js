const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose Schema and Models for educational content (e.g., courses, articles, videos)

// Define your routes for creating, updating, and retrieving educational content
app.get('/',(req,res)=>{
  console.log("say hello to Netflix backend");
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

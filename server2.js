const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { useTransition } = require("react");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(
    `mongodb+srv://giorgikuliashvili1:${process.env.MONGODB_PASSWORD}@cluster0.tgtyvvi.mongodb.net/budgetify`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema for the transaction collection
const transactionSchema = new mongoose.Schema({
  kind: String,
  header: String,
  isExpense: Boolean,
  date: String,
  fullName: String,
  amount: Number,
});

// Define a schema for the obligatory collection
const obligatorySchema = new mongoose.Schema({
  header: String,
  paymentDate: String,
  description: String,
  amount: Number,
});

// Define a schema for users
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  debitCardBalance: String,
  creditCardBalance: String,
});

// Define a schema for subscriptions
const subscriptionsSchema = new mongoose.Schema({
  category: String,
  header: String,
  nextPaymentDate: String,
  actualPrice: String,
});

// Create a model for the transaction collection
const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "transaction"
);

// Create a model for the users collection
const Users = mongoose.model("Users", usersSchema, "users");

// Create a model for the obligatory collection
const Obligatorys = mongoose.model("Obligatorys", usersSchema, "obligatorys");

// Create a model for the subscriptions collection
const Subscriptions = mongoose.model("Subscriptions", usersSchema, "subscriptions");

// Define a route to fetch all transactions
app.get("/api/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    console.log("Retrieved transactions:", transactions); // Log retrieved transactions
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Define a route to fetch all obligatorys
app.get("/api/obligatorys", async (req, res) => {
  try {
    const obligatorys = await Obligatorys.find();
    console.log("Retrieved obligatorys:", obligatorys); // Log retrieved obligatorys
    res.json(obligatorys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Define a route to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    console.log("Retrived users:", users);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Define a route to fetch all subscriptions
app.get("/api/subscriptions", async (req, res) => {
  try {
    const subscriptions = await Subscriptions.find();
    console.log("Retrived Subscriptions:", Subscriptions);
    res.json(subscriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { useTransition } = require("react");

const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://giorgikuliashvili1:Giorga2002@cluster0.tgtyvvi.mongodb.net/budgetify",
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

// Define a schema for users
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a model for the transaction collection
const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "transaction"
);

// Create a model for the users collection
const Users = mongoose.model("Users", usersSchema, "users");

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

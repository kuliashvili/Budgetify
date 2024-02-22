const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://giorgikuliashvili1:Giorga2002@cluster0.tgtyvvi.mongodb.net/sample_restaurants', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema for the restaurants collection
const restaurantSchema = new mongoose.Schema({
  address: {
    borough: String
  },
  cuisine: String,
  grades: [
    {
      name: String,
      restaurant_id: String
    }
  ]
});

// Create a model for the restaurants collection
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Define a route to fetch all restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    console.log('Retrieved restaurants:', restaurants); // Log retrieved restaurants
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

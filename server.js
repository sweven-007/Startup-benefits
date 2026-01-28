const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.log(err));
// Test Route
app.get('/api/deals', async (req, res) => {
  // We'll replace this with real database fetching in the next step
  res.json([
    { _id: "1", name: "Stripe", value: "$20k Fee-free", description: "Payment processing.", isRestricted: false },
    { _id: "2", name: "AWS", value: "$5k Credits", description: "Cloud hosting.", isRestricted: true }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
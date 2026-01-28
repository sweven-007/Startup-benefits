// backend/routes/deals.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Deal = require('../models/Deal');

// Public: Get all deals
router.get('/', async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
});

// Private: Claim a deal
router.post('/claim/:id', auth, async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  // Check if restricted and user is NOT verified
  if (deal.isRestricted && !req.user.isVerified) {
    return res.status(403).json({ msg: "Please verify your startup to unlock this deal." });
  }
  // Logic to save to user's claimedDeals here...
  req.user.claimedDeals.push(deal._id);
  await req.user.save();
  res.json({ msg: "Deal claimed!" });
});
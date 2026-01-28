// backend/models/User.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Founders start unverified
  claimedDeals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }]
});
module.exports = mongoose.model('User', UserSchema);
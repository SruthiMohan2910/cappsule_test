const mongoose = require('mongoose');

const DrugSchema = mongoose.Schema({
  name: String,
  composition: String,
  manufacturer: String,
  expiry_date: Date,
  dosage: String,
  unit: Number,
  side_effects: [String],
  prescription: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Drug', DrugSchema);

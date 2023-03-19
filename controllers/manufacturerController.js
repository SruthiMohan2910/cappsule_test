const Manufacturer = require('../models/manufacturerSchema');

exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

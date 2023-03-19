const Drug = require('../models/drugSchema');
const Manufacturer = require('../models/manufacturerSchema');


// to add drugs and manufacturers simultaneously

exports.addDrug = async (req, res) => {
  try {
    const { name, composition, manufacturer, expiry_date, dosage, variants, side_effects, prescription } = req.body;

    // Create new drug
    const drug = new Drug({ name, composition, manufacturer, expiry_date, dosage, variants, side_effects, prescription });

    // Save drug to database
    const savedDrug = await drug.save();

    // Find or create manufacturer
    const foundManufacturer = await Manufacturer.findOne({ name: manufacturer });
    if (foundManufacturer) {
      foundManufacturer.drugs.push(savedDrug._id);
      await foundManufacturer.save();
    } else {
      const newManufacturer = new Manufacturer({ name: manufacturer, drugs: [savedDrug._id] });
      await newManufacturer.save();
    }

    res.status(200).json({ message: 'Drug uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get all drugs

exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

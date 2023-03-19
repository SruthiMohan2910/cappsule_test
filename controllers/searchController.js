const Drug = require('../models/drugSchema');
const Manufacturer = require('../models/manufacturerSchema');

exports.searchDrugs = async (req, res) => {
  try {
    const query = req.query.q;
    const relatedDrugs = ['Paracetamol', 'Acetaminophen'];
    const searchRegex = new RegExp(query, 'i');
    const drugs = await Drug.find({ name: searchRegex }).lean();
    if (drugs.length === 0) {
      const relatedDrugsQuery = relatedDrugs.map((drug) => ({
        name: new RegExp(drug, 'i'),
      }));
      const relatedDrugsResults = await Drug.find({ $or: relatedDrugsQuery }).lean();
      res.json({ results: relatedDrugsResults });
    } else {
      res.json({ results: drugs });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

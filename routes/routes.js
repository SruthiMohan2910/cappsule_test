const express = require('express');
const router = express.Router();

const drugController = require('../controllers/drugController');
const manufacturerController = require('../controllers/manufacturerController');
const searchController = require('../controllers/searchController');

// to add drugs and manufacturers simultaneously
router.post('/upload', drugController.addDrug);

// Get all drugs
router.get('/drugs', drugController.getAllDrugs);

// Get all manufacturers
router.get('/manufacturers', manufacturerController.getAllManufacturers);

// Search for drugs by name, composition, or related manufacturer
router.get('/search', searchController.searchDrugs);

module.exports = router;

const mongoose = require('mongoose');

const ManufacturerSchema = mongoose.Schema({
    name: String,
    drugs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drug'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);

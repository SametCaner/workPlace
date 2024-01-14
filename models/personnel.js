const mongoose = require('mongoose');

const personnelSchema = new mongoose.Schema({
    name: String,
    surname: String,
    role: String,
    salary: Number,
});

const Personnel = mongoose.model('Personnel', personnelSchema);

module.exports = Personnel;
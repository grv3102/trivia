var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
    name : String,
    answer1 : String,
    answer2 : []
});

module.exports = mongoose.model('Data', DataSchema);
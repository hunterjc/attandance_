var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var Students = new Schema({
    fname: String,
    email: String,
    password: String,
    cpassword: String
});

// Compile model from schema
var Students = mongoose.model('Students', Students);
module.exports = {
    Students: Students
}
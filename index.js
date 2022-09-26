var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/attandace';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
require('dotenv').config()
const port = process.env.PORT;

var db = mongoose.connection;

db.on("error", () => {
    console.log("MongoDB connection failed...");
});
db.once("open", () => {
    app.listen(port, console.log(`running on ${port}`));
});

//all routes

var index = require('./routes/home');
var students = require('./routes/students');
var newstudent = require('./routes/student_signup');
var student_login = require('./routes/student_login');
var attandence_student = require('./routes/attandence_student')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/students', students);
app.use('/student_signup', newstudent);
app.use('/student_login', student_login);
app.use('/attandence_student', attandence_student);
module.exports = app;


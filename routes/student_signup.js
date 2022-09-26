var express = require('express');
const student = require('../models/student');
var router = express.Router();
var Students = require('../models/student').Students;

/* GET signup page. */
router.get('/', function (req, res, next) {
    res.render('signup', { title: 'SignUp' });
});

/*SignUp user*/
router.post('/', function (req, res) {

    var fname = req.body.fname;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    Students.create({

        "fname": fname,
        "email": email,
        "password": password,
        "cpassword": cpassword

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("Error occured when signup!");
        }
        else {
            // And forward to success page
            // console.log(doc);
            res.redirect('/student_login');
        }
    });


});

module.exports = router;

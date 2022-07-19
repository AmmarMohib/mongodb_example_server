var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config/dbconfig');

var functions = {
    addNew: function(req, res) {
        if ((!req.body.name) || (!req.body.password)) {
            res.json({success: false, msg: 'Enter all fields', body: req.body})
        }
        else {
            var newUser = User({
                name: req.body.name,
                password: req.body.password
            });
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'failed to save', error: err})
                }
                else {
                    res.json({success: true, msg: 'user saved'})
                    console.log(req.body);
                }
            })
        }
    }
}
module.exports = functions;

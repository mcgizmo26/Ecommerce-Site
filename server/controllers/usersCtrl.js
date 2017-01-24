// ********** Connection ****************
var app = require('.././index.js');
var db = app.get('db');
var bcrypt = require('bcrypt');


// ********************* CRUD Functions *********************

// create *********
module.exports = {
    createUser: function(req, res, next) {
        var u = req.body;
        u.password = bcrypt.hashSync(u.password, bcrypt.genSaltSync(10));
        db.users.insert({name: u.name, username: u.username, password: u.password}, function(err, newUser) {
            res.status(200).send(newUser);
        });
    },

    // Read **********
    getUser: function(req, res, next) {
        db.read_user(req.params.id, function(err, users) {
            res.send(users);
        })
    },

    getCurrentUser: function(req, res, next) {
      return res.send(req.user);
    },

    // Update ************
    updateUser: function(req, res, next) {
        db.update_user(req.params.id, req.body.password, function(err, users) {
            res.send(users);
        })
    },

    // Logout ************
    logout: function(req, res, next) {
        if (req.user) {
            req.logout();
            res.redirect('/#/');
        } else {
            res.redirect('/');
        }
    },
}

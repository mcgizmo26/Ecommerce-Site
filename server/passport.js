// ********** Connection ****************
var app = require('./index.js');
var db = app.get('db');
var bcrypt = require('bcrypt');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.usersdb.getUser([username], function(err, user) {
      user = user[0];
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
      return done(null, user);
    })
  }
))


passport.serializeUser(function(user, done) {
  console.log("passport.js serialize fun", user);
    done(null, user);
})

passport.deserializeUser(function(id, done) {
  done(null, id);


})

module.exports = passport;

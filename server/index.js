// **************** Dependencies *****************

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var cookie = require('cookie-parser');
var bcrypt = require('bcrypt');
var connectionString = "postgres://postgres:password@localhost/products"
// var connectionString = "postgres://LonnieMcGill@localhost/products"

var app = module.exports = express();

// ******** Massive Instance & Export App **********
var massiveInstance = massive.connectSync({
 connectionString: connectionString
});

app.set('db', massiveInstance);
var db = app.get('db');
var passport = require('./passport');
var usersCtrl = require('./controllers/usersCtrl.js');
var cartBackEndCtrl = require('./controllers/cartBackEndCtrl.js');

// ********************** Middle Ware **************************
app.use(cookie());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'keyboardcat'
}))

app.use(cors());
app.use(express.static(__dirname + './../public')); //serves files allowing the user to view the web page

app.use(passport.initialize());
app.use(passport.session());

// ***************************** Policies **************************
var isAuthed = function(req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
};

// ************ Passport User Endpoints **************
app.post('/api/login', passport.authenticate('local', {successRedirect: '/#/cart'}), function(req, res) {
  console.log("login endpoint in index.js");
  // res.status(200).redirect('/#/cart');
});

app.get('/api/getuser', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  console.log('USER USER', req.user);
  res.status(200).json(req.user);
  // res.send(req.user)
});

app.get('/logout', usersCtrl.logout);


// // ************* Express endpoints *****************

// ********************* Products ********************

var productCtrl = require('./controllers/productCtrl.js');

// Create ************
app.post('/products', productCtrl.createProducts);

// Read **************
app.get('/products/:id', productCtrl.getProduct);
app.get('/products', productCtrl.getProducts);

// Update ************
app.put('/products/:id', productCtrl.updateProduct);

// Delete ************
app.delete('/products/:id', productCtrl.deleteProduct);

// add to cart *******
app.put('/products/:id', productCtrl.addProductToCart);

// ********************* Users ************************

// Create ************
app.post('/users', usersCtrl.createUser);

// Get ************
app.get('/user', usersCtrl.getCurrentUser);

// Read **************
app.get('/me', usersCtrl.getUser);

// Update ************
app.put('/users/:id', usersCtrl.updateUser);

// ********************* cart ************************

// create *************

app.post('/cart', cartBackEndCtrl.addToCart);

var port = 3000;
app.listen(3000, function(){
  console.log("Successfully listening on : 3000")
})

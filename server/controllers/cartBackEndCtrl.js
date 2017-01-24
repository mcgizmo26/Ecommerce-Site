// ********** Connection ****************
var app = require('.././index.js');
var db = app.get('db');

// ********************* CRUD Functions *********************

// create *********
module.exports = {

    addToCart: function(req, res, next) {
        var userId = req.body.users_id;
        var products = req.body.cart_id.id;

        req.body.cart_id.forEach(function(product) {
            var arr = [userId, product.id];
            db.cartdb.join_user_and_product(arr, function(err, response) {
                if (err) {
                    console.log(err);
                }
                console.log(response);
            });
        });
        res.sendStatus(200);
    },

    // Read **********
    getCart: function(req, res, next) {
        db.cartdb.read_cart(req.params.id, function(err, users) {
            res.send(users);
        })
    },

    getCurrentUser: function(req, res, next) {
        return res.send(req.user);
    },

    // Update *********
    deleteItem: function(req, res, next) {
        db.cartdb.update_cart(req.params.id, req.body)
    }
}

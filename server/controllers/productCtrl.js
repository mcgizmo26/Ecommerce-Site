// ********** Connection ****************
var app = require('.././index.js');
var db = app.get('db');

// ********************* CRUD Functions *********************

// create *********
module.exports = {
    createProducts: function(req, res, next) {
      var r = req.body;
      var productsArr = [
        r.name,
        r.description,
        r.price,
        r.type,
        r.imageurl
      ]
        db.productsdb.create_product(productsArr, function(err, products) {
            console.log(err, products);
            res.status(200).send(req.body);
        })
    },

    // Read **********
    getProduct: function(req, res, next) {
        db.productsdb.read_product(req.params.id, function(err, products) {

            res.send(products);
        })
    },

    getProducts: function(req, res, next) {
        db.productsdb.read_products( function(err, response) {
            if(err) {
              res.status(500).send(err)
            } else {
              res.status(200).send(response)
            }
        })
    },


    // Update ************
    updateProduct: function(req, res, next) {
        db.productsdb.update_product(req.params.id, req.body.price, function(err, product) {
            res.send(product);
        })
    },

    // Delete *************
    deleteProduct: function(req, res, next) {
        db.productsdb.delete_product(req.params.id, function(err, product) {
            res.send(product);
        })
    },

    addProductToCart: function(req, res, next){
      db.productsdb.create_product(req.params.id, function(err, products) {
          
          res.status(200).send(req.body);
      })
    }
}

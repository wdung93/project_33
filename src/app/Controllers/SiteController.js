const Product = require('../models/Products');
const { mutipleMongooseToObject } = require('../../util/mongoose');
 
class SiteController {
    index(req, res, next) {
        Product.find({})
            .then(products => res.render('home', {
                products: mutipleMongooseToObject(products)
            }))
            .catch(next)
    }
    search(req, res) {
        res.send('Search Detail!!')
    }
};

module.exports = new SiteController;
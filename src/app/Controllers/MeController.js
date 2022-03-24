const Product = require('../models/Products');
const { mutipleMongooseToObject } = require('../../util/mongoose');
 
class MeController {
    //[GET] /me/stored-courses
    storedProducts(req, res, next) {

        let productQuery = Product.find({});
        if(req.query.hasOwnProperty('_sort')) {
            productQuery = productQuery.sort({
                [req.query.column] : req.query.type
            });
        }

        Promise.all(([
            productQuery,
            Product.countDocumentsDeleted({})
        ]))
            .then(([
                products,
                deletedCount
            ]) => res.render('me/stored-products', {
                products: mutipleMongooseToObject(products),
                deletedCount
            }))
            .catch(next)
    };
    //[GET] /me/trash-courses
    trashProducts(req, res, next) {

        let productQuery = Product.findDeleted({});
        if(req.query.hasOwnProperty('_sort')) {
            productQuery = productQuery.sort({
                [req.query.column] : req.query.type
            });
        }

        productQuery
            .then(products => res.render('me/trash-products', {
                products: mutipleMongooseToObject(products)
            }))
            .catch(next)
    };
};

module.exports = new MeController;
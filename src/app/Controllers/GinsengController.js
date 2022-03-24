const Product = require('../models/Products');
const { mongooseToObject } = require('../../util/mongoose');
 
class GinsengController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(products => res.render('ginsengs/show', {
                products: mongooseToObject(products)
            }))
            .catch(next)
    };
    //[GET] /courses/create
    create(req, res, next) {
        res.render('ginsengs/create');
    };
    //[POST] /courses/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/me/stored-products'))
            .catch(next)
    };
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Product.findOne({ _id: req.params.id })
            .then(products => res.render('ginsengs/edit', {
                products: mongooseToObject(products)
            }))
            .catch(next)
    };
    //[PUT] /courses/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored-products'))
            .catch(next)
    };
    //[DELETE] /courses/:id
    destroy(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored-products'))
            .catch(next)
    };
    //[PATCH] /courses/:id
    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash-products'))
            .catch(next)
    };
    //[DELETE] /courses/:id/force
    forceRestore(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash-products'))
            .catch(next)
    };
};

module.exports = new GinsengController;
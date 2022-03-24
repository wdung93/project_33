const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: Number },
    name: { type: String },
    image: { type: String },
    ingredient: { type: String },
    uses: { type: String },
    userObject: { type: String },
    usage: { type: String },
    specifications: { type: String },
    expiry: { type: String },
    preserve: { type: String },
    origin: { type: String },
    producer: { type: String },
    importUnit: { type: String },
    priceLine: { type: Number },
    priceBig: { type: Number },
    slug: { type: String, slug: "name", unique: true }
  }, {
    _id: false,
    timestamps: true,
  });

mongoose.plugin(slug);
Product.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
 });
 Product.plugin(AutoIncrement);

module.exports = mongoose.model('Product', Product);


module.exports = {
    mutipleMongooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject(mongoose))
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject(mongoose) : mongoose
    }
};
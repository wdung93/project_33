const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nhan_sam_han_quoc', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('Connect Successful!');
    } catch (error) {
        console.log('Connect Failure!');
    }
};



module.exports = { connect };
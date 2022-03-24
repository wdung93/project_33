const introduceRouter = require('./introduce');
const siteRouter = require('./site');
const ginsengRouter = require('./ginseng');
const meRouter = require('./me');

function route(app) {
    app.use('/introduce', introduceRouter);

    app.use('/me', meRouter);

    app.use('/ginseng', ginsengRouter);
    
    app.use('/', siteRouter);
};

module.exports = route;
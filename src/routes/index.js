
const siteRoute = require('./site');
const pDetail = require('./productDetail');

function route(app){

    app.get('/pDetail', pDetail);

    // app.get('/form', siteRoute);
    app.get('/', siteRoute);
}

module.exports = route;
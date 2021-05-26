
const express = require('express');
const route = express.Router();

const productDetailController = require('../app/controllers/ProductDetailController');
 
route.use('/', productDetailController.productDetail);

module.exports = route;
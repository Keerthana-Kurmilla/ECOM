const express  = require('express');
const { getProducts, createProducts, updateProducts, deleteProducts } = require('../controllers/productControllers');
const Router = express.Router();

Router.get('/',getProducts)
Router.post('/',createProducts)
Router.put('/:id',updateProducts)
Router.delete('/:id',deleteProducts)

module.exports = Router
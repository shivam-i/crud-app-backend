const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller.js")
const Product = require("../models/product.model.js")

// GET ALL PRODUCTS
router.get('/', productController.getProducts);

// GET A PRODUCT BY ID
router.get('/:id', productController.getProduct);

// UPDATE A PRODUCT BY ID
router.put('/:id', productController.updateProduct);

// DELETE A PRODUCT
router.delete('/:id', productController.deleteProduct);

// CREATE A PRODUCT
router.post('/', productController.createProduct);

module.exports = router;


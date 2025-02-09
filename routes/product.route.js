const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Get all products
router.get("/", getProducts);

// Get a single product by ID
router.get("/:id", getProduct);

// Create a new product
router.post("/", createProduct);

// Update an existing product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;

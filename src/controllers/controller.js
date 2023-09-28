const express = require("express");
const router = express.Router();
const axios = require("axios");
const ProductService = require("../services/productService");
const cors = require("cors");

router.use(cors());
router.get("/sample", (req, res) => {
  res.json({ message: "This is a sample route from the controller service." });
});

router.get("/categories", async (req, res) => {
  try {
    const productService = new ProductService(); 
    const categories = await productService.getCategories();
    res.json({ categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/addProduct", async (req, res) => {
  try {
    const { title } = req.body;
    const productService = new ProductService();
    const result = await productService.addProduct(title);
    res.json(result);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updateProduct/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { title } = req.body;
    const productService = new ProductService();

    const updatedResult = await productService.updateProduct(productId, title);

    res.json(updatedResult);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

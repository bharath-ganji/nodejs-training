const axios = require("axios");

class ProductService {
  async getCategories() {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }

  async addProduct(title) {
    const response = await axios.post("https://dummyjson.com/products/add", {
      title,
    });
    return response.data;
  }

  async updateProduct(productId, title) {
    const response = await axios.put(
      `https://dummyjson.com/products/${productId}`,
      {
        title,
      }
    );

    return response.data;
  }
}

module.exports = ProductService;

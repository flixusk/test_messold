const express = require('express');
const { fetchProducts } = require('./api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/products', async (req, res) => {
  try {
    const productsData = await fetchProducts();
    res.json(productsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

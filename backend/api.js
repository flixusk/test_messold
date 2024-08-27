const axios = require('axios');
require('dotenv').config();

const SHOPIFY_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
const STORE_NAME = process.env.SHOP_NAME
//i don't have store Name so i the request featching is not working
const SHOPIFY_STORE_URL = `https://${STORE_NAME}.myshopify.com/admin/api/2024-01/products.json`;

const fetchProducts = async () => {
  try {
    const response = await axios.get(SHOPIFY_STORE_URL, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
};

module.exports = { fetchProducts };

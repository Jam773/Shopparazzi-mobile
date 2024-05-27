const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all products
router.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Error fetching products');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;

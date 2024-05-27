const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Import routes
const productRoutes = require('./routes/products');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

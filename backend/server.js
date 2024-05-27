const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import the database connection
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Example route to get all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// Example route to add a new user
app.post('/users', (req, res) => {
    const { username, email, password } = req.body;
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
        if (err) {
            console.error('Error adding user:', err);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('User added');
        }
    });
});

// New route to get all products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// New route to get product prices
app.get('/productprices', (req, res) => {
    db.query('SELECT * FROM productprices', (err, results) => {
        if (err) {
            console.error('Error fetching product prices:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// New route to get all stores
app.get('/stores', (req, res) => {
    db.query('SELECT * FROM stores', (err, results) => {
        if (err) {
            console.error('Error fetching stores:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// New route to get all cart items
app.get('/cartitems', (req, res) => {
    db.query('SELECT * FROM cartitems', (err, results) => {
        if (err) {
            console.error('Error fetching cart items:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// New route to get all favorite items
app.get('/favorites', (req, res) => {
    db.query('SELECT * FROM favorites', (err, results) => {
        if (err) {
            console.error('Error fetching favorites:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// New route to get all orders
app.get('/orders', (req, res) => {
    db.query('SELECT * FROM orders', (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

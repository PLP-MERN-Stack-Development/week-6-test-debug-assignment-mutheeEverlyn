require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const posts = require('./routes/posts');
const simpleLogger = require('./middleware/simpleLogger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();

// Enable CORS for frontend
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001'] }));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(simpleLogger); // Add simpleLogger middleware

app.get('/', (req, res) => {
  res.send('API Running');
});

// Define Routes
app.use('/api/posts', posts);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app; 
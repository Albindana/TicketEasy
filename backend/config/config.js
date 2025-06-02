require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/ticketeasy',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173'
}; 
const express = require('express');
const router = express.Router();
const { subscribeNewsletter, getAllNewsletters } = require('../controllers/newsletterController');

// POST - Subscribe to newsletter
router.post('/', subscribeNewsletter);

// GET - Get all newsletter subscriptions
router.get('/', getAllNewsletters);

module.exports = router;
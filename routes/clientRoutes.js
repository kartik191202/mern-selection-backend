const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addClient, getAllClients } = require('../controllers/clientController');

// POST - Add new client
router.post('/', upload.single('image'), addClient);

// GET - Get all clients
router.get('/', getAllClients);

module.exports = router;
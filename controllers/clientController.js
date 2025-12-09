const Client = require('../models/Client');

// Add new client
const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please upload an image' 
      });
    }

    const client = new Client({
      name: name,
      description: description,
      designation: designation,
      image: req.file.filename
    });

    await client.save();

    res.status(201).json({ 
      success: true, 
      message: 'Client added successfully',
      client: client 
    });
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

// Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });

    res.status(200).json({ 
      success: true, 
      count: clients.length,
      clients: clients 
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

module.exports = {
  addClient,
  getAllClients
};
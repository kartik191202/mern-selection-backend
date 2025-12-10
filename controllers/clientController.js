const Client = require('../models/Client');

// Add new client
const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

    // Validate required fields based on schema
    if (!name || !description || !designation) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, description, designation"
      });
    }

    const clientData = {
      name,
      description,
      designation
    };

    // Only add image if provided
    if (req.file) {
      clientData.image = req.file.filename;
    }

    const newClient = await Client.create(clientData);

    res.status(201).json({
      success: true,
      message: "Client added successfully",
      data: newClient
    });

  } catch (error) {
    console.error("Error adding client:", error);
    res.status(500).json({
      success: false,
      message: "Error adding client",
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
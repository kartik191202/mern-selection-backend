const Contact = require('../models/Contact');

// Submit contact form
const submitContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    // Basic validation
    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    const contact = new Contact({
      fullName: fullName,
      email: email,
      mobile: mobile,
      city: city
    });

    await contact.save();

    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      contact: contact 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

// Get all contact submissions
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({ 
      success: true, 
      count: contacts.length,
      contacts: contacts 
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

module.exports = {
  submitContact,
  getAllContacts
};
const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide an email address' 
      });
    }

    // Check if email already exists
    const existingEmail = await Newsletter.findOne({ email: email });
    
    if (existingEmail) {
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already subscribed' 
      });
    }

    const newsletter = new Newsletter({
      email: email
    });

    await newsletter.save();

    res.status(201).json({ 
      success: true, 
      message: 'Subscribed successfully',
      newsletter: newsletter 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

// Get all newsletter subscriptions
const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find().sort({ createdAt: -1 });

    res.status(200).json({ 
      success: true, 
      count: newsletters.length,
      newsletters: newsletters 
    });
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

module.exports = {
  subscribeNewsletter,
  getAllNewsletters
};
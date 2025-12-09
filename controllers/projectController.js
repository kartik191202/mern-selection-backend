const Project = require('../models/Project');

// Add new project
const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please upload an image' 
      });
    }

    const project = new Project({
      name: name,
      description: description,
      image: req.file.filename
    });

    await project.save();

    res.status(201).json({ 
      success: true, 
      message: 'Project added successfully',
      project: project 
    });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({ 
      success: true, 
      count: projects.length,
      projects: projects 
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};

module.exports = {
  addProject,
  getAllProjects
};
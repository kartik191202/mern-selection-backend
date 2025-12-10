const Project = require('../models/Project');

// Add new project
const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate required fields based on schema
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, description"
      });
    }

    const projectData = {
      name,
      description
    };

    // Only add image if provided
    if (req.file) {
      projectData.image = req.file.filename;
    }

    const newProject = await Project.create(projectData);

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: newProject
    });

  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({
      success: false,
      message: "Error adding project",
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
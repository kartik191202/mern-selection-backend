const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addProject, getAllProjects } = require('../controllers/projectController');

// POST - Add new project
router.post('/', upload.single('image'), addProject);

// GET - Get all projects
router.get('/', getAllProjects);

module.exports = router;
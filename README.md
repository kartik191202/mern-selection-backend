# Portfolio Backend API

A well-structured REST API built with Node.js, Express, and MongoDB.

## 📁 Folder Structure

```
backend/
│
├── config/
│   └── database.js          # MongoDB connection configuration
│
├── models/
│   ├── Project.js           # Project schema and model
│   ├── Client.js            # Client schema and model
│   ├── Contact.js           # Contact schema and model
│   └── Newsletter.js        # Newsletter schema and model
│
├── routes/
│   ├── projectRoutes.js     # Project API routes
│   ├── clientRoutes.js      # Client API routes
│   ├── contactRoutes.js     # Contact API routes
│   └── newsletterRoutes.js  # Newsletter API routes
│
├── controllers/
│   ├── projectController.js    # Project business logic
│   ├── clientController.js     # Client business logic
│   ├── contactController.js    # Contact business logic
│   └── newsletterController.js # Newsletter business logic
│
├── middleware/
│   └── upload.js            # Multer file upload configuration
│
├── uploads/                 # Uploaded images storage
│
├── .gitignore              # Git ignore file
├── app.js                  # Express app configuration
├── server.js               # Server entry point
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Uploads Folder

```bash
mkdir uploads
```

### 3. Start MongoDB

Make sure MongoDB is installed and running:

```bash
mongod
```

### 4. Start Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Projects

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/projects` | Add new project | `name`, `description`, `image` (file) |
| GET | `/api/projects` | Get all projects | - |

### Clients

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/clients` | Add new client | `name`, `description`, `designation`, `image` (file) |
| GET | `/api/clients` | Get all clients | - |

### Contact Forms

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/contact` | Submit contact form | `fullName`, `email`, `mobile`, `city` |
| GET | `/api/contact` | Get all submissions | - |

### Newsletter

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/newsletter` | Subscribe to newsletter | `email` |
| GET | `/api/newsletter` | Get all subscriptions | - |

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Error details"
}
```

## 🗄️ Database Models

### Project Model
```javascript
{
  name: String,
  description: String,
  image: String,
  createdAt: Date
}
```

### Client Model
```javascript
{
  name: String,
  description: String,
  designation: String,
  image: String,
  createdAt: Date
}
```

### Contact Model
```javascript
{
  fullName: String,
  email: String,
  mobile: String,
  city: String,
  createdAt: Date
}
```

### Newsletter Model
```javascript
{
  email: String,
  createdAt: Date
}
```

## 🔧 Configuration

### Database Configuration
Located in `config/database.js`

Default connection: `mongodb://localhost:27017/portfolio_db`

### File Upload Configuration
Located in `middleware/upload.js`

- Accepted formats: JPEG, JPG, PNG, GIF
- Max file size: 5MB
- Storage location: `uploads/` folder

## 📦 Dependencies

### Production Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **cors**: Enable CORS
- **multer**: File upload handling

### Development Dependencies
- **nodemon**: Auto-restart server on file changes

## 🛠️ Testing API

You can test the API using:
- **Postman**: Import and test all endpoints
- **Thunder Client**: VS Code extension
- **cURL**: Command-line testing

### Example: Add Project using cURL

```bash
curl -X POST http://localhost:5000/api/projects \
  -F "name=Modern House" \
  -F "description=Beautiful modern house design" \
  -F "image=@/path/to/image.jpg"
```

## 🔒 Security Features

- Input validation
- File type validation for uploads
- File size limits
- Error handling middleware
- CORS enabled for frontend integration

## 📚 Code Structure Explanation

### MVC Pattern
This backend follows the MVC (Model-View-Controller) architecture:

- **Models**: Define database schemas
- **Controllers**: Handle business logic
- **Routes**: Define API endpoints
- **Middleware**: Handle cross-cutting concerns

### Separation of Concerns
Each component has a single responsibility:
- Routes handle HTTP requests
- Controllers process data
- Models interact with database
- Middleware handles common tasks

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
ps aux | grep mongod

# Start MongoDB
mongod
```

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Upload Folder Missing
```bash
# Create uploads folder
mkdir uploads
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for learning and demonstration purposes.
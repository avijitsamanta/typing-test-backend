# Typing Speed Test (Server)

This is the backend of the Typing Speed Test application, built with Node.js, Express, and MongoDB.

## Features
- User authentication with JWT
- Save & retrieve typing test sessions
- Secure API with middleware for protected routes
- MongoDB with Mongoose ORM

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/avijitsamanta/typing-test-backend.git

2. Clone the repository:
   ```sh
   npm install

3. Create a .env file in the root directory and add the following variables:
   ```sh
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   JWT_SECRET=<your-secret-key>
   PORT=5000
   ```

4. Run the server:
   ```sh
   npm start
   ```

5. Open the application in your browser:
   ```sh
   http://localhost:5000
   ```   

6.api endpoints:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST    | /api/auth/signup | Sign up a new user |
| POST    | /api/auth/login | Login a user |
| GET    | /api/sessions | Get all sessions |
| GET    | /api/sessions/:id | Get a session by ID |
| POST   | /api/sessions | Create a new session |

Folder structure:
```
server/
│── models/        # Mongoose schemas (User, Session)
│── routes/        # API routes
│── middleware/    # Authentication middleware
│── config/        # Configurations (database)
│── server.js      # Entry point
│── .gitignore     # Ignoring node_modules
│── package.json   # Dependencies & scripts
│── README.md      # Documentation    
```         


# TicketEasy

TicketEasy is a web application that helps users plan events during their work holidays using the Ticketmaster API. The application features authentication, real-time notifications, advanced search functionality, and online payment integration.

## Tech Stack

- Frontend: React.js
- Backend: Express.js
- Databases: 
  - MongoDB (NoSQL)
  - SQLite (SQL)
- Authentication: JWT
- Real-time notifications: Socket.io
- Payment Integration: Stripe

## Project Structure

```
TicketEasy/
├── backend/               # Express.js server
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── utils/           # Utility functions
├── frontend/            # React application
│   ├── public/
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── services/    # API services
│       ├── utils/       # Utility functions
│       └── styles/      # CSS styles
```

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
4. Set up environment variables
5. Start the development servers:
   - Backend: `npm run dev`
   - Frontend: `npm start`

## Features

- User Authentication/Authorization
- Real-Time Event Notifications
- Advanced Search Functionality
- Holiday Event Planning
- Secure Payment Processing
- Responsive Design 

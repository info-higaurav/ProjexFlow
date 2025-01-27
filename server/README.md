# ProjexFlow Server

## Overview
ProjexFlow is an enterprise-grade project management system built with Node.js, Express, TypeScript, and MongoDB. This repository contains the backend server implementation.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Security**: bcrypt for password hashing

## Prerequisites
- Node.js (v16 or higher)
- MongoDB
- TypeScript
- npm or yarn package manager

## Project Structure
```
server/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middlewares/    # Custom middleware functions
├── routes/         # API route definitions
├── schema/         # Data validation schemas
├── services/       # Business logic
├── src/           # Application source code
├── utils/         # Utility functions
└── types/         # TypeScript type definitions
```

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.sample .env
   ```
   Update the `.env` file with your configuration values.

### Development
Run the development server with hot reload:
```bash
npm run dev
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:
```
PORT=your_port
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## API Documentation
The API endpoints are organized in the following structure:
- `/api/v1/auth` - Authentication routes
- `/api/v1/users` - User management
- `/api/v1/projects` - Project operations
- `/api/v1/tasks` - Task management

Detailed API documentation is available in the `/docs` directory.

## Code Style and Standards
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write unit tests for critical functionality
- Follow REST API best practices

## Security Measures
- JWT-based authentication
- Password hashing with bcrypt
- Input validation using Zod
- CORS protection
- Rate limiting
- Security headers

## Contributing
1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License
This project is licensed under the ISC License.

## Support
For support and questions, please contact the development team or create an issue in the repository.

---
Last Updated: January 27, 2025

# Authenticated Video Idea Tracker

A full-stack Node.js learning project for creating and managing private video ideas. The application demonstrates local user authentication, password hashing, MongoDB persistence, server-rendered views, and user-scoped CRUD operations.

## Background

The project was built to practice the core parts of an authenticated web application:

- Register users and store hashed passwords
- Authenticate users with email and password
- Maintain login state with sessions and Passport
- Create, view, update, and delete video ideas
- Associate each idea with the user who created it
- Protect application pages from unauthenticated access
- Render validation errors and status messages

This repository is a historical learning project. Its dependencies and security controls require modernization before production use.

## Application Flow

```text
Browser
   |
   v
Express routes
   |
   +--> Passport Local authentication
   |
   +--> bcrypt password verification
   |
   +--> Mongoose models --> MongoDB
   |
   v
Handlebars views
```

## Features

### Account Management

- User registration
- Duplicate-email detection
- Password confirmation
- Password hashing with bcrypt
- Email/password authentication
- Session-based login state
- Logout and flash messages

### Idea Management

- Authenticated idea dashboard
- Add a video idea with a title and details
- List ideas belonging to the current user
- Edit an existing idea
- Delete an idea
- Sort ideas by creation date
- Validate required fields

## Technologies

- JavaScript and Node.js
- Express
- MongoDB and Mongoose
- Passport Local Strategy
- bcrypt
- Express Session
- Express Handlebars
- Connect Flash
- Method Override
- HTML and CSS
- Git

## Repository Structure

```text
.
├── app.js
├── config
│   ├── database.js
│   └── passport.js
├── helpers
│   └── auth.js
├── models
│   ├── Idea.js
│   └── User.js
├── routes
│   ├── ideas.js
│   └── users.js
├── views
│   ├── ideas
│   ├── layouts
│   ├── partials
│   └── users
├── public
└── package.json
```

## Key Components

- `app.js`: Express configuration, database connection, sessions, Passport, flash messaging, routes, and server startup.
- `config/database.js`: Development and historical production MongoDB connection configuration.
- `config/passport.js`: Email/password authentication and bcrypt password comparison.
- `routes/users.js`: Registration, login, logout, validation, and password hashing.
- `routes/ideas.js`: Authenticated idea creation, listing, editing, and deletion.
- `models/User.js`: User identity and password schema.
- `models/Idea.js`: Video idea, ownership, and timestamp schema.
- `helpers/auth.js`: Authentication middleware.

## Skills Demonstrated

- Structuring a full-stack Express application
- Implementing local authentication with Passport
- Hashing and verifying passwords with bcrypt
- Modeling users and user-owned data with Mongoose
- Protecting routes with authentication middleware
- Implementing create, read, update, and delete workflows
- Handling form validation and flash messages
- Rendering dynamic content with Handlebars
- Separating routes, models, configuration, helpers, and views
- Managing a Node.js project with Git

## Local Setup

The project expects a MongoDB instance at the historical development URI:

```text
mongodb://localhost/vidjot-dev
```

The original workflow is:

```bash
npm install
npm start
```

The application listens on port `5000` unless `PORT` is supplied.

Because the dependencies are old, update and audit them before running the application on a modern system.

## Security and Modernization Notes

Do not deploy this repository unchanged.

- Move the database URI and session secret into protected environment variables.
- Replace the hard-coded session secret.
- Use a persistent production session store instead of the default memory store.
- Enable secure, HTTP-only, and appropriate SameSite cookie settings.
- Add CSRF protection, rate limiting, security headers, and centralized error handling.
- Require stronger passwords and normalize email addresses.
- Validate and sanitize all user input.
- Enforce ownership inside every update and delete database query, not only when rendering the edit page.
- Handle missing or malformed object identifiers safely.
- Add unique indexing for user email addresses.
- Update Node.js, Express, Mongoose, Passport, bcrypt, and all transitive dependencies.
- Replace deprecated database and logout APIs.
- Add automated tests for authentication, authorization, password handling, and CRUD operations.
- Use separate development, test, and production configuration.

## Portfolio Context

This project demonstrates practical understanding of identity, password security, sessions, authorization, database-backed CRUD operations, and server-rendered application architecture. A useful technical discussion is how the historical implementation works and how its authorization and session security should be strengthened for production.

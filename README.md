# Guestara Assignment

This repository contains the backend implementation for the Guestara assignment. The project is built with TypeScript and utilizes Prisma for database management. The main goal of this project is to demonstrate backend development skills, focusing on database interactions and RESTful API creation.


## Features

- TypeScript-based backend for type safety.
- Prisma ORM for database schema management and migrations.
- RESTful API endpoints for CRUD operations.
- Node.js environment with Express for handling HTTP requests.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js to build APIs.
- **TypeScript**: Superset of JavaScript providing static typing.
- **Prisma**: ORM (Object-Relational Mapping) for database operations.
- **Nodemon**: Tool for automatically restarting the server during development.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/wrritam/guestara-assignment.git
   cd guestara-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**
   Create a `.env` file in the root directory and add your environment-specific variables.
   ```bash
   PORT
   DATABASE_URL
   hiddenKey
   password

5. **Initialize the database:**
   Run the following Prisma commands to set up the database.
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Start the local Server:**
   ```bash
   npm start

This will start the server on the port specified in your environment variables and automatically reload on file changes.

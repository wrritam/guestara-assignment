# Guestara Assignment

This repository contains the backend implementation for the Guestara assignment. The project is built with TypeScript and utilizes Prisma for database management. The main goal of this project is to demonstrate backend development skills, focusing on database interactions and RESTful API creation.

Here's the live link - [Live deployed Link](https://guestara-assignment-8b02.onrender.com/)

Here's the Postman documentation - [Postman documentation](https://documenter.getpostman.com/view/21414570/2sAXjDfFrt)

Here's the loom video link explaining all the operations - [Loom](https://www.loom.com/share/c71f6dc8989c4eddac7b9a4ae798209b?sid=84af5cd8-739e-4fd0-9f14-c39c19428644)


## Features

- TypeScript-based backend for type safety.
- Prisma ORM for database schema management and migrations.
- RESTful API endpoints for CRUD operations.
- Node.js environment with Express for handling HTTP requests.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js to build APIs.
- **TypeScript**: Superset of JavaScript providing static typing.
- **Prisma**: ORM (Object-Relational Mapping) for database operations with AWS RDS postgres instance.
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

5. **Prisma setup and migration:**
   Run the following Prisma commands to set up the database.
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. **Start the local Server:**
   ```bash
   npm start

This will start the server on the port specified in your environment variables and automatically reload on file changes.

## Answers to the questions asked on the assignment

1. **Which database you have chosen and why?**
   
I chose to work with Prisma ORM for database operation with AWS RDS postgres instance. Because, Prisma provides an abstraction layer that simplifies database operations. It offers a declarative data modeling language (Prisma Schema) and automatically generates a type-safe query builder. This makes it easier to work with databases.
It also generates type-safe client code, meaning your queries are validated at compile-time. This can significantly reduce runtime errors and improve the developer experience, especially in TypeScript projects. Prisma is database-agnostic, meaning it supports multiple databases (PostgreSQL, MySQL, MongoDB, SQLite, etc.) with the same API. This can be beneficial if you plan to support multiple databases or switch databases in the future

2. **3 things that you learned from this assignment?**

- First, Exploring a New Tool: Loom
Working on this assignment introduced me to Loom, a tool I hadn’t used before. It was a great experience learning how to effectively communicate and present my work using Loom’s video recording features. This skill will be valuable for future presentations and code walkthroughs.

- Second, Deepening Prisma Knowledge
During the assignment, I had the opportunity to dive deeper into Prisma’s functionality, particularly some niche features. For example, I learned that you can create a distinct default function for a Prisma model, which adds flexibility and power to how models can be structured and managed within the database. This enhanced my understanding of Prisma and how it can be leveraged in more advanced scenarios.

- Third, Configuring AWS RDS
This project also gave me the opportunity to work with AWS RDS for the first time. I learned how to set up and configure a relational database in AWS, including aspects like security groups, database parameter groups, and connecting the database to my application. This experience expanded my cloud infrastructure skills and provided a solid foundation for using AWS RDS in future projects.

3. **What was the most difficult part of the assignment?**

The most challenging part of the assignment was configuring AWS RDS for the first time. Although I had experience with databases, setting up AWS RDS required me to navigate various cloud-specific concepts like security groups, parameter groups, and networking configurations. Ensuring that the database was securely accessible by my application while maintaining best practices for security and performance was particularly demanding. It took some time to understand how to properly configure these settings, but ultimately, overcoming this challenge significantly expanded my knowledge of cloud infrastructure and database management within the AWS ecosystem.

4. **What you would have done differently given more time?**

Given more time, I would have chosen to implement the project using GraphQL instead of traditional CRUD operations. This would have provided more flexibility and efficiency in handling complex queries and data relationships. Additionally, I would have explored deploying the database on an EC2 instance rather than using RDS, which would have allowed for greater control over the server environment and configurations.
 

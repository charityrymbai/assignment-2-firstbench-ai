# Assignment 2: Firstbench.ai

This project is a backend application that provides APIs for managing users, questions, and mock tests using TypeScript, Prisma ORM, MongoDB, and Express.

## Features
- **User Management**: Create user accounts with validation.
- **Question Management**: Add new questions with options and correct answers.
- **Mock Test Management**: Generate mock tests with unique questions per user.
- **Validation**: Input validation using Zod schemas.


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd assignment-2-firstbench.ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment:
   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL=mongodb_url
     ```

4. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

5. Apply Prisma migrations:
   ```bash
   npx prisma db push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### User Routes
- **Create User**: `POST /api/v1/user/create`
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Question Routes
- **Create Question**: `POST /api/v1/questions/create`
  ```json
  {
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "answerIndex": 1
  }
  ```

### Mock Test Routes
- **Create Mock Test**: `POST /api/v1/mocktest/create`
  ```json
  {
    "userId": "<user-id>"
  }
  ```

## Technologies Used
- **TypeScript**: For type safety.
- **Express**: For building RESTful APIs.
- **Prisma ORM**: For database interactions.
- **Zod**: For input validation.
- **MongoDB**: As the database.

Feel free to contribute or report issues!
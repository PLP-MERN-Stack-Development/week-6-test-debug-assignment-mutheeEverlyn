[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19902816&assignment_repo_type=AssignmentRepo)

# 🧪 Week 6: Testing and Debugging – Ensuring MERN App Reliability

This project implements comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, alongside essential debugging techniques.

## Implemented Features:

### 1. Testing Environment Setup
- **Jest Configuration**: Jest is configured for both client and server, enabling separate test environments and configurations.
- **React Testing Library & Supertest**: Integrated for client-side component testing and server-side API testing.
- **Test Database**: An in-memory MongoDB is set up for server integration tests, ensuring a clean testing environment.
- **Test Scripts**: `npm` scripts are added in the root `package.json` to easily run all tests, unit tests, integration tests, and end-to-end tests.

### 2. Unit Testing
- **Client-side Utilities**: Implemented a `math.js` utility with its corresponding unit tests.
- **React Components**: Includes a `Button.jsx` component and its unit tests.
- **Redux-like Store**: A basic Redux-like store with actions and a reducer, along with their unit tests, is implemented.
- **Custom Hooks**: A `useCounter` custom hook and its unit tests using `@testing-library/react` are included.
- **Express Middleware**: A `simpleLogger` middleware is developed with unit tests.
- **Code Coverage**: Jest is configured to report code coverage, aiming for a 70% threshold.

### 3. Integration Testing
- **API Endpoints (Server)**: A `Post` Mongoose model and comprehensive CRUD API endpoints are implemented. Integration tests for these endpoints using Supertest are available.
- **React Components with APIs (Client)**: A `PostsList` React component that fetches data from the API is implemented, along with its integration test using `jest-fetch-mock`.

### 4. End-to-End Testing
- **Cypress Setup**: Cypress is configured for end-to-end testing, with `cypress.config.js` and an `npm` script.
- **Critical User Flows**: A basic Cypress test verifies that the `PostsList` component correctly fetches and displays data from the server, including a database cleanup step for consistent testing.

### 5. Debugging Techniques
- **Server-side Logging**: The `simpleLogger` middleware is integrated into the Express server for request logging.
- **Error Boundaries (React)**: A React `ErrorBoundary` component is implemented to gracefully handle and display client-side JavaScript errors.
- **Global Error Handler (Express)**: A global error handling middleware is created and integrated into the Express server to centralize error responses.

## Getting Started:

To fully experience and test the implemented features, follow these steps:

1.  **Ensure Environment Variables**:
    Manually create the following two files in your `server/` directory:

    *   `server/.env`:
        ```
        MONGO_URI=mongodb://localhost:27017/mern_app_dev
        PORT=5000
        ```
    *   `server/.env.test`:
        ```
        MONGO_URI_TEST=mongodb://localhost:27017/mern_app_test
        PORT=5001
        ```

2.  **Install Dependencies**:
    Navigate to the root directory of the project and run:
    ```bash
    pnpm run install-all
    ```

3.  **Start Development Servers**:
    *   **Client**: Open a new terminal, navigate to the `client` directory, and run:
        ```bash
        pnpm start
        ```
    *   **Server**: Open another terminal, navigate to the `server` directory, and run:
        ```bash
        pnpm start
        ```

4.  **Run Tests**:
    From the root directory of your project, you can run the tests using the following commands:

    *   **All Tests**:
        ```bash
        pnpm test
        ```
    *   **Unit Tests Only**:
        ```bash
        pnpm run test:unit
        ```
    *   **Integration Tests Only**:
        ```bash
        pnpm run test:integration
        ```
    *   **End-to-End Tests Only**: (Ensure both client and server are running first)
        ```bash
        pnpm run test:e2e
        ```

This README provides a comprehensive overview of the testing and debugging strategies implemented in this MERN stack application.

5. Terminal Screenshots
![client](./screenshots/client%20terminal.JPG)
![server](./screenshots/server%20terminal.JPG)
![test](./screenshots/test%20terminal.JPG)
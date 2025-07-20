# Project: gemini-cli-react

## Overview
This is a React application demonstrating a registration form using Wired Elements for a cartoon-style UI. It allows users to enter and submit information, which will be saved in a database. An admin view page will display a list of registered users, with the ability to click on an item to view detailed user information.

## Key Technologies
- React (v19.1.0)
- Wired Elements (v3.0.0-rc.6)
- React Testing Library
- Jest
- Node.js (for backend)
- Express.js (for backend API)
- JSON file (simulated database)

## Project Structure
- `src/`: Contains all source code.
  - `src/App.js`: Main application component.
  - `src/App.css`: Global styles for the application.
  - `src/App.test.js`: Unit tests for the App component.
- `public/`: Static assets and `index.html`.

## Coding Conventions
- Follows standard React best practices.
- Functional components are preferred.
- CSS is organized in a single `App.css` file for this small project.

## Important Commands
- `npm start`: Starts the development server.
- `npm test`: Runs all unit tests.
- `npm run build`: Builds the app for production.

## Testing Guidelines
- Unit tests are written using React Testing Library and Jest.
- Tests are located in files named `*.test.js` alongside the components they test.
- Focus on testing user interactions and component rendering.

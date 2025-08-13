# Server-Side Architecture

This document provides an overview of the server-side architecture of the Event Talks App.

## Technologies Used

*   **Node.js:** The server is built using Node.js, a JavaScript runtime that allows for building scalable and efficient web applications.
*   **http module:** The built-in `http` module is used to create the HTTP server.
*   **fs module:** The built-in `fs` module is used to read files from the file system.
*   **path module:** The built-in `path` module is used to handle and transform file paths.

## Server Logic

The server is implemented in the `server.js` file. The main responsibilities of the server are:

1.  **Serving Static Files:** The server serves the static files for the application, including `index.html`, `styles.css`, and `script.js`.

2.  **Providing the Talks API:** The server exposes a single API endpoint, `/api/talks`, which returns the list of talks from the `talks.json` file.

## API Endpoints

*   `GET /api/talks`: Retrieves a list of all the talks in JSON format. The server reads the `talks.json` file and returns its content with a `Content-Type` of `application/json`.

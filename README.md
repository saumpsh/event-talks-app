# Event Talks App

A simple web application to display and search for talks at a tech conference.

## Features

*   **Dynamic Schedule:** The conference schedule is dynamically loaded from a JSON file.
*   **Search by Category:** Users can filter the talks by category using the search bar.
*   **Simple Interface:** A clean and intuitive user interface for browsing the event schedule.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Running the Application

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/saumpsh/event-talks-app.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd event-talks-app
    ```

3.  **Start the server:**
    ```bash
    node server.js
    ```

4.  **Open the application in your browser:**
    Navigate to `http://localhost:3010` in your web browser.

## Documentation

For detailed documentation, please see the [docs/index.md](./docs/index.md) file.

## How to Use

*   The main page displays the full schedule of talks for the conference.
*   To find talks on a specific topic, use the search bar at the top of the page to filter the schedule by category.

## API Endpoints

The application uses the following API endpoint:

*   `GET /api/talks`: Retrieves a list of all the talks in JSON format.

## Technologies Used

*   **Frontend:**
    *   HTML
    *   CSS
    *   JavaScript
*   **Backend:**
    *   Node.js

# Client-Side Architecture

This document provides an overview of the client-side architecture of the Event Talks App.

## Technologies Used

*   **HTML:** The structure of the web page is defined in `index.html`.
*   **CSS:** The application is styled using `styles.css`.
*   **JavaScript:** The client-side logic is implemented in `script.js`.

## Client-Side Logic

The client-side logic in `script.js` is responsible for the following:

1.  **Fetching Data:** When the page loads, the client fetches the list of talks from the `/api/talks` endpoint using the `fetch` API.

2.  **Rendering the Schedule:** The fetched talks are then dynamically rendered into the schedule container. The schedule is generated in a chronological order, with time slots calculated based on the duration of each talk.

3.  **Search Functionality:** The search bar allows users to filter the talks by category. An event listener on the search bar triggers a filtering function that updates the displayed schedule in real-time.

4.  **Time Formatting:** A helper function is used to format the start and end times of each talk in a user-friendly format.

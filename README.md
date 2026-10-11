# Notes REST API

## Overview

A simple REST API built with Node.js and Express.js to create, view, update, and delete notes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON for request and response data
- In-memory array for storage

## Features

- Retrieve all notes
- Retrieve a note by ID
- Create a new note
- Update an existing note
- Delete a note
- Validate required fields
- Handle missing notes with a 404 response

## Setup Instructions

1. Install Node.js and npm.
2. Open the project folder in Terminal.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node server.js`

5. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/notes`     | Get all notes    |
| GET    | `/notes/:id` | Get a note by ID |
| POST   | `/notes`     | Create a note    |
| PUT    | `/notes/:id` | Update a note    |
| DELETE | `/notes/:id` | Delete a note    |

## Example POST Request

```json
{
  "title": "My Note",
  "content": "This is an example note."
}
```

## Storage

Notes are stored in an in-memory array. Data resets when the server restarts.

## Author

Indu R

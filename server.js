const express = require("express");

// Create an Express application.
const app = express();

// Allow the server to read JSON data sent in requests.
app.use(express.json());

// Choose the port where our API will run.
const PORT = 3000;

// Store notes in an array while the server is running.
let notes = [
  {
    id: 1,
    title: "My first note",
    content: "Learning REST APIs with Express.",
  },
];

// Generate unique IDs for new notes.
let nextId = 2;

// A simple test endpoint to check whether the API is running.
app.get("/", (req, res) => {
  res.send("Welcome to the Notes REST API!");
});

// Get all notes.
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Get a single note by its ID.
app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

// Create a new note.
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  // Make sure both fields are provided.
  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  // Create the note and assign it a unique ID.
  const newNote = {
    id: nextId++,
    title,
    content,
  };

  // Save the note in our in-memory array.
  notes.push(newNote);

  // Return the created note with HTTP status 201.
  res.status(201).json(newNote);
});

// Create a new note.
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  // Check that both fields are provided.
  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  // Create a note with a unique ID.
  const newNote = {
    id: nextId++,
    title,
    content,
  };

  // Store the note in the array.
  notes.push(newNote);

  // Return the new note with status 201.
  res.status(201).json(newNote);
});

// Update an existing note by its ID.
app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  // Return an error if the note does not exist.
  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  const { title, content } = req.body;

  // Update only the fields provided.
  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;

  res.json(note);
});

// Delete a note by its ID.
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  // Find the position of the note in the array.
  const noteIndex = notes.findIndex((note) => note.id === id);

  // Return an error if the note does not exist.
  if (noteIndex === -1) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  // Remove the note from the array.
  notes.splice(noteIndex, 1);

  // Confirm successful deletion.
  res.json({ message: "Note deleted successfully" });
});

// Start the server and listen for incoming requests.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const axios = require('axios');
const Note = require('../models/Note');
const router = express.Router();

// Create note with cat fact
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  try {
    const catRes = await axios.get('https://catfact.ninja/fact');
    const catfact = catRes.data.fact;

    const newNote = new Note({ title, content, catfact });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create note', error: err.message });
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching notes' });
  }
});

// Search notes
router.get('/search', async (req, res) => {
  const { q } = req.query;
  const regex = new RegExp(q, 'i');

  try {
    const notes = await Note.find({
      $or: [
        { title: regex },
        { content: regex },
        { catfact: regex }
      ]
    });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Search error' });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
});

module.exports = router;

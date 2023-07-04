const express = require('express');
const app = express();
const port = 3000;

const { initializeDB } = require('./config/db-config');
const { Library } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.end();
});

app.get('/library', (req, res) => {
  res.end();
});

app.post('/library', async (req, res) => {
  try {
    const newLibrary = await Library.create(req.body);
    res.status(201).json(newLibrary);
  } catch (err) {
    console.error("Error when creating library", err);
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
});

app.listen(port, async () => {
  await initializeDB();
  console.log(`LibraryAPI listening on port ${port}`);
});
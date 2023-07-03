const express = require('express');
const app = express();
const port = 3000;

const { initializeDB } = require('./config/db-config');

app.get('/', (req, res) => {
  res.end();
});

app.get('/library', (req, res) => {
  res.end();
});

app.listen(port, async () => {
  await initializeDB();
  console.log(`LibraryAPI listening on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Working!');
});

app.get('/library', (req, res) => {
  res.send(`${req.method} ${req.url}`);
});

app.listen(port, () => {
  console.log(`LibraryAPI listening on port ${port}`);
});
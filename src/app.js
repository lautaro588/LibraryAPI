const express = require('express');
const app = express();
const port = 3000;

const { initializeDB } = require('./config/db-config');
const seed = require('./seed');

const { library, book, user } = require('./routes');

app.use(express.json());

app.get('/', (req, res) => {
  res.end();
});

app.use('/library', library);
app.use('/book', book);
app.use('/user', user);

app.listen(port, async () => {
  await initializeDB();
  await seed();
  console.log(`LibraryAPI listening on port ${port}`);
});
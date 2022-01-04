// index.js

const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});


app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
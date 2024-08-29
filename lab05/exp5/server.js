const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [
  { id: 1, title: 'Book One', author: 'Author One', year: 2001 },
  { id: 2, title: 'Book Two', author: 'Author Two', year: 2002 }
];

// GET /books: Retrieve a list of all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET /books/:id: Retrieve a book by its ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.status(200).json(book);
});

// POST /books: Add a new book
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) return res.status(400).json({ error: 'Invalid request body' });
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id: Update an existing book by its ID
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });

  const { title, author, year } = req.body;
  if (!title || !author || !year) return res.status(400).json({ error: 'Invalid request body' });

  book.title = title;
  book.author = author;
  book.year = year;
  res.status(200).json(book);
});

// DELETE /books/:id: Delete a book by its ID
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ error: 'Book not found' });

  books.splice(bookIndex, 1);
  res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

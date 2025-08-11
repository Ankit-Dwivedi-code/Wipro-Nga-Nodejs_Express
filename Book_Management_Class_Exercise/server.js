import express from 'express';
import 'dotenv/config';
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from './services/bookService.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Book Management API' });
});

// Create book
app.post('/books', async (req, res) => {
  try {
    const newBook = req.body;
    await addBook(newBook);
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add book' });
  }
});

// Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Get book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await getBookById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

// Update book
app.put('/books/:id', async (req, res) => {
  try {
    await updateBook(req.params.id, req.body);
    res.json({ message: 'Book updated successfully', updatedData: req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
});

// Delete book
app.delete('/books/:id', async (req, res) => {
  try {
    await deleteBook(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

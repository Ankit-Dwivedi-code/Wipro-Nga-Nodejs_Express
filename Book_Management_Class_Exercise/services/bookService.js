import fs from 'fs/promises';
import { EventEmitter } from 'events';
import 'dotenv/config';

const filePath = process.env.PATH_TO_BOOKS_JSON;

// Event emitter for logging actions
const bookEvents = new EventEmitter();

bookEvents.on('bookAdded', () => console.log('✅ Book Added'));
bookEvents.on('bookUpdated', () => console.log('✏️ Book Updated'));
bookEvents.on('bookDeleted', () => console.log('🗑️ Book Deleted'));

// Read books from JSON file
const readBooks = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading books:', err);
    return [];
  }
};

// Write books to JSON file
const writeBooks = async (books) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  } catch (err) {
    console.error('Error writing books:', err);
  }
};

// Add a new book
const addBook = async (book) => {
  try {
    const books = await readBooks();
    books.push(book);
    await writeBooks(books);
    bookEvents.emit('bookAdded');
  } catch (err) {
    console.error('Error adding book:', err);
  }
};

// Delete a book by ID
const deleteBook = async (id) => {
  try {
    const books = await readBooks();
    const updatedBooks = books.filter((book) => book.id !== id);
    await writeBooks(updatedBooks);
    bookEvents.emit('bookDeleted');
  } catch (err) {
    console.error('Error deleting book:', err);
  }
};

// Get a book by ID
const getBookById = async (id) => {
  try {
    const books = await readBooks();
    return books.find((book) => book.id === id);
  } catch (err) {
    console.error('Error getting book:', err);
    return null;
  }
};

// Get all books
const getAllBooks = async () => {
  return await readBooks();
};

// Update a book by ID
const updateBook = async (id, updatedBook) => {
  try {
    const books = await readBooks();
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      await writeBooks(books);
      bookEvents.emit('bookUpdated');
    }
  } catch (err) {
    console.error('Error updating book:', err);
  }
};

export { addBook, deleteBook, getBookById, getAllBooks, updateBook };

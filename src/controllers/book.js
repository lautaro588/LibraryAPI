const { bookService } = require("../services");

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ action: 'Create book', error: err.message });
    }
};

const getBooks = async (req, res) => {
    try {
        const books = await bookService.getBooks();
        res.json(books);
    } catch (err) {
        res.status(500).json({ action: 'Get books', error: err.message });
    }
};

const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.id);
        book ? res.json(book) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Get book', error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const updatedBook = await bookService.updateBook(req.params.id, req.body);
        updatedBook ? res.json(updatedBook) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: "Update book", error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const deleteBook = await bookService.deleteBook(req.params.id);
        deleteBook ? res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: "Delete book", error: err.message });
    }
};

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };
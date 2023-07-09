const { bookProvider } = require("../providers");

const createBook = async (book) => await bookProvider.createBook(book);
const getBooks = async () => await bookProvider.getBooks();
const getBook = async (id) => await bookProvider.getBook(id);
const updateBook = async (id, newValues) => await bookProvider.updateBook(id, newValues);
const deleteBook = async (id) => await bookProvider.deleteBook(id);

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };
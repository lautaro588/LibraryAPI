const { Book } = require("../models");

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return await Book.findByPk(newBook.id);
    } catch (err) {
        console.error("Error when creating book.", err.message);
        throw err;
    }
};

const getBooks = async () => {
    try {
        return await Book.findAll();
    } catch (err) {
        console.error("Error when fetching books.", err.message);
        throw err;
    }
};

const getBook = async (id) => {
    try {
        return await Book.findByPk(id);
    } catch (err) {
        console.error("Error when fetching book.", err.message);
        throw err;
    }
}

const updateBook = async (id, newValues) => {
    try {
        await Book.update(newValues, { where: { id } });
        return await Book.findByPk(id);
    } catch (err) {
        console.error("Error when updating book.", err.message);
        throw err;
    }
}

const deleteBook = async (id) => {
    try {
        return await Book.destroy({ where: { id } });
    } catch (err) {
        console.error("Error when deleting book.", err.message);
        throw err;
    }
}

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };
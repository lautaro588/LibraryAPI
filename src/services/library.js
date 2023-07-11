const { libraryProvider } = require("../providers");

const createLibrary = async (library) => await libraryProvider.createLibrary(library);
const getLibraries = async () => await libraryProvider.getLibraries();
const getLibrary = async (id) => await libraryProvider.getLibrary(id);
const updateLibrary = async (id, newValues) => await libraryProvider.updateLibrary(id, newValues);
const deleteLibrary = async (id) => await libraryProvider.deleteLibrary(id);
const createBook = async (book, libraryId) => await libraryProvider.createBook(book, libraryId);

module.exports = { createLibrary, getLibraries, getLibrary, updateLibrary, deleteLibrary, createBook };
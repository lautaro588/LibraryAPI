const { libraryProvider } = require("../providers");

const createLibrary = async (library) => await libraryProvider.createLibrary(library);
const getLibraries = async () => await libraryProvider.getLibraries();
const getLibrary = async (id) => await libraryProvider.getLibrary(id);

module.exports = { createLibrary, getLibraries, getLibrary };
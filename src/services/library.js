const { libraryProvider } = require("../providers");

const createLibrary = async (library) => await libraryProvider.createLibrary(library);
const getLibraries = async () => await libraryProvider.getLibraries();

module.exports = { createLibrary, getLibraries };
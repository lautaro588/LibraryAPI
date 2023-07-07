const { Library } = require("../models");

const createLibrary = async (library) => {
    try {
        return await Library.create(library);
    } catch (err) {
        console.error("Error when creating library.", err.message);
        throw err;
    }
};

const getLibraries = async () => {
    try {
        return await Library.findAll();
    } catch (err) {
        console.error("Error when fetching libraries.", err.message);
        throw err;
    }
};

const getLibrary = async (id) => {
    try {
        return await Library.findByPk(id);
    } catch (err) {
        console.error("Error when fetching library.", err.message);
        throw err;
    }
}

module.exports = { createLibrary, getLibraries, getLibrary };
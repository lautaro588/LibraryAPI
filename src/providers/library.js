const { Library } = require("../models");

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return await Library.findByPk(newLibrary.id);
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

const updateLibrary = async (id, newValues) => {
    try {
        await Library.update(newValues, { where: { id } });
        return await Library.findByPk(id);
    } catch (err) {
        console.error("Error when updating library.", err.message);
        throw err;
    }
}

const deleteLibrary = async (id) => {
    try {
        return await Library.destroy({ where: { id } });
    } catch (err) {
        console.error("Error when deleting library.", err.message);
        throw err;
    }
}

module.exports = { createLibrary, getLibraries, getLibrary, updateLibrary, deleteLibrary };
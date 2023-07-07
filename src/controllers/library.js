const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.status(201).json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: 'Create library', error: err.message });
    }
};

const getLibraries = async (req, res) => {
    try {
      const libraries = await libraryService.getLibraries();
      res.json(libraries);
    } catch (err) {
      res.status(500).json({ action: 'Get libraries', error: err.message });
    }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.id);
    library ? res.json(library) : res.status(404).end();
  } catch (err) {
    res.status(500).json({ action: 'Get library', error: err.message });
  }
};

module.exports = { createLibrary, getLibraries, getLibrary };
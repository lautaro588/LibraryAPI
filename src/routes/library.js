const express = require('express');
const router = express.Router();

const { libraryController } = require("../controllers");

router.route('/')
    .get(libraryController.getLibraries)
    .post(libraryController.createLibrary);

router.route('/:id')
    .get(libraryController.getLibrary)
    .put(libraryController.updateLibrary)
    .delete(libraryController.deleteLibrary);

module.exports = router;
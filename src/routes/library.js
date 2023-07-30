const express = require('express');
const router = express.Router();

const { libraryController } = require("../controllers");

const authenticate = require('../middleware/auth');

router.route('/')
    .get(libraryController.getLibraries)
    .post(authenticate, libraryController.createLibrary);

router.route('/:id')
    .get(libraryController.getLibrary)
    .put(authenticate, libraryController.updateLibrary)
    .delete(authenticate, libraryController.deleteLibrary);

router.post('/:id/book', authenticate, libraryController.createBook);

module.exports = router;
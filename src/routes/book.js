const express = require('express');
const router = express.Router();

const { bookController } = require("../controllers");

const authenticate = require('../middleware/auth');

router.route('/')
    .get(bookController.getBooks)
    .post(authenticate, bookController.createBook);

router.route('/:id')
    .get(bookController.getBook)
    .put(authenticate, bookController.updateBook)
    .delete(authenticate, bookController.deleteBook);

module.exports = router;
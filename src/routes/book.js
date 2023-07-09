const express = require('express');
const router = express.Router();

const { bookController } = require("../controllers");

router.route('/')
    .get(bookController.getBooks)
    .post(bookController.createBook);

router.route('/:id')
    .get(bookController.getBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router;
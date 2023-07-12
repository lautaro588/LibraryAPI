const Library = require("./library");
const Book = require("./book");

Library.hasMany(Book, { as: 'books', foreignKey: 'library' });
Book.belongsTo(Library, { foreignKey: 'library' });

module.exports = { Library, Book };
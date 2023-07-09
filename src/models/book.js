const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  titulo: DataTypes.STRING,
  autor: DataTypes.STRING,
  year: DataTypes.STRING,
  library: DataTypes.INTEGER
});

module.exports = Book;
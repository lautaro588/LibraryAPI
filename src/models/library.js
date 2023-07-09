const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Library = sequelize.define('Library', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: DataTypes.STRING,
  telefono: DataTypes.STRING
});

module.exports = Library;
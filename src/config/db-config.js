const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
  define: {
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt']
      }
    }
  }
});

const initializeDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection to database established successfully.');
      await sequelize.sync({ alter: true });
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, initializeDB };
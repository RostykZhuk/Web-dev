const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // Название БД
  'postgres', // Пользователь
  'root', // ПАРОЛЬ
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

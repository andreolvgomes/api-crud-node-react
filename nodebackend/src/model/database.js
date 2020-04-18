var Sequelize = require('sequelize');

const sequelize = new Sequelize('dbcrud', 'adm', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
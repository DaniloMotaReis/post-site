const Sequelize = require('sequelize');

const sequelize = new Sequelize('postapp','testepots','teste123',{
    host: "db4free.net",
    port: "3306",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
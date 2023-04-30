const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql10614849','sql10614849','WuqWKvXEQ5',{
    host: "sql10.freemysqlhosting.net",
    port: "3306",
    dialect: 'mysql'
});

/*const sequelize = new Sequelize('postapp','root','root',{
    host: "localhost",
    port: "3306",
    dialect: 'mysql'
});*/

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
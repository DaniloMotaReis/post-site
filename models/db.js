const Sequelize = require('sequelize');

const sequelize = new Sequelize('epiz_34100737_postapp','epiz_34100737','B77qVV9ztCtr',{
    host: "sql304.epizy.com",
    port: "3306",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
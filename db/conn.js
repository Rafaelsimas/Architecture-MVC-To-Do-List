const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc2', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'//Qual banco eu quero integrar
})//Aqui vem o banco que precisa existir

try {
    sequelize.authenticate()
    console.log('(MYSQL) DATABASE CONNECTED SUCCESSFULLY WITH (SEQUELIZE)');
} catch (error) {
    console.log('UNABLE TO CONNECT TO DATABASE: ', error);
}

module.exports = sequelize
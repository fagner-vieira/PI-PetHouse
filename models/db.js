const Sequelize = require("sequelize");

//criando conexão com o banco de dados
const sequelize = new Sequelize("mydb_PI", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

//função esta verificando se a conexão com o banco esta sendo executada!
sequelize
  .authenticate()
  .then(() => {
    console.log("sucess");
  })
  .catch(() => {
    console.log("error");
  });

module.exports = sequelize;

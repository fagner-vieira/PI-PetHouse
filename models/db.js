const Sequelize = require("sequelize");

//criando conexão com o banco de dados
const sequelize = new Sequelize("animal-e-pi", "root", "Senha123", {
  host: "localhost",
  dialect: "mysql"
});

//função esta verificando se a conexão com o banco esta sendo executada!
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão no banco realizado com sucesso!");
  })
  .catch((erro) => {
    console.log("error", erro);
  });

module.exports = sequelize;

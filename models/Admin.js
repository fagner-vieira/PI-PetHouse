module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      nome: DataTypes.STRING,
      funcao: DataTypes.STRING,
      matricula_colaborador: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      tableName: "administrador",
      timestamp: false,
    }
  );
  return Admin;
};

module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define("Carrinho", {
    quantidade: DataTypes.NUMBER,
    
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,

    fk_produtos: DataTypes.INTEGER,
    fk_pedido: DataTypes.INTEGER 
 }, {
     tableName: 'Carrinho',
     timestamp: true
 })
     return Carrinho;
 };
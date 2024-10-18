'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Associação Many-to-Many com Produto
      this.belongsToMany(models.Produto, { through: 'produto_tag', foreignKey: 'tagId' });
    }
  }

  Tag.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};
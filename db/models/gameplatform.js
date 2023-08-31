'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamePlatform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamePlatform.init({
    game_id: DataTypes.INTEGER,
    platform_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GamePlatform',
  });
  return GamePlatform;
};
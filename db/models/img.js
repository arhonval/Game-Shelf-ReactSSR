"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game }) {
      // define association here
      this.belongsTo(Game, { foreignKey: "game_id" });
    }
  }
  Img.init(
    {
      url: DataTypes.STRING,
      game_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Img",
    }
  );
  return Img;
};

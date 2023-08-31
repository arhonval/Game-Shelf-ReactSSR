"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Img, Platform, GamePlatform, Like, User }) {
      // define association here
      this.hasMany(Comment, { foreignKey: "game_id" });
      this.hasMany(Img, { foreignKey: "game_id" });
      this.belongsToMany(Platform, {
        through: GamePlatform,
        foreignKey: "game_id",
      });
      this.belongsToMany(User, {
        through: Like,
        foreignKey: "game_id",
      });
    }
  }
  Game.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      date: DataTypes.STRING,
      genre: DataTypes.STRING,
      main_img: DataTypes.STRING,
      video: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game, GamePlatform }) {
      // define association here
      this.belongsToMany(Game, {
        through: GamePlatform,
        foreignKey: "platform_id",
      });
    }
  }
  Platform.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Platform",
    }
  );
  return Platform;
};

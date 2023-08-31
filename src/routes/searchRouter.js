const searchRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const { Op } = require("sequelize");
const GamesList = require("../views/components/GamesList");
const { Game, Platform } = require("../../db/models");

searchRouter.get("/:search", async (req, res) => {
  const { login } = req.session;
  const { search } = req.params;
  try {
    const platforms = await Platform.findAll({ raw: true });
    const games = await Game.findAll({
      where: { title: { [Op.iLike]: `%${search}%` } },
      raw: true,
    });
    renderTemplate(GamesList, { games, login, platforms }, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = searchRouter;

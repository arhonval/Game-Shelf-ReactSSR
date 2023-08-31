const platformsRouter = require("express").Router();
const PlatformsList = require("../views/components/PlatformsList");
const GamesList = require("../views/components/GamesList");
const renderTemplate = require("../lib/renderTemplate");
const { Platform, Game } = require("../../db/models");
const { checkUser } = require("../middlewares/checkUsers");

platformsRouter.get("/", checkUser, async (req, res) => {
  const { login } = req.session;
  try {
    const platforms = await Platform.findAll({ raw: true });
    renderTemplate(PlatformsList, { platforms, login }, res);
  } catch (error) {
    res.send(error);
  }
});

platformsRouter.get("/:id", checkUser, async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const platforms = await Platform.findAll({ raw: true });
    const platform = await Platform.findByPk(id, {
      include: [Game],
    });
    const platformNoMeta = platform.get({ plain: true });
    console.log("platform:", platformNoMeta);
    const games = platformNoMeta.Games;
    renderTemplate(GamesList, { games, login, platforms }, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = platformsRouter;

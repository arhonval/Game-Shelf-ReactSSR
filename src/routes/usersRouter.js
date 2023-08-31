const usersRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const GamesList = require('../views/components/GamesList');
const {User, Game, Platform} = require('../../db/models');

usersRouter.get("/:login", async (req, res) => {
  const { login } = req.session;
  try {
    const platforms = await Platform.findAll({ raw: true });
    const user = await User.findOne({ where: { login }, include: [Game] });
    const userNoMeta = user.get({ plain: true });
    const games = userNoMeta.Games;
    renderTemplate(GamesList, { games, login, platforms }, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = usersRouter;

const gamesRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const ShowGame = require("../views/components/ShowGame");
const { Platform, Game, Img, User, Comment, Like } = require("../../db/models");
const { checkUser } = require("../middlewares/checkUsers");

gamesRouter.get("/:id", checkUser, async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const comments = await Comment.findAll({
      where: { game_id: id },
      include: [User],
    });
    const commentsNoMeta = comments.map((el) => el.get({ plain: true }));
    const platforms = await Platform.findAll({ raw: true });
    const game = await Game.findByPk(id, { include: [Platform, Img] });
    const gameNoMeta = game.get({ plain: true });
    const imgs = gameNoMeta.Imgs;
    const user = await User.findOne({ where: { login }, raw: true });
    const like = await Like.findOne({
      where: { user_id: user.id, game_id: gameNoMeta.id },
      raw: true,
    });
    console.log("like:", like);
    renderTemplate(
      ShowGame,
      { gameNoMeta, imgs, login, platforms, commentsNoMeta, like },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

gamesRouter.post("/:id/comment", checkUser, async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    console.log("user:", user);
    const newComment = await Comment.create({
      body: comment,
      user_id: user.id,
      game_id: id,
    });
    console.log("newComment:", newComment);
    res.json({ newComment, login });
  } catch (error) {
    res.send(error);
  }
});

module.exports = gamesRouter;

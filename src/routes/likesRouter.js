const likesRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const ShowGame = require("../views/components/ShowGame");
const { Platform, Game, Img, User, Comment, Like } = require("../../db/models");
const { checkUser } = require("../middlewares/checkUsers");

likesRouter.post("/:id", async (req, res) => {
  console.log("tut");
  const { login } = req.session;
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { login }, raw: true });
    console.log("user:", user);
    const like = await Like.create({ user_id: user.id, game_id: id });
    console.log("like:", like);
    res.json({ msg: "Уже в избранном" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = likesRouter;

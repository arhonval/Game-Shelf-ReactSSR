const { checkUser } = require("../middlewares/checkUsers");

const logoutRouter = require("express").Router();

logoutRouter.get("/", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("GameShelf");
    res.redirect("/");
  });
});

module.exports = logoutRouter;

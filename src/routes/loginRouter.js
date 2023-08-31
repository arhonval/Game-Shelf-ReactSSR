const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Login = require("../views/components/Login");
const renderTemplate = require("../lib/renderTemplate");
const { User } = require("../../db/models");
const { secureRoutes } = require("../middlewares/checkUsers");

loginRouter.get("/", secureRoutes, (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRouter.post("/", secureRoutes, async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.moder = user.isModer;
        req.session.save(() => {
          res.json({ msg: "Авторизация успешна" });
        });
      } else {
        res.json({ err: "Неверный пароль" });
      }
    } else {
      res.json({ err: "Неверный логин" });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = loginRouter;

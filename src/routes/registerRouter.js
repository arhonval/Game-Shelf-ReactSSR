const registerRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Registrate = require("../views/components/Registrate");
const renderTemplate = require("../lib/renderTemplate");
const { User } = require("../../db/models");
const { secureRoutes } = require("../middlewares/checkUsers");

registerRouter.get("/", secureRoutes, (req, res) => {
  renderTemplate(Registrate, {}, res);
});

registerRouter.post("/", secureRoutes, async (req, res) => {
  const { email, login, password } = req.body;
  try {
    const userByEmail = await User.findOne({ where: { email } });
    if (userByEmail) {
      res.json({ err: "Данная почта уже занята" });
    } else {
      const userByLogin = await User.findOne({ where: { login } });
      if (userByLogin) {
        res.json({ err: "Данный логин уже занят" });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          email,
          login,
          password: hash,
          isModer: false,
        });
        req.session.login = newUser.login;
        req.session.moder = newUser.isModer;
        req.session.save(() => {
          res.json({ msg: "Пользователь зарегистрирован" });
        });
      }
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = registerRouter;

const indexRouter = require("express").Router();
const Main = require("../views/components/Main");
const renderTemplate = require("../lib/renderTemplate");
const { secureRoutes } = require("../middlewares/checkUsers");

indexRouter.get("/", secureRoutes, (req, res) => {
  renderTemplate(Main, {}, res);
});

module.exports = indexRouter;

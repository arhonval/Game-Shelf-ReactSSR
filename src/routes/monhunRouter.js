const monhunRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const { Platform } = require("../../db/models");
const Monhun = require("../views/components/Monhun");

monhunRouter.get("/", async (req, res) => {
  const { login } = req.session;
  try {
    const platforms = await Platform.findAll({ raw: true });
    renderTemplate(Monhun, { login, platforms }, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = monhunRouter;

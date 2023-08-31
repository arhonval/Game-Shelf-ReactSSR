const contactsRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Contacts = require("../views/components/Contacts");
const { Platform } = require("../../db/models");

contactsRouter.get("/", async (req, res) => {
  const { login } = req.session;
  try {
    const platforms = await Platform.findAll({ raw: true });
    renderTemplate(Contacts, { login, platforms }, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = contactsRouter;

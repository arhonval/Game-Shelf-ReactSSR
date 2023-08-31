function checkUser(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect("/");
  }
}

function secureRoutes(req, res, next) {
  if (!req.session.login) {
    next();
  } else {
    res.redirect("/platforms");
  }
}

module.exports = { checkUser, secureRoutes };

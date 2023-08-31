require("dotenv").config();
require("@babel/register");

const express = require("express");
const morgan = require("morgan");
const ws = require("ws");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const checkConnect = require("./src/middlewares/dbCheck");
const indexRouter = require("./src/routes/indexRouter");
const registerRouter = require("./src/routes/registerRouter");
const loginRouter = require("./src/routes/loginRouter");
const platformsRouter = require("./src/routes/platformsRouter");
const gamesRouter = require("./src/routes/gamesRouter");
const { secureRoutes, checkUser } = require("./src/middlewares/checkUsers");
const logoutRouter = require("./src/routes/logoutRouter");
const contactsRouter = require("./src/routes/contactsRouter");
const searchRouter = require("./src/routes/searchRouter");
const likesRouter = require("./src/routes/likesRouter");
const usersRouter = require("./src/routes/usersRouter");
const monhunRouter = require("./src/routes/monhunRouter");

const app = express();
const PORT = process.env.PORT ?? 3000;
checkConnect();

const sessionConfig = {
  name: "GameShelf",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public/")));
app.use(session(sessionConfig));

app.use("/", indexRouter);
app.use("/registrate", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/contacts", contactsRouter);
app.use("/platforms", platformsRouter);
app.use("/search", searchRouter);
app.use("/games", gamesRouter);
app.use("/likes", likesRouter);
app.use("/users", usersRouter);
app.use("/monhun", checkUser, monhunRouter);

const server = app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

const wsServer = new ws.WebSocketServer({ server });

wsServer.on("connection", (client) => {
  console.log("Есть контакт!");

  client.on("message", (data) => {
    const clientMessage = JSON.parse(data.toString("utf-8"));

    const messageToClient = {
      // userId: clientMessage.userId,
      // clients: wsServer.clients.size,
      login: clientMessage.login,
      clientMessage: clientMessage.newComment.body,
    };

    wsServer.clients.forEach((oneClient) => {
      oneClient.send(JSON.stringify(messageToClient));
    });
  });
});

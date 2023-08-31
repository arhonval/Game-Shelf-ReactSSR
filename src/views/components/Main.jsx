const React = require("react");
const Layout = require("../Layout");

module.exports = function Main() {
  return (
    <Layout>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/games.mp4" type="video/mp4" />
      </video>
      <div className="px-4 py-5 my-5 text-center content">
        <h1 className="display-5 fw-bold text-white">Game Shelf</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Добро пожаловать в Game Shelf! Не знаешь, во что хочешь поиграть?
            Или хочешь узнать больше интересных игр? Тогда ты по адрессу!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/login">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Войти
              </button>
            </a>
            <a href="/registrate">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Зарегистрироваться
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

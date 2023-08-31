const React = require("react");
const Layout = require("../Layout");

module.exports = function Registrate() {
  return (
    <Layout>
      <script defer src="/js/register.js" />
      <main className="form-signin w-25 m-auto">
        <form name="regForm">
          <h1 className="h3 mb-3 fw-normal">Зарегистрироваться</h1>
          <br />
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label htmlFor="floatingInput">Почта</label>
          </div>
          <br />
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="login"
              name="login"
            />
            <label htmlFor="floatingInput">Логин</label>
          </div>
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>
          <br />
          <button className="btn btn-primary w-100 py-2" type="submit">
            Отправить
          </button>
        </form>
      </main>
    </Layout>
  );
};

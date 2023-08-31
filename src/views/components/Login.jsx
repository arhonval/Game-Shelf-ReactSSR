const React = require("react");
const Layout = require("../Layout");

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <main className="form-signin w-25 m-auto">
        <form name="loginForm">
          <h1 className="h3 mb-3 fw-normal">Войти в учетную запись</h1>
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
            Войти
          </button>
        </form>
      </main>
    </Layout>
  );
};

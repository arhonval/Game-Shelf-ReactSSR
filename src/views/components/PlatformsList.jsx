const React = require("react");
const Layout = require("../Layout");

module.exports = function PlatformsList({ platforms, login }) {
  return (
    <Layout login={login} platforms={platforms}>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{`Привет, ${login}!`}</h1>
            <p className="lead text-body-secondary">
              Добро пожаловать в Game Shelf!
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {platforms.map((el) => (
              <a href={`/platforms/${el.id}`}>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src={el.img}
                      alt="img"
                      height="250"
                    />
                    <div className="card-body">
                      <p className="card-text">{el.name}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

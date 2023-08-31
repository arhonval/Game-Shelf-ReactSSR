const React = require("react");
const Layout = require("../Layout");

module.exports = function GamesList({ games, login, platforms }) {
  return (
    <Layout login={login} platforms={platforms}>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {games.length ? (
              games.map((el) => (
                <a href={`/games/${el.id}`}>
                  <div className="col h-50 w-75">
                    <div className="card shadow-sm">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src={el.main_img}
                        alt="img"
                        height="250"
                      />
                      <div className="card-body">
                        <p className="card-text">{el.title}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div>Здесь могла быть ваша реклама</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

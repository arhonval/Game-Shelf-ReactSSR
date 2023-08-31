const React = require('react');
const Layout = require('../Layout');

module.exports = function ShowGame({
  gameNoMeta,
  imgs,
  login,
  platforms,
  commentsNoMeta,
  like,
}) {
  return (
    <Layout login={login} platforms={platforms}>
      <script defer src="/js/comment.js" />
      <script defer src="/js/like.js" />
      <div className="container col-xxl-8 px-4 py-5 mb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={gameNoMeta.main_img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {gameNoMeta.title}
            </h1>
            <div className="like">
              {like ? (
                <div>Уже в избранном</div>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning"
                  data-like={gameNoMeta.id}
                >
                  Добавить в избранное
                </button>
              )}
            </div>
            <p className="lead">{`Платформа: ${gameNoMeta.Platforms[0].name}`}</p>
            <br />
            <p className="lead">{`Жанр: ${gameNoMeta.genre}`}</p>
            <br />
            <p className="lead">{`Дата выхода: ${gameNoMeta.date}`}</p>
            <br />
            <p className="lead">{gameNoMeta.description}</p>
          </div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={gameNoMeta.main_img}
                  className="d-block w-100"
                  alt={gameNoMeta.main_img}
                />
              </div>
              {imgs.map((img) => (
                <div className="carousel-item">
                  <img
                    src={img.url}
                    className="d-block w-100"
                    alt={img.url}
                    height="600"
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <iframe
            width="560"
            height="500"
            src={gameNoMeta.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="mb-3">
            <form name="commentForm" data-game={gameNoMeta.id}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Оставить комментарий
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="comment"
              />
              <button type="submit" className="btn btn-success mt-2">
                Отправить
              </button>
            </form>
            <div className="all-comments mt-3">
              {commentsNoMeta.map((comment) => (
                <div className="comment bg-body-tertiary mb-2">
                  <div className="d-flex justify-content-between">
                    <div className="fs-6">{comment.User.login}</div>
                    {/* <div className="fs-6">{comment.createdAt.toString()}</div> */}
                  </div>
                  <div className="fs-3">{comment.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

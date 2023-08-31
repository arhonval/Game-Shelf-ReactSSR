const React = require("react");
const Layout = require("../Layout");

module.exports = function Contacts({ login, platforms }) {
  return (
    <Layout login={login} platforms={platforms}>
      <div className="container col-xxl-8 px-4 py-5 mb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <script
              type="text/javascript"
              charSet="utf-8"
              async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A00a85f8fed866130ff9e73d651df52dbe020a2b4aeb8c5c8525adc091de2859d&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Game Shelf
            </h1>
            <p className="lead">Телефон: 8(800)555-35-35</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

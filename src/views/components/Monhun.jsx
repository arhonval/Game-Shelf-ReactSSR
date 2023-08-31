const React = require("react");
const Layout = require("../Layout");

module.exports = function Monhun({ login, platforms }) {
  return (
    <Layout login={login} platforms={platforms}>
      <script defer src="/js/monhun.js" />
      <form name="armor">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Armor set
          </label>
          <input
            type="text"
            className="form-control"
            name="setId"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="armor" />
      <form name="weapon">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Weapon
          </label>
          <input
            type="text"
            className="form-control"
            name="weaponId"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="weapon" />
    </Layout>
  );
};

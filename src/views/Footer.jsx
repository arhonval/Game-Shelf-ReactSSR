const React = require("react");

module.exports = function Footer() {
  return (
    <div className="container">
      <footer className="footer mt-auto py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/contacts" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2023 Game Shelf, Valentine Kirshin
        </p>
      </footer>
    </div>
  );
};

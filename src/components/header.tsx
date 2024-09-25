import React from "react";
import '../css/style.css';
import Logo from '../img/Logo2.png';
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-body-tertiary rounded">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} style={{ width: '100px', height: 'auto' }}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                SHOP
              </a>
              <ul className="dropdown-menu border-0 bg-light" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/Products">
                    PRODUCT ARCHIVE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/SingleProduct">
                    SINGLE PRODUCT
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/News">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/About">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contact">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link active btn"
                aria-current="page"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{ fontWeight: "bold", background: "none", border: "none" }}
              >
                <i className="bi bi-search"></i>
              </button>
            </li>

            {/* Modal */}
            <div
              className="modal fade"
              id="searchModal"

              aria-labelledby="searchModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="searchModalLabel">Search</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">

                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-danger">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Cart">
                <i className="bi bi-cart-fill" style={{ fontWeight: "bold" }}></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Register">
                <i className="bi bi-person-circle" style={{ fontWeight: "bold", }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

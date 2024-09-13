import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <Link className="title navbar-brand" to="/">
            Ziafat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{ fontSize: "14px" }}
                  className="nav-link active text-primary "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontSize: "13px", color: "#576574" }}
                  className="nav-link active "
                  aria-current="page"
                  href="#"
                >
                  Ziafat BBQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontSize: "13px", color: "#576574" }}
                  className="nav-link active text-secondary "
                  aria-current="page"
                  href="#"
                >
                  Ziafat Food Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontSize: "13px", color: "#576574" }}
                  className="nav-link active text-secondary "
                  aria-current="page"
                  href="#"
                >
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontSize: "13px" }}
                  className="nav-link active text-secondary "
                  aria-current="page"
                >
                  <i class="fa-solid fa-cart-shopping "></i>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

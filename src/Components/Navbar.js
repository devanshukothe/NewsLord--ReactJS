import React from "react";
import { Link } from "react-router-dom";
import Newslord from "./Newslord";

const Navbar = () => {
  return (
    <div className="my-3">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light active fw-bolder" to="/navbar">
            NewsLord
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <Link className="nav-link text-warning" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="nav__wrap">
        <div className="nav__container">
          <Link className="nav__home" to="/">
            Home
          </Link>
          <Link className="nav__paket" to="#">
            Paket
          </Link>
          <Link className="nav__promo" to="#">
            Promo
          </Link>
          <Link className="nav__daftar" to="/daftar">
            Daftar
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;

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
        <Link className="nav__paket" to="/paket">
          Paket
        </Link>
        <Link className="nav__promo" to="/promo">
          Promo
        </Link>
        {/* <Link className="nav__daftar" to="/daftar">
            Daftar
          </Link> */}
        <a
          href="https://api.whatsapp.com/send?phone=6288289261218&text=Halo%20*Transvision*!%0ASaya%20tertarik%20untuk%20berlangganan%20Transvision%2Cmohon%20info%20promo%20dan%20persyaratannya%20apa%20saja%20%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__daftar"
        >
          Daftar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

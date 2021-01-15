import React from "react";
import './FooterBar.css'
import { Link } from "react-router-dom";
import { DaftarIcon, HomeIcon, PaketIcon, PromoIcon } from "../../assets";

const FooterBar = () => {
  return (
    <nav className="footer">
      <div className="bottomnav">
        <Link className="bottomnavHome" to="/">
          <div className="img__wrapper">
            <img
              width="24"
              height="24"
              src={HomeIcon}
              alt="home"
            />
          </div>
          Home
        </Link>
        <Link className="bottomnavHome" to="/paket">
          <div className="img__wrapper">
            <img
              width="24"
              height="24"
              src={PaketIcon}
              alt="paket"
            />
          </div>
          Paket
        </Link>
        <Link className="bottomnavHome" to="/promo">
          <div className="img__wrapper">
            <img
              width="24"
              height="24"
              src={PromoIcon}
              alt="promo"
            />
          </div>
          Promo
        </Link>
        <Link className="bottomnavHome" to="/daftar">
          <div className="img__wrapper">
            <img
              width="24"
              height="24"
              src={DaftarIcon}
              alt="daftar"
            />
          </div>
          Daftar
        </Link>
      </div>
    </nav>
  );
};

export default FooterBar;

import React from "react";
import './FooterBar.css'
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <nav className="footer">
      <div className="bottomnav">
        <Link className="bottomnavHome" to="/">
          <div className="img__wrapper">
            <img
              width="24"
              height="24"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/811ee09c.svg"
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
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/a8815f96.svg"
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
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/b2ce8c51.svg"
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
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/4a42b93d.svg"
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

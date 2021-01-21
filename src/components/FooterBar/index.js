import React from "react";
import "./FooterBar.css";
import { Link } from "react-router-dom";
import { DaftarIcon, HomeIcon, PaketIcon, PromoIcon } from "../../assets";

const FooterBar = () => {
  return (
    <nav className="footer">
      <div className="bottomnav">
        <Link className="bottomnavHome" to="/">
          <div className="img__wrapper">
            <img width="24" height="24" src={HomeIcon} alt="home" />
          </div>
          Home
        </Link>
        <Link className="bottomnavHome" to="/paket">
          <div className="img__wrapper">
            <img width="24" height="24" src={PaketIcon} alt="paket" />
          </div>
          Paket
        </Link>
        <Link className="bottomnavHome" to="/promo">
          <div className="img__wrapper">
            <img width="24" height="24" src={PromoIcon} alt="promo" />
          </div>
          Promo
        </Link>
        <a
          className="bottomnavHome"
          href="https://api.whatsapp.com/send?phone=6288289261218&text=Halo%20*Transvision*!%0ASaya%20tertarik%20untuk%20berlangganan%20Transvision%2Cmohon%20info%20promo%20dan%20persyaratannya%20apa%20saja%20%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="img__wrapper">
            <img width="24" height="24" src={DaftarIcon} alt="daftar" />
          </div>
          Daftar
        </a>
      </div>
    </nav>
  );
};

export default FooterBar;

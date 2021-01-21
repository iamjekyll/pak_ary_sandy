import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import { BlackPanther, CaptainAmerica, IronMan, Spiderman } from "../../assets";

const Header = () => {
  return (
    <div className="header_wrap">
      <div className="header_container">
        <div className="header_hero">
          <h1>
            Transvision<span className="span_hero"> Berlangganan TV Kabel</span>
          </h1>
          <p className="hero_content">
            Website Layanan pemasangan baru Transvision pastikan anda terdaftar
            melalui marketing resmi kami daftar online via whatsapp proses cepat
            dan aman.
          </p>
          <a
              href="https://api.whatsapp.com/send?phone=6288289261218&text=Halo%20*Transvision*!%0ASaya%20tertarik%20untuk%20berlangganan%20Transvision%2Cmohon%20info%20promo%20dan%20persyaratannya%20apa%20saja%20%3F"
              target="_blank"
              rel="noopener noreferrer"
              id="button"
            >
              Daftar
            </a>
        </div>
        {/* cube */}
        <div className="_3GkWYt_-VigeG9evky1iVN">
          <div className="cubeSpinnerContainer">
            <div className="shadowContainer">
              <div className="shadow">
                <div>&nbsp;</div>
              </div>
            </div>
            <div className="actualCubeContainer">
              <div className="cubeFaces">
                <div className="cubeFace cubeFaceFront">
                  <img
                    className="spidermanLogo"
                    src={Spiderman}
                    loading="lazy"
                    alt="spiderman"
                  />
                </div>
                <div className="cubeFace cubeFaceBack">
                  <img
                    className="ironLogo"
                    src={IronMan}
                    loading="lazy"
                    alt="ironman"
                  />
                </div>
                <div className="cubeFace cubeFaceTop">&nbsp;</div>
                <div className="cubeFace cubeFaceBottom">&nbsp;</div>
                <div className="cubeFace cubeFaceLeft">
                  <img
                    className="captainLogo"
                    src={CaptainAmerica}
                    loading="lazy"
                    alt="captain america"
                  />
                </div>
                <div className="cubeFace cubeFaceRight">
                  <img
                    className="blackPantherLogo"
                    src={BlackPanther}
                    loading="lazy"
                    alt="black phanter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cube */}
      </div>
    </div>
  );
};

export default Header;

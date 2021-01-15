import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
          <button>
            <Link className="daftar" to="/daftar">
              Daftar
            </Link>
          </button>
        </div>
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
                    className="javaScriptLogo"
                    src="https://transvisionku.com/wp-content/uploads/2019/04/countdown-to-launch-marvels-spider-man-character-art-01-us-16aug18.png"
                    loading="lazy"
                    alt="spiderman"
                  />
                </div>
                <div className="cubeFace cubeFaceBack">
                  <img
                    className="pythonLogo"
                    src="https://transvisionku.com/wp-content/uploads/2019/04/AoU_Iron_Man_Mk43_art.png"
                    loading="lazy"
                    alt="ironman"
                  />
                </div>
                <div className="cubeFace cubeFaceTop">&nbsp;</div>
                <div className="cubeFace cubeFaceBottom">&nbsp;</div>
                <div className="cubeFace cubeFaceLeft">
                  <img
                    className="goLogo"
                    src="https://transvisionku.com/wp-content/uploads/2019/04/580b57fbd9996e24bc43c026.png"
                    loading="lazy"
                    alt="captain america"
                  />
                </div>
                <div className="cubeFace cubeFaceRight">
                  <img
                    className="cppLogo"
                    src="https://transvisionku.com/wp-content/uploads/2019/04/black-panther-png-images-2.png"
                    loading="lazy"
                    alt="black phanter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

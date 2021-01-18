import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        className="foo_wrap"
      >
        <div className="foo_stwrap">
          <div className="foo_div"></div>
          <div className="foo_st">
            <p className="foo_top">
              Ada pertanyaan? <span>Hubungi</span>
              <a className="footer-top-a" href="tel:+6288289261218">
                0882-8926-1218
              </a>
            </p>
            <p className="footer_copyright">PasangTransvision<span>Copyright &copy; CV Cumagini Kreasi. All Right Reserved</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

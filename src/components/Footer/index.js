import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        class="foo_wrap"
      >
        <div class="site-footer-wrapper centered dark">
          <div class="footer-divider"></div>
          <div class="site-footer">
            <p class="footer-top">
              Ada pertanyaan? Hubungi{" "}
              <a class="footer-top-a" href="tel:+62812345837">
                018-127-123-123
              </a>
            </p>
            <ul class="footer-links structural">
              <li
                class="footer-link-item"
                placeholder="footer_responsive_link_faq_item"
              >
                <a
                  class="footer-link"
                  data-uia="footer-link"
                  href="/"
                  placeholder="footer_responsive_link_faq"
                >
                  <span id="" data-uia="data-uia-footer-label">
                    Tanya Jawab
                  </span>
                </a>
              </li>
            </ul>
            <p class="footer_copyright">Made by IamJekyll</p>
          </div>
        </div>
        {/* <div class="center-pixel" style="position:absolute"></div> */}
      </div>
    </footer>
  );
};

export default Footer;

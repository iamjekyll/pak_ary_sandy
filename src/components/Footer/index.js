import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        class="foo_wrap"
      >
        <div class="foo_stwrap">
          <div class="foo_div"></div>
          <div class="foo_st">
            <p class="foo_top">
              Ada pertanyaan? Hubungi{" "}
              <a class="footer-top-a" href="tel:+6288289261218">
                0882-8926-1218
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
            <p class="footer_copyright">Test</p>
          </div>
        </div>
        {/* <div class="center-pixel" style="position:absolute"></div> */}
      </div>
    </footer>
  );
};

export default Footer;

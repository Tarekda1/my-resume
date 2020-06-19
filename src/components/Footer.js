import React from "react";
import SocialLinks from "../constants/socialLinks";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Designed & Developled by Me :)</h4>
        <p>
          copyright&copy;{new Date().getFullYear()}.
          <span>All rights reserved</span>
        </p>
        <SocialLinks styleClass="footer-links" />
      </div>
    </footer>
  );
};

export default Footer;

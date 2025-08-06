import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={assets.logo} alt="" />
          <p className="footer-description">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="social-icons">
            <Link to="/">
              <img
                src={assets.instagramIcon}
                className="icon"
                alt="Instagram"
              />
            </Link>
            <Link to="/">
              <img src={assets.facebookIcon} className="icon" alt="Facebook" />
            </Link>
            <Link to="/">
              <img src={assets.linkendinIcon} className="icon" alt="LinkedIn" />
            </Link>
            <Link to="/">
              <img src={assets.twitterIcon} className="icon" alt="Twitter" />
            </Link>
          </div>
        </div>
        <div>
          <p class="footer-title">COMPANY</p>
          <ul class="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="footer-title">SUPPORT</p>
          <ul class="footer-links">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
        <div class="footer-subscribe">
          <p class="footer-title">STAY UPDATED</p>
          <p class="footer-description">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div class="subscribe-box">
            <input type="text" placeholder="Your email" />
            <button>
              <img src={assets.arrowIcon} alt="arrowIcon" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="footer-bottom">
        <p>
          © 2025 <a href="https://prebuiltui.com">QuickStay</a>. All rights
          reserved.
        </p>
        <ul class="footer-bottom-links">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            ducimus, similique cupiditate dolores eligendi blanditiis libero
            reiciendis sunt fugit quisquam reprehenderit incidunt exercitationem
            sed repellat? Quod eveniet tempora eum dolore assumenda quia,
            explicabo dolorem hic autem porro rerum. Quisquam odit impedit
            facere necessitatibus optio maiores dolores quibusdam repellendus
            atque consequuntur?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>PrivacyPolicy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+94-76-6080316</li>
            <li>anjanananayakkara1999@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2024 tomato.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

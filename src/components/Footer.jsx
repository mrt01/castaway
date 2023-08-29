import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Castaway</h1>
      </div>
      <div className="footer_SecondDiv">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Episodes</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Style Guide</li>
          <li>Instructions</li>
          <li>Changelog</li>
          <li>Credit</li>
          <li>
            Powered by Webflow
          </li>
          <li>Licenses</li>
        </ul>
      </div>
      <div>
        <img src="" alt="a" srcset="" />
        <img src="" alt="b" srcset="" />
        <img src="" alt="c" srcset="" />
        <img src="" alt="d" srcset="" />
        <img src="" alt="e" srcset="" />
      </div>
    </footer>
  );
};

export default Footer;

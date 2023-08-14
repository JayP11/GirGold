import React from "react";
import "./Footer.css";

import gglogo from "../../assets/nav_logo01.png";
import footer_bg from "../../assets/sec-footer-01.png";
import fb01 from "../../assets/sl-fb01.png";
import ig01 from "../../assets/sl-insta01.png";
import yt01 from "../../assets/sl-yt01.png";
import tt01 from "../../assets/sl-tt01.png";
import ml01 from "../../assets/sl-ml01.png";
import wb01 from "../../assets/sl-wb01.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="contact">
      {/* <div className="contact-bg">
        <img draggable="false" src={footer_bg} alt="gir gold milk farm" />
      </div> */}
      <div className="contact-content">
        <div className="contact-second">
          {/* <p className="add-font">Contact</p> */}
          <ul className="tertiary-font">
            <li>
              Customer Care :<p className="add-font">94097 24444</p>
            </li>
            <li>
              Mail Us :<p className="add-font">girgold2018@gmail.com</p>
            </li>
            <li>
              India Address:
              <p className="">
                {/* વૃજ વાડી, રૈયા ગામ, રૈયા રોડ, રાજકોટ */}
                {/* VRAJ VADI RAIYA ROAD SURVEY NO.312/1 NEAR PARSHURAM TEMPLE RAIYA
                GAAM RAJKOT 360005 */}
                Mazzanine Floor Rotary Dolls Museum Opp. Heera Panna Complex Dr.
                Yagnik Road Rajkot 36001
              </p>
            </li>
          </ul>
          <br></br>
          {/* <p className="add-font"> Other Links</p> */}
        </div>
        <div className="contact-second">
          {/* <p className="add-font">Contact</p> */}
          <ul className="tertiary-font">
            <li>
              US Address :
              <p className="">
                {/* વૃજ વાડી, રૈયા ગામ, રૈયા રોડ, રાજકોટ */}
                132 Fiat Ave Iselin, NJ 08830 UNITED STATES Contact:
                270-260-1270 Email: Ussales@girgold.com
              </p>
            </li>
          </ul>
          <br></br>
          {/* <p className="add-font"> Other Links</p> */}
        </div>
        <div className="vertical-ruler"></div>
        <div className="contact-first">
          <img draggable="false" src={gglogo} />
          <p className="footer-logo-tagline tertiary-font">
            સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
            <br />
            શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
          </p>
        </div>
        <div className="contact-third">
          <div className="tertiary-font social-links">
            <a
              className="footer-sl"
              href="https://theapplified.com/girgold"
              target="_blank">
              <img className="ficn" draggable="false" src={wb01} />
              <p>Website</p>
            </a>

            <a
              className="footer-sl"
              href=" https://www.instagram.com/gir_gold"
              target="_blank">
              <img className="ficn" draggable="false" src={ig01} />
              <p>Instagram</p>
            </a>

            <a
              className="footer-sl"
              href=" https://www.facebook.com/girgold2018"
              target="_blank">
              <img className="ficn" draggable="false" src={fb01} />
              <p>Facebook</p>
            </a>
            <a
              className="footer-sl"
              href="https://twitter.com/GIRGOLD1"
              target="_blank">
              <img className="ficn" draggable="false" src={tt01} />
              <p>Twitter</p>
            </a>
            <a
              className="footer-sl"
              href="girgold2018@gmail.com"
              target="_blank">
              <img className="ficn" draggable="false" src={ml01} />
              <p>Gmail</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

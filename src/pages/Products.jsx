import React, { useEffect, useState } from "react";
import "../Products.css";

import { Link } from "react-router-dom";

import pp_ele01 from "../assets/pp_ele01.png";
import pp_ele02 from "../assets/pp_ele02.png";
import pp_ele03 from "../assets/pp_ele03.png";
import pp_ele04 from "../assets/pp_ele04.png";

import Navbar from "../components/navbar/Navbar";
import gglogo from "../assets/nav_logo01.png";
import footer_bg from "../assets/sec-footer-01.png";
import note_icon01 from "../assets/gg_icn01.png";
import fb01 from "../assets/sl-fb01.png";
import ig01 from "../assets/sl-insta01.png";
import yt01 from "../assets/sl-yt01.png";
import Footer from "../components/footer/Footer";
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />

      {/* ------------------- Product Detail ------------------- */}
      <section className="pp-wrapper">
        <div className="pp-header">A2 Products</div>
        <div className="pp-list">
          {/* <Link className="pp-item" to="/milk">
            <img draggable="false" className="pp-item-img" src={pp_ele01} />
          </Link> */}
          <Link className="pp-item" to="/ghee">
            <img draggable="false" className="pp-item-img" src={pp_ele02} />
          </Link>
          {/* <Link className="pp-item" to="/chaas">
            <img draggable="false" className="pp-item-img" src={pp_ele03} />
          </Link>
          <Link className="pp-item" to="/lassi">
            <img draggable="false" className="pp-item-img" src={pp_ele04} />
          </Link> */}
        </div>
      </section>

      {/* ------------------- Footer ------------------- */}
      {/* <section className="pp-contact">
        <div className="pp-contact-bg">
          <img src={footer_bg} alt="gir gold milk farm" />
        </div>
        <div className="pp-contact-content">
          <div className="pp-contact-first">
            <img src={gglogo} />
            <p className="pp-footer-logo-tagline tertiary-font">
              સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
              <br />
              શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
            </p>
          </div>
          <div className="pp-vertical-ruler"></div>
          <div className="pp-contact-second">
            <p className="secondary-font">Contact</p>
            <ul className="tertiary-font">
              <li>
                સેલ-ફોન :<p className="secondary-font">94097 24444</p>
              </li>
              <li>
                ઈ-મેલ :<p className="secondary-font">girgold2018@gmail.com</p>
              </li>
              <li>
                સરનામું :
                <p className="secondary-font">
                  વૃજ વાડી, રૈયા ગામ, રૈયા રોડ, રાજકોટ
                </p>
              </li>
            </ul>
            <br></br>
            <p className="secondary-font"> Other Links</p>
            <div className="tertiary-font pp-social-links">
              <a
                className="pp-footer-sl"
                herf="https://facebook.com"
                target="_blank"
              >
                <img src={fb01} />
              </a>

              <a
                className="pp-footer-sl"
                herf="https://instagram.com"
                target="_blank"
              >
                <img src={ig01} />
              </a>

              <a
                className="pp-footer-sl"
                herf="https://youtube.com"
                target="_blank"
              >
                <img src={yt01} />
              </a>
            </div>
          </div>
          <div className="pp-contact-third"></div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import "../pages/SingleProduct.css";

import pro_title01 from "../assets/a2_title01.png";
import pro_title02 from "../assets/a2_title02.png";
import pro_title03 from "../assets/a2_title03.png";
import pro_title04 from "../assets/a2_title04.png";
import pro_img01 from "../assets/gg_milk01.png";
import pro_img02 from "../assets/gg_ghee01.png";
import pro_img03 from "../assets/gg_chaas01.png";
import pro_img04 from "../assets/gg_lassi01.png";
import Navbar from "../components/navbar/Navbar";
import gglogo from "../assets/nav_logo01.png";
import footer_bg from "../assets/sec-footer-01.png";
import note_icon01 from "../assets/gg_icn01.png";
import fb01 from "../assets/sl-fb01.png";
import ig01 from "../assets/sl-insta01.png";
import yt01 from "../assets/sl-yt01.png";
import Footer from "../components/footer/Footer";
const Chaas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const simple = require("../assets/gg_chaas01.png");
  const masala = require("../assets/gg_ghee01.png");
  const types = { simple, masala };

  const [selected, setSelected] = useState(types.simple);
  return (
    <>
      <Navbar />

      {/* ------------------- Product Banner ------------------- */}
      <section className="product-banner">
        <div className="product-banner-bg">
          <img draggable="false" src="" alt="" />
        </div>
      </section>
      {/* ------------------- Product Detail ------------------- */}
      <section className="product-detail">
        <div className="pro-img-wrapper">
          <img draggable="false" src={selected} />
          <a className="dl-broc-btn">Download Brochure</a>
        </div>
        <div className="pro-detail-wrapper">
          <div className="pro-header-title">
            <img
              draggable="false"
              className="pro-detail-title"
              src={pro_title03}
            />
            <div className="pro-type-title">
              <p
                className="pro-type-text"
                // onClick={() => setSelected(types.simple)}
              >
                સાદી
              </p>
              <p
                className="pro-type-text"
                // onClick={() => setSelected(types.masala)}
              >
                મસાલા
              </p>
            </div>
          </div>

          <div className="pro-sub-detail">
            <div className="pro-ben-wrapper">
              <p className="secondary-font pro-ben-title">
                આહારમાં છાશના ફાયદાઓ
              </p>
              <p className="tertiary-font pro-ben-list">
                <p>રોગપ્રતિકારક ક્ષમતા વધારે</p>
                <p>વૃદ્ધત્વની પ્રક્રિયાને ધીમી કરે</p>
                <p>ભોજન પચાવે – પાચનતંત્ર સુધારે</p>
                <p>ડાયાબિટીસ કાબૂમાં રાખે</p>
                <p>ઓબેસીટી (મેદસ્વિતા) ઘટાડે</p>
                <p>ડીહાઈડ્રેશનમાં અસરકારક</p>
                <p>બ્લડપ્રેશર નિયમન કરે</p>
                <p>કોલેસ્ટ્રોલ ઓછું કરે</p>
                <p>એસીડીટીમાં રાહત આપે</p>
                <p>કબજીયાત દૂર કરે</p>
                <p>હાડકાં મજબૂત બનાવે</p>
                <p>શરીરને ડીટોક્સ કરે</p>
                <p>શરીરના તાપમાનને નિયંત્રિત રાખે</p>
              </p>
            </div>
            <div className="pro-nut-wrapper">
              <p className="secondary-font pro-nut-title">નૉૅધ :</p>
              <p className="tertiary-font pro-nut-list">
                <p>
                  ગીર ગાયનાં શુદ્ધ, તાજા, A2 દૂધને મેળવીને દેશી વલોણા પદ્ધતિથી
                  બનાવેલ સાદી અને મસાલા છાશ
                </p>
                <div className="pro-note-icon">
                  <img draggable="false" src={note_icon01} />
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Footer ------------------- */}
      {/* <section className="sp-contact">
        <div className="sp-contact-bg">
          <img draggable="false" src={footer_bg} alt="gir gold milk farm" />
        </div>
        <div className="sp-contact-content">
          <div className="sp-contact-first">
            <img draggable="false" src={gglogo} />
            <p className="sp-footer-logo-tagline tertiary-font">
              સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
              <br />
              શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
            </p>
          </div>
          <div className="sp-vertical-ruler"></div>
          <div className="sp-contact-second">
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
            <div className="tertiary-font sp-social-links">
              <a
                className="sp-footer-sl"
                herf="https://facebook.com"
                target="_blank"
              >
                <img draggable="false" src={fb01} />
              </a>

              <a
                className="sp-footer-sl"
                herf="https://instagram.com"
                target="_blank"
              >
                <img draggable="false" src={ig01} />
              </a>

              <a
                className="sp-footer-sl"
                herf="https://youtube.com"
                target="_blank"
              >
                <img draggable="false" src={yt01} />
              </a>
            </div>
          </div>
          <div className="sp-contact-third"></div>
        </div>
      </section> */}
      <Footer className="home-footer" />
    </>
  );
};

export default Chaas;

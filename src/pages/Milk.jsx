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
import fb01 from "../assets/sl-fb01.png";
import ig01 from "../assets/sl-insta01.png";
import yt01 from "../assets/sl-yt01.png";
import Footer from "../components/footer/Footer";
const Milk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
          <img draggable="false" src={pro_img01} />
          <a className="dl-broc-btn">Download Brochure</a>
        </div>
        <div className="pro-detail-wrapper">
          <div className="pro-header-title">
            <img
              draggable="false"
              className="pro-detail-title"
              src={pro_title01}
            />
          </div>
          {/* <div className="pro-type-title">
            <p></p>
          </div> */}
          <div className="pro-sub-detail">
            <div className="pro-ben-wrapper">
              <p className="secondary-font pro-ben-title">
                આહારમાં દૂધના ફાયદાઓ
              </p>
              <p className="tertiary-font pro-ben-list">
                <p>રોગપ્રતિકારક ક્ષમતા વધારે</p>
                <p>વૃદ્ધત્વની પ્રક્રિયાને ધીમી કરે</p>
                <p>શક્તિવર્ધક</p>
                <p>બૌદ્ધિક ક્ષમતા વધે સ્મૃતિ શક્તિ વધે</p>
                <p>ગ્રહણ શક્તિ વધે</p>
                <p>વીર્ય ઉત્પન્ન કરે, ઓજ-તેજ વધે</p>
                <p>પેટમાં ગેસ થતો નથી</p>
                <p>બાળક, વૃદ્ધ, બીમારને પાચનમાં આસાન ઊ કોલેસ્ટ્રોલ ઓછું કરે</p>
                <p>ઓબેસીટી (મેદસ્વિતા) કરતું નથી.</p>
                <p>બ્લડપ્રેશર નિયમન કરે</p>
                <p>ડાયાબિટીસ કાબૂમાં રાખે</p>
                <p>શરીરના કોષોને કેન્સરથી બચાવે</p>
                <p>હૃદયરોગ અટકાવે</p>
                <p>માનસિક રોગ, મૂર્છા, રક્તપિત જેવા ભયંકર રોગોથી રક્ષણ કરે</p>
              </p>
            </div>
            <div className="pro-nut-wrapper">
              <p className="secondary-font pro-nut-title">પોષક તત્વો</p>
              <p className="tertiary-font pro-nut-list">
                <p>Vitamin - A, A2, D, E, K, K2</p>
                <p>Omega 3 Fatty Acid</p>
                <p>Omega 6 Fatty Acid</p>
                <p>Omega 9 Fatty Acid</p>
                <p>Immunomodulator</p>
                <p>Calcium</p>
                <p>Amino Acid</p>
                <p>Butyric Acid</p>
                <p>Bioenhancer</p>
                <p>Antioxidant</p>
                <p>Conjugated Linoleic Acid (CLA)</p>
                <p>A2 Beta Casein and other Proteins</p>
              </p>
            </div>{" "}
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

export default Milk;

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
const Ghee = () => {
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
          <img draggable="false" src={pro_img02} />
          <a className="dl-broc-btn">Download Brochure</a>
        </div>
        <div className="pro-detail-wrapper">
          <div className="pro-header-title">
            <img
              draggable="false"
              className="pro-detail-title"
              src={pro_title02}
            />
          </div>
          {/* <div className="pro-type-title">
            <p></p>
          </div> */}
          <div className="pro-sub-detail">
            <div className="pro-ben-wrapper">
              <p className="secondary-font pro-ben-title">
                આહારમાં ઘીના ફાયદાઓ
              </p>
              <p className="tertiary-font pro-ben-list">
                <p>બુદ્ધિનો વિકાસ કરે</p>
                <p>યાદ શક્તિ વધારે, ગ્રહણ શક્તિ - Grasping Power ખીલે</p>
                <p>
                  ધારણા શક્તિ ઉન્નત બને છે એટલે મનને સ્વસ્થ, શાંત અને એકાગ્ર
                  કરવામાં મદદરુપ
                </p>
                <p>પાચનતંત્ર મજબૂત બનાવે</p>
                <p>શક્તિ વર્ધક</p>
                <p>ઓબેસીટી (મેદસ્વિતા)નું નિયમન કરે</p>
                <p>
                  વીર્ય ઉત્પન્ન કરે, ઓજ-તેજ વધે અને વ્યક્તિ પ્રતિભા સંપન્ન બને
                </p>
                <p>આંખોને સ્વસ્થ રાખે – તેજ વધારે</p>
                <p>સ્વાસ્થ્ય વર્ધક</p>
                <p>વૃદ્ધત્વની પ્રક્રિયા ને ધીમી કરે, આયુષ્યમાં વધારો કરે</p>
                <p>અવાજને નરમ અને મધુર બનાવે</p>
                <p>Post Suirgical Care વખતે આહારમાં ઉપયાગી</p>
                <p>ગર્ભાવસ્થા દરમિયાન આહારનું આવશ્યક ઘટક</p>
                <p>
                  બે ટીપાં નવજાત શિશુને પણ આપી શકાય અને સ્તનપાન કરાવતી માતા માટે
                  આહારમાં અતિ આવશ્યક ઘટક
                </p>
              </p>
            </div>
            <div className="pro-nut-wrapper">
              <p className="secondary-font pro-nut-title">નૉૅધ :</p>
              <p className="tertiary-font pro-nut-list">
                <p>
                  ગીર ગાયનાં શુદ્ધ, તાજા, A2 દૂધને મેળવીને દેશી વલોણા પદ્ધતિથી
                  છાશમાંથી માખણ એ માખણનું ઘી ', બનાવવામાં આવે છે.
                </p>
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
                <img src={fb01} />
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

export default Ghee;

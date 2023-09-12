import React, { useEffect, useState } from "react";
import "../pages/About.css";

import gglogo from "../assets/nav_logo01.png";
import milky_navbar from "../assets/sec-nav-01.png";
import banner_bg from "../assets/sec-bg-01.png";
import tree01 from "../assets/sec-tree-01.png";
import cow01 from "../assets/sec-cow-01.png";
import cow02 from "../assets/sec-cow-02.png";
import about_bg from "../assets/sec-bg-02.png";
import about_ele01 from "../assets/milk01.png";
import why_bg from "../assets/sec-bg-03.png";
import why_circle_bg from "../assets/sec-circle-01.png";
import milk_bottle01 from "../assets/milkbottle01.png";
import why_icon01 from "../assets/whyicn01.png";
import pro_title01 from "../assets/a2_title01.png";
import pro_title02 from "../assets/a2_title02.png";
import pro_title03 from "../assets/a2_title03.png";
import pro_title04 from "../assets/a2_title04.png";
import pro_img01 from "../assets/gg_milk01.png";
import pro_img02 from "../assets/gg_ghee01.png";
import pro_img03 from "../assets/gg_chaas01.png";
import pro_img04 from "../assets/gg_lassi01.png";
import footer_bg from "../assets/sec-footer-01.png";
import Navbar from "../components/navbar/Navbar";
import fb01 from "../assets/sl-fb01.png";
import ig01 from "../assets/sl-insta01.png";
import yt01 from "../assets/sl-yt01.png";
import Footer from "../components/footer/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />

      {/* ------------------- About ------------------- */}
      <section className="about-wrapper">
        <div className="about-header">
          <p className=" primary-font">
            {/* અરવિંદભાઇ મણીઆર ચેરિટેબલ ફાઉન્ડેશન */}
            Arvindbhai Maniar Charitable Foundation
          </p>
          <p className=" secondary-font">
            {/* દ્વારા સંચાલિત */}
            {/* Run by */}
          </p>
          <p className="tertiary-font">
            Arvindbhai Maniar Charitable Foundation was established to
            commemorate and carry forward the good work done by him. Shri
            Arvindbhai Maniar was an Income Tax Practitioner who was known for
            his humanity, honesty, religiousness, discipline, sarpam, sanskar.
            MLA of Rajkot, first Mayor of Rajkot Municipal Corporation, chairman
            of Rajkot Nagrik Sahakari Bank Ltd. who gave an impenetrable shield
            of security regulations in the co-operative banking sector, bringing
            unprecedented progress and success to the bank, founder of modern
            Rajkot, associated with many service organizations and a golden
            mentor.
            {/* શ્રી અરવિંદભાઇ મણીઆરે જીવનની દરેક ક્ષણે સ્વાર્થનો નહી પરંતુ સમષ્ટિનો વિચાર કર્યો.  */}
            {/* માનવતા, પ્રમાણિકતા, ધાર્મિકતા, શિસ્ત, સર્પમ,સંસ્કારને વરેલા શ્રી અરવિંદભાઇ મણીઆર ઇન્કમટેક્સ પ્રેક્ટીશનર હતા. */}
            {/* રાજકોટના ધારાસભ્ય, રાજકોટ મ્યુનિસિપલ કોર્પોરેશનના પ્રથમ
            મેયર, old રાજકોટ નાગરિક સહકારી બેંક લી.ના ચેરમેન તરીકે બેંકને
            અપ્રતિમ પ્રગતિ અને સફળતા અપાવીને સહકારી બેંકીગ ક્ષેત્રમાં સુરક્ષાના
            નિયમોનું અભેદ્ય કવચ આપનાર, આધુનિક રાજકોટના ઘડવૈયા, અનેક સેવાકીય
            સંસ્થાઓ સાથે સંકળાયેલ અને સોના માર્ગદર્શક હતા. */}
          </p>
          <div className="about-gg-wrapper">
            <div className="about-gg-border">
              <p className="about-gg-font secondary-font">
                {/* "સર્વલન હિતાય, સૂર્યનને પ્રાથ" */}
                {/* "Sarvalan Hitaya, Suryana Prath" */}
                "सर्वजन हिताय, सर्वजन सुखाय "
              </p>
              <p className="about-gg-font tertiary-font">
                {/* ના */}
                of &nbsp;
                <span className="secondary-font">
                  {/* શ્રી અરવિંદભાઇ મણીઆર */}
                  Shri Arvindbhai Maniar
                </span>{" "}
                {/* ના સ્વપ્નને સાકાર કરવા{" "} */}
                to realize the dream of
                <span className="secondary-font">
                  {" "}
                  {/* અરવિંદભાઇ મણીઆર ચેરીટેબલ ફાઉન્ડેશન */}
                  Aravindbhai Maniar Charitable Foundation
                </span>{" "}
                {/* દ્વારા નાના ઉદ્દેશ વિના સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયનું
                તાજું, મુદ્ઘ, સંપૂર્ણ હાઇજીનીક, કોઇપણ પ્રકારની કેમીકલ પ્રક્રિયા
                વિનાનાં દૂધ, છાશ, લસ્સી અને ઘી આપના સુધી પહોંચાડવાનો આ સેવા પક્ષ
                છે. જેનાથી આપના સમગ્ર પરિવારનું સ્વાસ્થ્ય સુધરશે. */}
                {/* by small intention of Saurashtra's best type of Gir cow, this
                service is to deliver fresh, fresh, fully hygienic, chemical
                free milk, buttermilk, lassi and ghee to you. This will improve
                the health of your entire family. */}
                by the small intension to provide the best service to deliver
                fresh,fully hygienic, chemical free milk, buttermilk, lassi and
                ghee of Saurashtra's best type of A-2 Gir cow.
                {/*  */}
                {/* by the small intension to provide the best service to deliver fresh,fully hygienic, chemical free milk, buttermilk, lassi and ghee of Saurashtra's best type of Gir cow. */}
                <br />
                <br />
                {/* જે ગાયોનું દૂધ એકત્રીત કરવામાં આવે છે તે તમામ ગાયોના DNA ટેસ્ટ
                કરીને ગીરની ગાયની નસ્લની ખાત્રી કરવામાં આવે છે. રોજ એકત્રીત થતા
                દૂધનો રીપોર્ટ તૈયાર કરીને એ વેબસાઇટ ઉપર ઉપલબ્ધ કરવામાં આવે છે.
                સૌ પ્રથમવાર દૂધ દોહવાના સ્થળથી આપના ઘરે દૂધ પહોંચે તે સમગ્ર
                પ્રક્રિયા CCTV કેમેરાથી આપ મોબાઈલ ફોન દ્વારા મોનીટર કરી શહે એવી
                વ્યવસ્થા છે. જેથી આપ ચોખ્ખા તથા અધિકૃત દૂધ માટે નિશ્ચિત થઈ શકો. */}
                All the cows whose milk is collected are DNA tested to confirm
                the breed of the Gir cow. Daily collected milk report is
                prepared and made available on the website. All the way from the
                first milking place to your home. There is a system where you
                can monitor the process with CCTV cameras through your mobile
                phone. So you can be sure of pure and authentic milk.
                <br />
                <br />
                {/* અન્ય તમામ ભેંસ, જર્સી ગાય ના દૂધ, છાશ, ઘી માનવીના આરોગ્યને
                નુકસાન કરે છે અને */}
                All other buffalo, jersey cow milk, buttermilk, ghee are harmful
                to human health and
                <br />
                <br />
                <p className="secondary-font utility-font01">
                  {/* 0. ઓબેસીટી */}
                  0. Obesity &nbsp;
                  {/* B. બ્લડપ્રેશર,હાર્ટડીસીઝ*/}
                  B. Blood pressure,Heart diseases &nbsp;
                  {/* C. કોલેસ્ટ્રોલ, કૅન્સર */}
                  C. Cholesterol, cancer &nbsp;
                  {/* D ડાયાબિટીસ, */}D. Diabetes,
                </p>
                <br />
                {/* જેવી આરોગ્યની સમસ્યાઓમાં વધારો કરે છે. */}
                like increases health problems.
                <br />
                <br />
                {/* આ સમગ્ર પ્રવૃત્તિથી સ્વાસ્થ્ય માટે સમસ્યાઓ સર્જતી જર્સી
                ગાય-ભેંસને જાકારો આપીને, દેશી ગાયોમાં શ્રેષ્ઠ ગીર ગાય જ માલધારી
                રાખતા થઇ જાય તેવી ચળવળ ઉભી કરવામાં આપનો સહકાર જરુરી છે. */}
                All this activity has given rise to the Jersey cow-buffalo which
                cause health problems, the best Gir cow among the country cows
                is Maldhari. We need your cooperation in creating a sustainable
                movement.
              </p>
            </div>
          </div>
          <div className="volu-wrapper">
            <div className="volu-card">
              <p className="secondary-font">
                {/* પૂ. સ્વામી પસ્માત્માનંદજી */}
                Swami Parmatmanandaji
              </p>
              <p className="tertiary-font">
                {/* આર્ષ વિદ્યા મંદિર, */}
                Arsh Vidya Mandir,
                <br />
                {/* મુંજકા, રાજકોટ */}
                Munjaka, Rajkot
              </p>
            </div>
            <div className="volu-card">
              <p className="secondary-font">
                {/* ડૉ. વલ્લભભાઇ કથીરિયા ચેરમેન, */}
                Dr. Vallabhbhai Kathiria Chairman,
                {/* Rashtriya Kamdhenu
                Aayog, Ex. Minister, Government of India */}
              </p>
              <p className="tertiary-font">
                {/* રાષ્ટ્રીય કામધેનુ આયોગ */}
                Rashtriya Kamdhenu Aayog,
                <br />
                {/* પૂર્વ કેન્દ્રીય મંત્રીશ્રી, ભારત સરકાર */}
                Ex. Minister, Government of India
              </p>
            </div>
            <div className="volu-card">
              <p className="secondary-font">
                {/* ડો. હિતેશભાઇ જાની */}
                Dr. Hiteshbhai Jani
              </p>
              <p className="tertiary-font">
                {/* પૂર્વ પ્રિન્સિપાલ, ગુજરાત આયુર્વેદ યુનિવર્સિટી */}
                Former Principal, Gujarat Ayurveda University
                <br />
                {/* ડીરેક્ટર, એનીમલ વેલ્ફેર બોર્ડ, ભારત સરકાર */}
                Director, Animal Welfare Board, Government of India
              </p>
            </div>
            <div className="volu-card">
              <p className="secondary-font">
                {/* દિપકભાઇ અગ્રવાલ */}
                Dipakbhai Agrawal
              </p>
              <p className="tertiary-font">
                {/* પૂર્વ ડીસ્ટ્રીક્ટ ગવર્નર, */}
                Former District Governor,
                <br />
                {/* રોટરી ઇન્ટરનેશનલ */}
                Rotary International
              </p>
            </div>
            <div className="volu-card">
              <p className="secondary-font">
                CA &nbsp;
                {/* કલ્પકભાઇ મણીઆર */}
                Kalpakbhai Maniar
              </p>
              <p className="tertiary-font">
                {/* પૂર્વ ચેરમેન, */}
                {/* પૂર્વ ચેરમેન, */}
                Former Chairman,
                <br />
                {/* રાજકોટ નાગરિક સહકારી બેંક લી. */}
                Rajkot Nagarik Sahakari Bank ltd.
              </p>
            </div>
            <div className="volu-card">
              <p className="secondary-font">
                {/* વિશાલ ચાવડા */}
                Vishal Chavda
              </p>
              <p className="tertiary-font">
                {/* ફયુચર ફાર્મ LLP */}
                Future Farm LLP
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Contact */}
      {/* <section className="about-contact">
        <div className="about-contact-bg">
          <img src={footer_bg} alt="gir gold milk farm" />
          <div className="about-contact-content">
            <div className="about-contact-first">
              <img src={gglogo} />
              <p className="about-footer-logo-tagline tertiary-font">
                સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
                <br />
                શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
              </p>
            </div>
            <div className="about-vertical-ruler"></div>
            <div className="about-contact-second">
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
              <div className="tertiary-font about-social-links">
                <a
                  className="about-footer-sl"
                  herf="https://facebook.com"
                  target="_blank"
                >
                  <img src={fb01} />
                </a>

                <a
                  className="about-footer-sl"
                  herf="https://instagram.com"
                  target="_blank"
                >
                  <img src={ig01} />
                </a>

                <a
                  className="about-footer-sl"
                  herf="https://youtube.com"
                  target="_blank"
                >
                  <img src={yt01} />
                </a>
              </div>
            </div>
            <div className="about-contact-third"></div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default About;

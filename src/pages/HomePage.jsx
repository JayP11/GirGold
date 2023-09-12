import React, { useEffect, useState } from "react";
import "../pages/HomePage.css";

import SlideCard from "../components/Slider.js";

import "animate.css";

import banner_bg from "../assets/sec-bg-01.png";
import slide01 from "../assets/slide01.jpg";
import slide02 from "../assets/slide02.jpg";
import slide011 from "../assets/slide011.png";
import slide012 from "../assets/slide012.png";
import slide0124 from "../assets/slide0124.png";
import slide013 from "../assets/slide013.png";
import tree01 from "../assets/sec-tree-01.png";
import cow01 from "../assets/sec-cow-01.png";
import cow02 from "../assets/sec-cow-02.png";
import about_bg from "../assets/sec-bg-02.png";
import about_ele01 from "../assets/sec-can-01.png";
import why_bg01 from "../assets/sec-bg-03.png";
import why_bg02 from "../assets/sec-bg-04.png";
import why_circle_bg01 from "../assets/sec-circle-01.png";
import why_circle_bg02 from "../assets/sec-circle-02.png";
import why_circle_bg03 from "../assets/sec-circle-03.png";
import milk_bottle01 from "../assets/milkbottle01.png";
import why_icon01 from "../assets/whyicn01.png";
import a1vsa2 from "../assets/a1vsa2.png";
import a1vsa201 from "../assets/a1vsa201.png";
import pro_title01 from "../assets/a2_title01.png";
import pro_title02 from "../assets/a2_title02.png";
import pro_title03 from "../assets/a2_title03.png";
import pro_title04 from "../assets/a2_title04.png";
import pro_img01 from "../assets/gg_milk01.png";
import pro_img02 from "../assets/gg_ghee01.png";
import pro_img03 from "../assets/gg_chaas01.png";
import pro_img04 from "../assets/gg_lassi01.png";
import pp_ele01 from "../assets/pp_ele01.png";
import pp_ele02 from "../assets/pp_ele02.png";
import pp_ele03 from "../assets/pp_ele03.png";
import pp_ele04 from "../assets/pp_ele04.png";
import pro_icn01 from "../assets/pro_icn01.png";
import pro_icn02 from "../assets/pro_icn02.png";
import pro_icn03 from "../assets/pro_icn03.png";
import pro_icn04 from "../assets/pro_icn04.png";
import pro_icn011 from "../assets/pro_icn011.png";
import pro_icn012 from "../assets/pro_icn012.png";
import pro_icn013 from "../assets/pro_icn013.png";
import pro_icn014 from "../assets/pro_icn014.png";
import odicn01 from "../assets/odicn01.jpeg";
import odicn02 from "../assets/odicn02.png";
import blog_img01 from "../assets/milk01.png";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import LUG01 from "../assets/gDMSS-Lite-User-Guide.pdf";
import GGR01 from "../assets/A1A2-Gir-Gold-Report-18.07.2020-1.pdf";

import { BlogData } from "../Data/BlogData";

import { Link, useNavigate } from "react-router-dom";
import { CowCarousal } from "../components";

const HomePage = () => {
  const [blogId, setBlogId] = useState();

  const navigate = useNavigate();
  const handleNavigation = (data) => {
    // console.log("dataid--->", data);
    navigate(`/single_blog/${data.id}`, {
      state: { data },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />

      {/* ------------------- Banner ------------------- */}
      {/* <section className="banner">
        <div className="banner-bg">
          <img src={banner_bg} alt="gir gold hills" />
        </div>
        <div className="banner-content">
          <img src={tree01} alt="tree" className="tree01" />

          <div className="banner_sup">
            <div className="banner-text">
              <p className="primary-font banner-text01 animate__animated animate__slideInDown">
                સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
              </p>
              <p className="primary-font animate__animated animate__backInUp">
                શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદક
              </p>
              <p className="secondary-font">PURE - ORGANIC - FRESH</p>
            </div>
            <div className="banner-ele">
              <img
                src={cow01}
                alt="tree"
                className="cow01 animate__animated animate__fadeInLeft"
              />
              <img
                src={cow02}
                alt="tree"
                className="cow02 animate__animated animate__fadeInBottomRight"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Slider */}

      <section className="home-slider">
        <div className="slide">
          <SlideCard />
        </div>
      </section>

      {/* <section className="home-report">
        <div className="report-header">Milk Lab Report</div>
        <div className="hr-content">
          <p className="hr-val01">
            Fat : <b>1% / 100gm</b>
          </p>
          <p className="hr-val02">
            SNF : <b>8.4% / 100gm</b>
          </p>
          <p className="hr-val03">
            Protien : <b>3.4g / 100gm</b>
          </p>
          <p className="hr-val04">
            Lactose : <b>24g / 100gm</b>
          </p>
        </div>
        <Link to="/report" className="hr-btn">
          View More Lab Reports
        </Link>
      </section> */}

      {/* ------------------- About ------------------- */}
      <section className="about">
        <div className="about-bg">
          {/* <img src={about_bg} alt="gir gold about us" /> */}
        </div>
        <br></br>
        <br></br>
        <div className="about-content">
          {/* <div className="about-text">
            <p className="primary-font">ગીર ગોલ્ડ શા માટે ?</p>
            <p className="secondary-font">
              ગૌપાલકો ભેંસ અને જર્સી છોડી દેશી ગીર ગાયનું ગૌપાલન કરતા થાય, તેમને
              ગીર ગાયના દૂધના પૂરતા પૈસા મળી રહે અને શહેરીજનોને ભેળસેળ વગરનું
              ગીર ગાયનું ચોખ્ખું A2 દૂધ મળી રહે તે માટે{" "}
              <span className="spec-font">
                શ્રી અરવિંદભાઈ મણીઆર ચેરીટેબલ ફાઉન્ડેશન
              </span>{" "}
              દ્વારા “Not for Profit”ના ઉદ્દેશ્યથી{" "}
              <span className="spec-font">‘ગીર ગોલ્ડ'</span> લોન્ચ કરવામાં આવી
              રહ્યું છે.
            </p>
          </div>
          <div className="about-ele">
            <img
              src={about_ele01}
              alt=""
              className="animate__animated animate__fadeInBottomRight"
            />
          </div> */}
        </div>
      </section>
      {/* ------------------- Why ------------------- */}
      {/* ------------------- Why Backup------------------- */}
      {/* <section className="why">
        <p className="why-header primary-font">
          ગીર ગાયના દૂધના ઉત્પાદનો ફાયદાઓ
        </p>
        <p className="why-sub-header secondary-font">
          A2 દૂધ દેશી (ગીર ગાય) ભારતીય ગાયમાંથી બનાવવામાં આવે છે જે સરળતાથી પચી
          જાય છે.
          <br />
          A2 ગાયના દૂધનું બાયો - સ્ટ્રક્ચર માનવ દૂધ જેવું જ છે.
        </p>
        <div className="why-content">
          <div id="why01" className="why-left-top-pts">
            <div className="why-pts">
              <p className="why-pts-txt secondary-font">
                <b>રોગપ્રતિકારક</b> ક્ષમતા વધારે
              </p>
              <img draggable="false" src={why_icon01} />
            </div>
            <div className="why-pts">
              <p className="why-pts-txt secondary-font">
                <b>ડાયાબિટીસ</b> કાબૂમાં રાખે
              </p>
              <img draggable="false" src={why_icon01} />
            </div>
            <div className="why-pts">
              <p className="why-pts-txt secondary-font">
                <b>હૃદયરોગ</b> અટકાવે
              </p>
              <img draggable="false" src={why_icon01} />
            </div>
            <ul className="a2_list_wrapp">
              <p className="a2_list_heading">ગીર ગાયનું દૂધ આહારમાં અમૃત </p>
              <div>
                <li className="a2_list_des">જીવનદાયક રસાયન છે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">રોગપ્રતિકારક ક્ષમતા વધારે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">શક્તિ વધારે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">બૌદ્ધિક ક્ષમતા વધારે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">સ્મૃતિ વધારે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">
                  ગ્રહણ શક્તિ (Grasping power) વધારે
                </li>
                ⭐
              </div>

              <div>
                <li className="a2_list_des">
                  તત્કાળ વીર્ય ઉત્પન્ન કરે, ઓજ-તેજ વધારે
                </li>
                ⭐
              </div>

              <div>
                <li className="a2_list_des">વૃદ્ધાવસ્થા અટકાવી નવયૌવન રાખે </li>
                ⭐
              </div>

              <div>
                <li className="a2_list_des">મા નું ધાવણ વધારે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">ભૂખ - તરસ મટાડે </li>⭐
              </div>

              <div>
                <li className="a2_list_des">
                  બાળક, વૃદ્ધ, બીમારને પાચનમાં આસાન અને પૌષ્ટિક
                </li>
                ⭐
              </div>
            </ul>
          </div>
          <div id="why02" className="why-circle-bg">
            <img
              draggable="false"
              className="why-circle"
              src={why_circle_bg03}
              alt="gir gold a2 milk"
            />
            <img
              className="why-bottle"
              src={milk_bottle01}
              alt="gir gold a2 milk"
            />
          </div>
          <div id="why03" className="why-right-bottom-pts">
            <ul className="a2_list_wrapp2">
              <p className="a2_list_heading">ગીર ગાયનું દૂધ આરોગ્યમાં ઔષધ </p>
              <div>
                ⭐<li className="a2_list_des2">કોલેસ્ટ્રોલ ઓછું કરે </li>
              </div>

              <div>
                ⭐
                <li className="a2_list_des2">ઓબેસીટી (મેદસ્વિતા) કરતું નથી </li>
              </div>

              <div>
                ⭐<li className="a2_list_des2"> બ્લડપ્રેશર નિયમન કરે</li>
              </div>

              <div>
                ⭐<li className="a2_list_des2">ડાયાબિટીસ કાબૂમાં રાખે </li>
              </div>

              <div>
                ⭐
                <li className="a2_list_des2">
                  લાંબા સમયના જીર્ણજ્વરમાં હિતકારી
                </li>
              </div>

              <div>
                ⭐<li className="a2_list_des2">શ્વાસના રોગોમાં ઉપયોગી</li>
              </div>

              <div>
                ⭐<li className="a2_list_des2"> કબજીયાત મટાડે</li>
              </div>

              <div>
                ⭐<li className="a2_list_des2">પેટમાં ગેસ થતો નથી</li>
              </div>

              <div>
                ⭐<li className="a2_list_des2"> થાક મટે </li>
              </div>

              <div>
                ⭐
                <li className="a2_list_des2">અટકીને પેશાબ ઉતરવામાં લાભદાયી</li>
              </div>

              <div>
                ⭐
                <li className="a2_list_des2">
                  માનસિક રોગો, મૂર્છા, કેન્સર, હૃદયરોગ, રક્તપિત્ત, ચક્કર
                  આવવા..... જેવા ભયંકર રોગોથી બચાવે
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="why-details">
          <p className="why-header primary-font">A2 દૂધના પોષણ તથ્યો</p>
          <div className="why-details-list">
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">70 Kal</p>/100ml
              </p>
              <p className="wd-lable">Energy Value/Calories</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">3.26g</p>/100ml
              </p>
              <p className="wd-lable">Protein</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">4.61g</p>/100ml
              </p>
              <p className="wd-lable">Carbohydrate</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">70 Kal</p>/100ml
              </p>
              <p className="wd-lable">Energy Value/Calories</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">4.0g</p>/100ml
              </p>
              <p className="wd-lable">Fat</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">8.5g</p>/100ml
              </p>
              <p className="wd-lable">SNF</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">237.21 IU</p>/100g
              </p>
              <p className="wd-lable">Vitamin (A)</p>
            </div>
            <div className="wd-list-item">
              <p className="wd-value">
                <p className="wd-val-lg">146.02 mg</p>/100g
              </p>
              <p className="wd-lable">Calcium</p>
            </div>
          </div>

          <p className="why-header why_slock mt-2">
            धर्मार्थ काम मोक्षाणां आरोग्यं मूलमुत्तमम् ।
          </p>

          <p className="cline-text2">
            ચરક સંહિતા ધર્મ, અર્થ, કામ અને મોક્ષ આ ચારે પુરુષાર્થ ઉત્તમ આરોગ્ય
            હશે તો જ થઇ શકશે. આરોગ્યનો મહત્તમ આધાર આપણો આહાર છે. ગીર ગાયનું દૂધ
            માનવીને માટે સંપૂર્ણ આહાર, અમૃત સમાન અને રોગપ્રતિકારક ક્ષમતા વધારનાર
            છે.
          </p>

          <p className="cline-text">
            પોષક તત્વોથી ભરપૂર દૂધ, ગીર ગાયનું દૂધ મૂળ ખેતરોમાં મુક્તપણે ચરતી
            ગીર ગાયોમાંથી આવે છે. અમે A2 ની તમામ સારીતા સાથે ફરીથી દૂધને હીરો
            બનાવી રહ્યા છીએ. ગીર ગાયનું દૂધ A2 બીટા કેસીન, પ્રોટીનથી સમૃદ્ધ છે
            જે તમારા અને પરિવારના સંપૂર્ણ સ્વાસ્થ્યને વધારે છે!
          </p>
          <div className="a1vsa2">
            <img draggable="false" src={a1vsa201} />
          </div>

          <p className="why-header why_slock mt-2">
            માનવીને માટે દૂધ અમૃત છે પણ ક્યુ દૂધ ?
          </p>

          <p className="cline-text">
            અનેક સંશોધનો બાદ સ્વીકારવામાં આવ્યું છે કે માત્ર ભારતીય દેશી ગાયના
            દૂધનો જ આનુવંશિક ગુણધર્મ A2 દૂધ છે અને માત્ર આ ભારતીય દેશી ગાયોની
            ઓલાદનું A2 દૂધ જ માનવીને માટે શ્રેષ્ઠ છે. તેનું નિયમિત સેવન કરવાથી
            માનવીનો શારીરિક, માનસિક, બૌદ્ધિક તથા ભાવનાત્મક વિકાસ થાય છે. ભારતીય
            દેશી ગાયોમાં ગીર ગાય સર્વશ્રેષ્ઠ છે. ગીર ગાયનું A2 દૂધ માનવીને માટે
            શક્તિ વર્ધક, સ્વાદિષ્ટ, બુદ્ધિ વર્ધક, સ્મૃતિ વર્ધક, રક્ત વર્ધક અને
            જીવન ઉપયોગી છે. અન્ય તમામ સસ્તન પ્રાણીઓનું દૂધ માનવીના આરોગ્યને
            નુકસાન કરે છે.
          </p>
        </div>
        <div className="why-bg">
          <img
            draggable="false"
            src={why_bg01}
            alt="gir gold a2 milk benefits"
          />
        </div>
      </section> */}

      {/* ----------------- cow images ------------------ */}

      <CowCarousal />

      {/* ------------------- map ----------------------- */}

      <div className="map_wrapp">
        <div
          className="pro-header primary-font"
          style={{ marginBottom: "1rem" }}>
          Our Location
        </div>
        <iframe
          width="100%"
          height="300"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1659338463323!5m2!1sen!2sin"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.3970612658477!2d70.73266609281644!3d22.301149831019856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c95b34bbcc5f%3A0x6ad2b557b309a0a1!2sMilk!5e0!3m2!1sen!2sin!4v1663321557558!5m2!1sen!2sin"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          allowFullScreen></iframe>
      </div>

      {/* Other Details */}

      <section className="od-sec">
        <div className="od-card">
          <img src={odicn02} />
          <div className="od-content">
            <p>
              Live view of your milk right from the Gaushala, then processing it
              at our processing plant and bottling !
            </p>

            <a href={LUG01} target="_blank">
              gDMSS Lite User Guide
            </a>
          </div>
        </div>
        <div className="od-card">
          <img src={odicn01} />
          <div className="od-content">
            <p>
              All our cows in Gaushala gets DNA checked for Gir’s original breed
            </p>
            <a href={GGR01} target="_blank">
              Check Report
            </a>
          </div>
        </div>
      </section>

      {/* ------------------- Products ------------------- */}
      <section className="products">
        <div className="pro-header primary-font">A2 Products</div>
        <div className="pro-list">
          {/* <Link to="/milk" className="product-card">
            <img draggable="false" className="milk-img" src={pro_img01} />
            <img
              draggable="false"
              className="product-title"
              src={pro_title01}
            />
          </Link> */}
          <Link to="/ghee" className="product-card">
            <img draggable="false" className="ghee-img" src={pro_img02} />
            <img
              draggable="false"
              className="product-title"
              src={pro_title02}
            />
          </Link>
          {/* <Link to="/chaas" className="product-card">
            <img draggable="false" className="chaas-img" src={pro_img03} />
            <img
              draggable="false"
              className="product-title"
              src={pro_title03}
            />
          </Link>
          <Link to="/lassi" className="product-card">
            <img draggable="false" className="lassi-img" src={pro_img04} />
            <img
              draggable="false"
              className="product-title"
              src={pro_title04}
            />
          </Link> */}
        </div>
        <div className="home-values">
          {/* <p className="primary-font hv-title">શુદ્ધતાનું વચન</p> */}
          <p className="primary-font hv-title">A promise of purity</p>
          <div className="hv-list">
            <div className="hv-item">
              <img draggable="false" src={pro_icn011} />
              <p>100% Natural</p>
            </div>
            <div className="hv-item">
              <img draggable="false" src={pro_icn012} />
              <p>Free of Antibiotics</p>
            </div>
            <div className="hv-item">
              <img draggable="false" src={pro_icn013} />
              <p>Free of Adulteration</p>
            </div>
            <div className="hv-item">
              <img draggable="false" src={pro_icn014} />
              <p>Hygienically Produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}

      {/*  ------------------- Blog  ------------------- */}
      <section className="home-blog">
        <div className="home-blog-header primary-font">Blog</div>
        <div className="home-blog-list">
          {BlogData.slice(0, 3).map((data, index) => {
            return (
              <div
                // to={{ pathname: "/single-blog" }}
                className="home-blog-card"
                key={data.id}
                onClick={() => handleNavigation(data)}>
                <div>
                  <div className="h-blog-top">
                    <img
                      draggable="false"
                      src={blog_img01}
                      className="home-blog-img"
                    />
                  </div>

                  <div className="home-blog-footer">
                    <p className="secondary-font home-blog-title">
                      {data.title}
                    </p>
                    <p className="tertiary-font home-blog-sub-title">
                      {data.sub}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/blog" className="home-blog-footer-btn">
          <div className="home-blog-btn tertiary-font">View More</div>
        </Link>
      </section>

      {/* Vision - Mission */}
      {/* <section className="visionmission">
        <div className="vm-header">વિઝન અને મિશન</div>
        <div></div>
      </section> */}

      {/*  ------------------- Testimonial  ------------------- */}
      {/* <section className="testimonial">
        <p className="testi-header primary-font">Testimonials</p>
        <div></div>
      </section> */}
      {/* Closing Line */}

      {/* ------------------- Footer ------------------- */}
      <Footer />
    </>
  );
};

export default HomePage;

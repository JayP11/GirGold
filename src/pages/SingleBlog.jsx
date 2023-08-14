import React, { useEffect, useState } from "react";
import "../pages/SingleBlog.css";
import "animate.css";

import gglogo from "../assets/nav_logo01.png";
import banner_bg from "../assets/sec-bg-01.png";
import tree01 from "../assets/sec-tree-01.png";
import cow01 from "../assets/sec-cow-01.png";
import cow02 from "../assets/sec-cow-02.png";
import about_bg from "../assets/sec-bg-02.png";
import about_ele01 from "../assets/sec-can-01.png";
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
import blog_img01 from "../assets/milk01.png";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import footer_bg from "../assets/sec-footer-01.png";
import fb01 from "../assets/sl-fb01.png";
import ig01 from "../assets/sl-insta01.png";
import yt01 from "../assets/sl-yt01.png";
import { useLocation } from "react-router-dom";

const SingleBlog = (props) => {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("id", state.data);
  }, [state]);

  // const { id, img, title, sub, desc } =
  //   (props.location && props.location.state) || {};

  return (
    <>
      <Navbar />
      {/*  ------------------- Blog  ------------------- */}
      {/* {state.BlogData.map((data, index) => {
        return ( */}
      <section className="single-blog-page" key={state.data.id}>
        <div className="sbp-header">
          <p className="sbp-title primary-font">{state.data.title}</p>
          {/* <p className="sbp-sub-title secondary-font">{data.sub}</p> */}
        </div>
        <div className="sbp-content">
          <div className="sbp-content-txt">
            <p className="sbp-description tertiary-font">{state.data.desc}</p>
          </div>
          <div className="sbp-content-img">
            <img draggable="false" src={blog_img01} />
          </div>
        </div>
      </section>
      {/* );
      })} */}
      {/* ------------------- SBP Footer ------------------- */}
      {/* <section className="sbp-contact">
        <div className="sbp-contact-bg">
          <img draggable="false" src={footer_bg} alt="gir gold milk farm" />
          <div className="sbp-contact-content">
            <div className="sbp-contact-first">
              <img draggable="false" src={gglogo} />
              <p className="sbp-footer-logo-tagline tertiary-font">
                સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
                <br />
                શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
              </p>
            </div>
            <div className="sbp-vertical-ruler"></div>
            <div className="sbp-contact-second">
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
              <div className="tertiary-font sbp-social-links">
                <a
                  className="sbp-footer-sl"
                  herf="https://facebook.com"
                  target="_blank"
                >
                  <img draggable="false" src={fb01} />
                </a>

                <a
                  className="sbp-footer-sl"
                  herf="https://instagram.com"
                  target="_blank"
                >
                  <img draggable="false" src={ig01} />
                </a>

                <a
                  className="sbp-footer-sl"
                  herf="https://youtube.com"
                  target="_blank"
                >
                  <img draggable="false" src={yt01} />
                </a>
              </div>
            </div>
            <div className="sbp-contact-third"></div>
          </div>
        </div>
      </section>{" "} */}
      <Footer className="home-footer" />
    </>
  );
};

export default SingleBlog;

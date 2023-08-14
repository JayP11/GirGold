import React, { useEffect, useState } from "react";
import "../pages/Blog.css";
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
import { Link, useNavigate } from "react-router-dom";

import { BlogData } from "../Data/BlogData";

const Blog = (props) => {
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

  // const [state, setState] = useState({
  //   id: "",
  //   img: "",
  //   title: "ttt",
  //   sub: "",
  //   desc: "",
  // });

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   props.history.push({
  //     pathname: "/single-blog",
  //     state,
  //   });

  return (
    <>
      <Navbar />
      {/*  ------------------- Blog  ------------------- */}
      <section className="blog-page">
        <div className="blog-header primary-font">Blog</div>
        <div className="blog-list">
          {BlogData.map((data, index) => {
            return (
              <div
                // to={{ pathname: "/single-blog" }}
                className="blog-card"
                key={data.id}
                // onClick={handleOnSubmit}
                onClick={() => handleNavigation(data)}
                // onClick={() => {
                //   handleNavigation();
                //   setBlogId(data.id);
                // }}
              >
                <div>
                  <div className="blog-top">
                    <img src={blog_img01} className="blog-img" />
                  </div>
                  <div className="blog-footer">
                    <p className="secondary-font blog-title">{data.title}</p>
                    <p className="tertiary-font blog-sub-title">{data.sub}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ------------------- Footer ------------------- */}
      {/* <section className="blog-contact">
        <div className="blog-contact-bg">
          <img draggable="false" src={footer_bg} alt="gir gold milk farm" />
          <div className="blog-contact-content">
            <div className="blog-contact-first">
              <img draggable="false" src={gglogo} />
              <p className="blog-footer-logo-tagline tertiary-font">
                સૌરાષ્ટ્રની ઉત્તમ પ્રકારની ગીર ગાયના
                <br />
                શુદ્ધ અને સાત્વિક A2 દૂધના ઉત્પાદનો{" "}
              </p>
            </div>
            <div className="blog-vertical-ruler"></div>
            <div className="blog-contact-second">
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
              <div className="tertiary-font blog-social-links">
                <a
                  className="blog-footer-sl"
                  herf="https://facebook.com"
                  target="_blank"
                >
                  <img draggable="false" src={fb01} />
                </a>

                <a
                  className="blog-footer-sl"
                  herf="https://instagram.com"
                  target="_blank"
                >
                  <img draggable="false" src={ig01} />
                </a>

                <a
                  className="blog-footer-sl"
                  herf="https://youtube.com"
                  target="_blank"
                >
                  <img draggable="false" src={yt01} />
                </a>
              </div>
            </div>
            <div className="blog-contact-third"></div>
          </div>
        </div>
      </section>{" "} */}
      <Footer />
    </>
  );
};

export default Blog;

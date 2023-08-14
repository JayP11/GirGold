import React from "react";
import "./Navbar.css";
import navbarele from "../../assets/navbar01.png";
import gglogo01 from "../../assets/nav_logo01.png";
import gglogo02 from "../../assets/nav_logo02.png";
import gglogo03 from "../../assets/nav_logo03.png";
import gglogo04 from "../../assets/nav_logo04.png";
import milky_navbar from "../../assets/sec-nav-01.png";
import why_icon01 from "../../assets/whyicn01.png";
import pro_title01 from "../../assets/a2_title01.png";
import pro_title02 from "../../assets/a2_title02.png";
import pro_title03 from "../../assets/a2_title03.png";
import pro_title04 from "../../assets/a2_title04.png";
import pro_img01 from "../../assets/gg_milk01.png";
import pro_img02 from "../../assets/gg_ghee01.png";
import pro_img03 from "../../assets/gg_chaas01.png";
import pro_img04 from "../../assets/gg_lassi01.png";
import { Link } from "react-router-dom";

import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="milky-navbar">
          {/* <img src={milky_navbar} alt="gir gold milky navbar" /> */}
        </div>
        <Link to="/" className="gg-nav-logo">
          <img draggable="false" src={gglogo04} alt="gir gold logo" />
        </Link>
        <div className="navbar-content">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/products" className="nav-link products-link">
            Products
          </Link>

          {/* <div className="products-navbar">
            <Link to="/milk">
              <div className="pro-nav-card">
                <img className="pro-nav-img01" src={pro_img01} />
                <img className="pro-nav-title01" src={pro_title01} />
              </div>
            </Link>
            <Link to="/ghee">
              <div className="pro-nav-card">
                <img className="pro-nav-img02" src={pro_img02} />
                <img className="pro-nav-title02" src={pro_title02} />
              </div>
            </Link>
            <Link to="/chaas">
              <div className="pro-nav-card">
                <img className="pro-nav-img03" src={pro_img03} />
                <img className="pro-nav-title03" src={pro_title03} />
              </div>
            </Link>
            <Link to="/lassi">
              <div className="pro-nav-card">
                <img className="pro-nav-img04" src={pro_img04} />
                <img className="pro-nav-title04" src={pro_title04} />
              </div>
            </Link>
          </div> */}
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/gallary" className="nav-link">
            Gallery
          </Link>

          <Link to="/contectus" className="nav-link">
            Contact Us
          </Link>
        </div>
        <div className="mobile-menu">
          <Sidebar
            right={"true"}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />

          {/* <div className="mm-obtn">Menu</div> */}
          {/* <div className="mm-content">
            <Link to="/" className="mm-nav-link">
              Home
            </Link>

            <Link to="/about" className="mm-nav-link">
              About
            </Link>

            <Link to="/products" className="mm-nav-link">
              Products
            </Link>

            <Link to="/blog" className="mm-nav-link">
              Blog
            </Link>

            <Link to="/gallary" className="mm-nav-link">
              Gallary
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Navbar;

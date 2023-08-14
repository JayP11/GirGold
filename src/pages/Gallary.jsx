import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../pages/Gallary.css";

import gImg01 from "../assets/gallary/khatmuhurt.jpeg";
import gImg02 from "../assets/gallary/plant-2.jpg";
import gImg03 from "../assets/gallary/plant-4.jpg";
import gImg04 from "../assets/gallary/plant-6.jpg";
import gImg05 from "../assets/gallary/plant-7.jpg";
import gImg06 from "../assets/gallary/plant-9.jpg";
import gImg07 from "../assets/gallary/pujan.jpg";
import gImg08 from "../assets/gallary/pujan2-1.jpg";

const Gallary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <section className="gallary">
        <div className="g-header">Gallery</div>
        <div className="g-content">
          <div className="g-list">
            <div className="g-item">
              <img src={gImg01} />
              <p>Khatmuhurt</p>
            </div>
            <div className="g-item">
              <img src={gImg08} />
              <p>Pujan</p>
            </div>
            <div className="g-item">
              <img src={gImg07} />
              <p>Plant Pujan</p>
            </div>
            <div className="g-item">
              <img src={gImg02} />
              <p>Plant Equipments</p>
            </div>
            <div className="g-item">
              <img src={gImg03} />
              <p>Plant Equipments</p>
            </div>
            <div className="g-item">
              <img src={gImg04} />
              <p>Plant Equipments</p>
            </div>
            <div className="g-item">
              <img src={gImg05} />
              <p>Plant Equipments</p>
            </div>
            <div className="g-item">
              <img src={gImg06} />
              <p>Plant Equipments</p>
            </div>
          </div>
          {/*  */}
          <div style={{ flex: "1" }}>
            <div className="g-vlist">
              <p className="g-vheader">Learn from the Expert</p>
              <div className="g-vitem">
                <iframe
                  width="100%"
                  height="250px"
                  src="https://www.youtube.com/embed/avClXg5js-E"
                  title="DR HITESH JANI , GENIUS AYURVEDA & PANCHAKARMA GURU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>
                  The speech of Dr Hitesh Jani, the National ‘authority’ on Gir
                  cows
                </p>
              </div>
              <div className="g-vitem">
                <iframe
                  width="100%"
                  height="250px"
                  src="https://www.youtube.com/embed/MJ70uqNLb0g"
                  title="Dr. Hitesh Jani Speech on Indian Desi Gir Cow"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>Dr. Hitesh Jani Speech on Indian Desi Gir Cow</p>
              </div>
              <div className="g-vitem">
                <iframe
                  width="100%"
                  height="250px"
                  src="https://www.youtube.com/embed/GmgSGU1aZdQ"
                  title="Swami Parmatmananda Ji on Pure Satvik Milk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>Swami Parmatmananda Ji on Pure Satvik Milk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallary;

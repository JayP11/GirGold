import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CowCarousal.css";

import cow1 from "../../assets/cow1.jpeg";
import cow2 from "../../assets/cow2.jpeg";
import cow3 from "../../assets/cow3.jpeg";
import cow4 from "../../assets/cow4.jpeg";

const CowCarousal = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autospeed: 3500,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "-1% 0" }}>{dots}</ul>;
    },
  };
  return (
    <div className="caw_wrapp">
      <div className="caw_text">
        <p>Gir Cow Images</p>
      </div>
      <Slider {...settings} style={{ marginTop: "1rem" }}>
        <img
          src={cow1}
          width="100%"
          height="400px"
          style={{ minWidth: "40px" }}
        />
        <img
          src={cow2}
          width="100%"
          height="400px"
          style={{ minWidth: "40px" }}
        />
        <img
          src={cow3}
          width="100%"
          height="400px"
          style={{ minWidth: "40px" }}
        />
        <img
          src={cow1}
          width="100%"
          height="400px"
          style={{ minWidth: "40px" }}
        />
        <img
          src={cow4}
          width="100%"
          height="400px"
          style={{ minWidth: "40px" }}
        />
        {/* <img src={slide013} width="100%" height="400px" /> */}
      </Slider>
    </div>
  );
};

export default CowCarousal;

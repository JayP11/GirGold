import React from "react";
import GoogleMapReact from "google-map-react";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./ContectUs.css";

const ContectUs = () => {
  return (
    <>
      <Navbar />
      <section className="cont_main_wrapp">
        <div className="g-header">Contact Us</div>
        <div className="cont_base_wrapp">
          <div className="form_wrapp">
            <label className="form_label">Name</label>
            <input type="text" name="" className="contect_input" id="" />

            <label className="form_label">Number</label>
            <input type="number" name="" className="contect_input" id="" />

            <label className="form_label">Email</label>
            <input type="email" name="" className="contect_input" id="" />

            <label className="form_label">Message</label>
            <textarea
              type="textarea"
              name=""
              className="contect_textarea"
              id=""
            />

            {/* <div style="width: 100%">
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8P2M+55P,%20Raiya%20Rd,%20Rajkot,%20Gujarat%20360005+(Gir%20Gold)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a>
              </iframe>
            </div> */}

            <button className="form_btn">Submit</button>
          </div>
          <div className="map_wrapp">
            <iframe
              width="100%"
              height="300"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1659338463323!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.3970612658477!2d70.73266609281644!3d22.301149831019856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c95b34bbcc5f%3A0x6ad2b557b309a0a1!2sMilk!5e0!3m2!1sen!2sin!4v1663321557558!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContectUs;

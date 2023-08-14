import React from "react";
import { Footer, Navbar } from "../../components";
import why_circle_bg03 from "../../assets/sec-circle-03.png";
import gg_all_pro01 from "../../assets/gg_all_pro01.png";

import "./SubscriptionForm.css";
const SubscriptionForm = () => {
  return (
    <>
      <Navbar />
      <div className="subscr-sec">
        <div className="subscr-con">
          <p className="subscr-heading-main">
            Start With{" "}
            <span className="subscr-inner-heading-main">Our Subscription</span>
          </p>
          <div className="subscr-main-flex">
            <div className="subscr-flex-part-form">
              <div className="subscr-form">
                <div className="form-main-part">
                  <div className="form-inn-part">
                    <label className="sub-form-lbl">First Name</label>
                    <input
                      type="text"
                      className="sub-form-inp"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Middle Name</label>
                    <input
                      type="text"
                      className="sub-form-inp"
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Last Name</label>
                    <input
                      type="text"
                      className="sub-form-inp"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="form-inn-part">
                  <label className="sub-form-lbl">Enter Email</label>
                  <input
                    type="email"
                    className="sub-form-inp sub-form-inp-width"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="form-inn-part">
                  <label className="sub-form-lbl">Enter Mobile Number</label>
                  <input
                    type="email"
                    className="sub-form-inp sub-form-inp-width"
                    placeholder="Enter No"
                  />
                </div>

                <div className="form-inn-part">
                  <label className="sub-form-lbl">Select Product</label>
                  <select
                    id="products"
                    name="products"
                    className="sub-form-inp sub-form-inp-width"
                    placeholder="Select Any One"
                  >
                    <option value="milk">Milk</option>
                    <option value="buttermilk">Butter Milk</option>
                    <option value="Ghee">Ghee</option>
                    <option value="Lasi">Lasi</option>
                  </select>
                </div>

                <div className="form-inn-part">
                  <label className="sub-form-lbl">Select Frequency</label>
                  <select
                    id="day"
                    name="day"
                    className="sub-form-inp sub-form-inp-width"
                    // placeholder="Select Any One"
                  >
                    <option value="milk">Everyday</option>
                    <option value="buttermilk">On Interval</option>
                    <option value="Ghee">Customize</option>
                    {/* <option value="Lasi">Lasi</option> */}
                  </select>
                </div>

                <div className="form-inn-part">
                  <label className="sub-form-lbl">Select Packing</label>
                  <select
                    id="packing"
                    name="Packing"
                    className="sub-form-inp sub-form-inp-width"
                    // placeholder="Select Any One"
                  >
                    <option value="glassbottle">Glass Bottle</option>
                    <option value="plasticbottle">Plastic Bottle</option>
                    <option value="pouch">Pouch</option>
                    <option value="tetra">Tetra</option>
                  </select>
                </div>

                <div className="form-main-part form-main-part-justy-betw">
                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Start Date</label>
                    <input
                      type="date"
                      className="sub-form-inp"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-inn-part">
                    <label className="sub-form-lbl">End Date</label>
                    <input
                      type="date"
                      className="sub-form-inp"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* <div className="form-main-part form-main-part-justy-betw"> */}
                <div className="form-inn-part">
                  <label className="sub-form-lbl">Street Address</label>
                  <input
                    type="text"
                    className="sub-form-inp sub-form-inp-width"
                    placeholder="Street Address"
                  />
                </div>
                <div className="form-inn-part">
                  <label className="sub-form-lbl">Landmark</label>
                  <input
                    type="text"
                    className="sub-form-inp sub-form-inp-width"
                    placeholder="Landmark"
                  />
                </div>
                {/* </div> */}

                <div className="form-main-part form-main-part-justy-betw">
                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Flat No/Block No</label>
                    <input
                      type="text"
                      className="sub-form-inp sub-form-inp-width2"
                      placeholder="Flat No/Block No"
                    />
                  </div>

                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Enter Pincode</label>
                    <input
                      type="text"
                      className="sub-form-inp sub-form-inp-width2"
                      placeholder="Pincode City"
                    />
                  </div>

                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Select State</label>
                    <select
                      id="state"
                      name="State"
                      className="sub-form-inp sub-form-inp-width2"
                      // placeholder="Select Any One"
                    >
                      <option value="test1">Select Any One</option>

                      <option value="test1">Gujarat</option>
                      <option value="test2">Maharashtra </option>
                      <option value="test3">Rajasthan</option>
                      <option value="test4">UP</option>
                    </select>
                  </div>

                  <div className="form-inn-part">
                    <label className="sub-form-lbl">Select Country</label>
                    <select
                      id="state"
                      name="State"
                      className="sub-form-inp sub-form-inp-width2"
                      // placeholder="Select Any One"
                    >
                      <option value="test1">Select Any One</option>

                      <option value="test1">Gujarat</option>
                      <option value="test2">Maharashtra </option>
                      <option value="test3">Rajasthan</option>
                      <option value="test4">UP</option>
                    </select>
                  </div>
                </div>

                <div className="check-flex">
                  <input type="checkbox" className="signup-txt-check" />
                  <label className="check-lbl">
                    I Accept all Terms & Conditions
                  </label>
                </div>
                <button type="submit" className="form_btn">
                  Submit
                </button>
              </div>
            </div>
            <div className="subscr-flex-part-img">
              <div className="subscr-imgbox">
                <img src={why_circle_bg03} className="subscr-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubscriptionForm;

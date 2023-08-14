import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./Report.css";

const Report = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <section className="report">
        <div className="rp-header">Milk Lab Report</div>
        <div className="rp-tbl">
          <h6>All Measurements are in percentage per 100 grams</h6>
          <table>
            <tr>
              <th>Date</th>
              <th>Fat</th>
              <th>SNF</th>
              <th>Protein</th>
              <th>Lactose</th>
            </tr>
            <tr>
              <td>28/07/2022</td>
              <td>1%</td>
              <td>10%</td>
              <td>14%</td>
              <td>6%</td>
            </tr>
            <tr>
              <td>28/07/2022</td>
              <td>1%</td>
              <td>10%</td>
              <td>14%</td>
              <td>6%</td>
            </tr>
            <tr>
              <td>28/07/2022</td>
              <td>1%</td>
              <td>10%</td>
              <td>14%</td>
              <td>6%</td>
            </tr>

            <tr>
              <td>28/07/2022</td>
              <td>1%</td>
              <td>10%</td>
              <td>14%</td>
              <td>6%</td>
            </tr>
            <tr>
              <td>28/07/2022</td>
              <td>1%</td>
              <td>10%</td>
              <td>14%</td>
              <td>6%</td>
            </tr>
          </table>{" "}
        </div>
      </section>
      <Footer className="home-footer" />
    </>
  );
};

export default Report;

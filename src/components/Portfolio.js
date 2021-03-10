import React from "react";
// import '../../App.css';
import "../components/Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

export default function Products() {
  return (
    <div className="portfolio-color ">
      <div>
        <h1 className="portfolio-setting">Food Apps</h1>
        <p style={{ fontStyle: "normal", color: "gray" ,marginLeft:"40px"}}>
          Foods App merupakan project desain berbasis mobile yang dikembangkan
        </p>
        <p style={{ fontStyle: "normal", color: "gray" ,marginLeft:"40px"}} >oleh tim insight. Desain dibuat berdasarkan kebutuhan dari klien.</p>
      </div>
      <br />
          <div className="mb-2">
            <Button className="portfolio-button" outline color="warning">
              {" "}
              Detail Projeck{" "}
            </Button>{" "}
          </div>
      <img className="portfolio-img" src="/images/portfolio.png"></img>

      <div className="edu-template">
        <div className="edu-image"> </div>
        {/* <img className="edu-img" src="/images/eduimg.png"></img> */}
        <div>
          <h1 className="template-setting" >Education Template</h1>
          <p style={{ fontStyle: "normal", color: "gray" }}>
            Template ini merupakan project tentang edukasi yang diminta oleh
            klien kami. template ini ditujukan kepada anak - anak usia maksimal
            12 tahun
          </p>
          <br />
          <div className="mb-2">
            <Button className="edu-button" outline color="primary">
              {" "}
              Detail Projeck{" "}
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

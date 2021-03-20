import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


function Footer() {
  return (
    <div>
      <p className="footer-color"></p>
      <h4 className="footer-text">
        Sudah siap memaksimalkan{" "}
        <span style={{ color: "yellow", marginLeft: "10px" }}>
          binsnis anda?
        </span>{" "}
      </h4>
      <input
        placeholder="Masukkan email anda...."
        className="border-footer"
      ></input>

      <br />
      <p className="line-styling"></p>
<img
                style={{ marginRight: "40px", height: "35px" }}
                src="/images/sidelogo.png"
              ></img>
              <span><img
                style={{ marginRight: "40px", height: "35px" }}
                src="/images/sidelogo.png"
              ></img></span>
      <h3 className="insight-styling">
        Insight{" "}  
        <span className="about-us" > About Us</span>{" "}
        <span className="contact-us"  >
          Contact Us
        </span>
        <span  className="follow-us" >Follow Us</span>{" "}
      </h3>

      <p className="p-styling">
        Build your creative ideas into{" "}
        <span  className="p-styling-2" style={{ marginLeft: "124px", fontFamily: "fantasy" }}>
          Our Project Meet{" "}
          <span className="p-styling-3" style={{ marginLeft: "74px", fontFamily: "fantasy" }}>
            Hello@insight.id{" "}
            <span>
              {" "}
              <img
              
                style={{ marginLeft: "60px", height: "35px" }}
                src="/images/icon1.png"
              ></img>
            </span>{" "}
            <span>
              {" "}
              <img
                style={{ marginLeft: "10px", height: "35px" }}
                src="/images/icon2.png"
              ></img>
            </span>{" "}
            <span>
              {" "}
              <img
                style={{ marginLeft: "10px", height: "35px" }}
                src="/images/icon3.png"
              ></img>
            </span>{" "}
            <span>
              {" "}
              <img
                style={{ marginLeft: "10px", height: "35px" }}
                src="/images/icon4.png"
              ></img>
            </span>
          </span>
        </span>
      </p>
      <p  className="reality-with" style={{ color: "white", marginLeft: "180px", fontFamily: "fantasy" }}>
        reality with us{" "}
        <span style={{ marginLeft: "220px", fontFamily: "fantasy" }}>
          the team Storeas
        </span>
        <span style={{ marginLeft: "90px", fontFamily: "fantasy" }}>
          0334-4334-3434
        </span>
      </p>
      <p></p>
    </div>
  );
}

export default Footer;

import React from "react";
import { Button } from "reactstrap";
import "./RoundImgSec.css";
function RoundImgSec() {
  return (
    <div>
     
      <img className="round-img" src="/images/tworoundimg.png"></img>
      {/* <img className="icon-1"src="/images/icon1.png"></img> */}

      <h1 className='roundimg-content'>
      Bangun ide-ide kreatif Anda
      </h1>
      <p className='paraghaf-tag'>Kami adalah agensi kreatif yang akan membantu
anda memaksimalkan bisnis anda.</p>

<div className="mb-2">
            <Button className="about-button" outline color="primary">
              {" "}
              Hubungi Kami{" "}
            </Button>{" "}
          </div>
          <div className="mb-2">
          <Button className="about-two" color="danger">Tentang Kami</Button>{' '}
          </div>
    </div>
  );
}
export default RoundImgSec;

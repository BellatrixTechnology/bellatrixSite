import React, { Component } from "react";
import "../components/cards.css";
import "bootstrap/dist/css/bootstrap.css";

import CardItem from "../CardItem";
class 
GroupImag extends Component {
  render() {
    return (
      <div>
        <img className="group-Img" src="/images/groupImg.png"></img>
        <h1 className='group-cards-content'>
        Tentang Kami
      </h1>
      <p  className='progress-line'></p>
      <p className='groupcards-paraghaf-tag'>Insight merupakan kreatif agency yang bergerak di bidang branding. kami menyediakan berbagai macam jenis layanan mulai dari UI/UX, logo desain, desain produk, optimisasi SEO, development dan masih banyak lagi.</p>
      </div>
    );
  }
}

export default GroupImag;

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import RoundImgSec from '../RoundImgSec';
import Footer from '../Footer';

function Home() {
  return (
       <div className="bg-color">
      <img className="round-img" src="/images/tworoundimg.png"></img>
    
      <RoundImgSec />
      <Cards />
      <Footer />
    </ div>
  );
}

export default Home;

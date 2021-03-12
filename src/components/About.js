import React from 'react';
import '../../src/App.css';
import Cards from '../components/Cards';
import RoundImgSec from '../components/RoundImgSec';
import Footer from '../components/Footer';
import Testimonials from "../components/Testimonial"
function Home() {
  return (
       <div className="bg-color">
      <RoundImgSec />
      <Cards />
      <Footer />
 
    </ div>
  );
}

export default Home;

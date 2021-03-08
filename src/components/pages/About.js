import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import RoundImgSec from '../RoundImgSec';
import Footer from '../Footer';

function Home() {
  return (
       <div className="bg-color">
        {/* <h1 className='text-left'>dcsfsddfdfdfd</h1> */}
      <RoundImgSec />
      <Cards />
      <Footer />
    </ div>
  );
}

export default Home;

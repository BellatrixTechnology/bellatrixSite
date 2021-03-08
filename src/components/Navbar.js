import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
<img className='img-logo' src="/images/logowhite.png"></img>            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/service'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICE
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              PORTFOLIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Testimonial'
                className='nav-links'
                onClick={closeMobileMenu}
              >
           TESTIMONIAL
              </Link>
            </li>

          </ul>     


        </div>
      </nav>
    </>
  );
}

export default Navbar;

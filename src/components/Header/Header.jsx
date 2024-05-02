import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './images/logo.png';
import Person from './images/account.png';
import Heart from './images/heart.png';
import search from './images/search.png';
import Store from './images/store.png';
import Hero from '../Hero_section/Hero';
import Shop from '../Shop/Shop';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Bars from './images/bars.png';
import Close from './images/close.png';
import './Header.css';

function Header() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleMenu = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <>
        <header>
          <nav>
            <div className="leftlogo">
              <img src={Logo} alt="" className="logo" />
            </div>
            <div className="centername">
              <ul className='desktop'>
                <li>
                  <Link to="/Hero">Home</Link>
                </li>
                <li>
                  <Link to="/Shop">Shop</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="last">
              <img src={Person} alt="" className="person" />
              <img src={search} alt="" className="person" />
              <img src={Heart} alt="" className="person" />
              <img src={Store} alt="" className="person" />
            </div>
            <div className="lastresp">
              <img
                className="bars"
                style={{ display: contentVisible ? 'none' : 'block' }}
                src={Bars}
                alt="Bar Icon"
                onClick={toggleMenu}
              />
              <img
                className="close"
                style={{ display: contentVisible ? 'block' : 'none' }}
                src={Close}
                alt="Close Icon"
                onClick={toggleMenu}
              />
            </div>
          </nav>
        </header>
        <div className="centerrespo" style={{ display: contentVisible ? 'block' : 'none' }}>
          <ul className="ulrespo">
          <Link to="/Hero"><li>Home</li></Link>
          <Link to="/Shop"><li>Shop</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contactt</li></Link> 
          </ul>
        </div>
    </>
  );
}

export default Header;


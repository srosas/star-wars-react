import React from 'react';
import starWarsLogo from '../images/star-wars-logo.png'
import '../styles/Header.css'

const Header = () => (
  <div className='header'>
    <img className="star-wars-img" src={starWarsLogo} alt="Star Wars React Application" />
    <h2>Click Character to show their movies</h2>
  </div>
);

export default Header;


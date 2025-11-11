import React from 'react';
import reactLogo from '../assets/react.svg'

export const NavBarCom : React.FC = () => {

  return (

    <nav className='nav-bar-sty' style={{  display: 'flex', padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <a href="#home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: 'white', textDecoration: 'none' }}>
        <img src={reactLogo} className="nav-log-sty" alt="React logo" />
        <p style={{ paddingLeft: '1rem' }}>Tech Geek</p>
      </a>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>

  );

}

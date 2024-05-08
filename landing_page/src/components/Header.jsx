import React from 'react'
import "./styles/header.css"
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

function Header() {
  const[windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <header>
      <div className='row header-wrapper'>
        <img src="" alt="Logo" />
        {windowWidth >= 820 ? <Nav /> : <MobileNav />}
      </div>
    </header>
  )
}

export default Header;
import React, {useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
const tags = ['Home', 'About', 'Services', 'Solutions', 'Clients' , 'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100); // Change value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolled ? "navbaro" : "navbar"}>
      <div className="logo"><img src="mozon.png" alt="image" /></div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {tags.map((tag, index) => (
          <a href={`#${tag.toLowerCase()}`} key={index} onClick={()=>setMenuOpen(!menuOpen)} className="nav-link" >
            {tag}
          </a>
        ))}
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
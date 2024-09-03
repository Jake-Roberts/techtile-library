'use client'
import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='menuContainer'>
      <button className='menuButton' onClick={toggleMenu}>
        {/* <div className='circle'></div> */}
        <span>Menu</span>
      </button>
      {isOpen && (
        <div className='menu'>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#our-work">Our Work</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;


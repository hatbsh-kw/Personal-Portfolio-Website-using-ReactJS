import React from 'react'

function Navbar() {
  return (
    <nav>
      <a href="#" className='logo'>
        Software Engineer
      </a>
      <input className='menu-btn' type="checkbox" id="menu-btn"/>
      <label className='menu-icon' for="menu-btn">
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'> 
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Portfollio</a></li>
      </ul>
      <a href="#" className='Hey'>Hey!</a>
    </nav>
  )
}

export default Navbar

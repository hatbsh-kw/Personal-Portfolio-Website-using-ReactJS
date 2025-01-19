import React from 'react'

function Navbar() {
  return (
    <nav>
      <a href="#" className='logo'>
        Web Develeoper
      </a>
      <input className='menu-btn' type="checkbox" />
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
    </nav>
  )
}

export default Navbar

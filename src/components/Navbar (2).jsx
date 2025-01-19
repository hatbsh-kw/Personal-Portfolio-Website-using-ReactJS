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
    </nav>
  )
}

export default Navbar

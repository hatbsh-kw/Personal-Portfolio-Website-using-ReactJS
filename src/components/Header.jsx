import React from 'react';
import Navbar from './Navbar/Navbar';
import image1 from '../images/Photoroom-20250119_160434.png';
// import heroImage from '../images/service.png'; // Import hero image
// import serviceImage1 from '../images/service.png'; // Import service image 1
// import serviceImage2 from '../images/service.png'; // Import service image 2
// import serviceImage3 from '../images/service.png'; // Import service image 3

function Header() {
  return (
    <div className='main'>
      <img className='img' src={image1} alt="Main" />
      <Navbar />
      <div className='name'>
        <p className='heading'>Looking For A Designer!</p>
        <h1>I'm <span>Habtamu</span> Kebede</h1>
        <p className='details'>
          A Software Engineering student passionate about full-stack web development.
          I have experience with HTML, CSS, JavaScript, React, and MySQL, and
          I’m proficient with Git/GitHub and Visual Studio Code etc.
        </p>
        <div className='header-btns'>
          <a href="#" className='btn-1'>Hire Me</a>
          <a href="#" className='btn-2'>Download CV</a>
        </div>
      </div>

      <div className="arrow"></div>
</div>
  );
}

export default Header;

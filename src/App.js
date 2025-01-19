import React from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';


function App() {
  return (
    <div className='App'>
     <Header />
     <Contact />
     <Services />
     <About />
   
    </div>     
    
    
  );
}

export default App;

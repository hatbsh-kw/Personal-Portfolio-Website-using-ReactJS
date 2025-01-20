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
     <About />
     <Services />
     <Contact />
</div>     
    
    
  );
}

export default App;

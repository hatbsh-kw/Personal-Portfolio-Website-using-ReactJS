import React from 'react';
import Card from './Cards/Card';
import image1 from './Cards/android.jpg'
import image2 from './Cards/css.png'
import image3 from './Cards/html.png'
import Data from './Cards/Data';




function Services() {
  return (
    <div className='service'>
      <div className='service-heading'>
        <h1>Services</h1>
        <p>These are the Services I provode you</p>

      </div>
      <div className='b-container'>
        <Card 
        stype={Data[0].stype}
        simage={image1}
        sdescription={Data[0].sdescription}
        />
         <Card 
        stype={Data[1].stype}
        simage={image2}
        sdescription={Data[1].sdescription}
        />
         <Card 
        stype={Data[2].stype}
        simage={image3}
        sdescription={Data[2].sdescription}
        />
         
        

      </div>
      
      
    </div>
  )
}

export default Services

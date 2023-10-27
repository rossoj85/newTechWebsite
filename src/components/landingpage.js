import React from 'react';
import Welcome from './welcome';
import AboutUs  from  './aboutUs';
import OurWork from './ourWork';
import Services from './services';
import Contact from './contact';
export default (props)=> {
  
    
        console.log('Landing Page Props', props)
        let language = props.language
        
      return (
        <div className='landingPage'>
          <Welcome language={language} />
          <AboutUs language={language}/>
          <OurWork language={language} />
          <Services language={language} />
          <Contact  language={language} />
        </div>
      );
    
  }
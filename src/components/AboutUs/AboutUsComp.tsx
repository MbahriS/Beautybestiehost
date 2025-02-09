import React from 'react';
import '../../styles/AboutUs.css';

const AboutUsComp: React.FC = () => {
    return (
     <div className='about-us__contaienr'>
        <div className='aboutus__title'>
          <h1>ABOUT US</h1>
        </div>
        <div className='aboutus__content'>
          <img src='images/aboutus.png'
               alt="logo"/>
          <div className='aboutus__text'>
            <div className='aboutus__text1'>
              <p>Change Your Life With</p>
              <p>Beauty</p>
            </div>
            <div className='aboutus__text2'>
              <p>Come To Our Website Which Provides</p>
              <p>Everything You Need</p>
            </div>
          </div>
        </div>
     </div>
    );
  };
  
  export default AboutUsComp;
  
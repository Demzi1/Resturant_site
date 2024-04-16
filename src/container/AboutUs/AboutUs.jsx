import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon'/>
        <p className='p__opensans'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Animi ipsam minus, aspernatur sapiente expedita consequatur magni? 
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt='knife img'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon'/>
        <p className='p__opensans'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Animi ipsam minus, aspernatur sapiente expedita consequatur magni? 
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

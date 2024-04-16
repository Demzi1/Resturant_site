import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../component';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef img'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Words"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote img'/>
          <p className='p__opensans'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elitanimi cumque! Accusamus necessitatibus ut reiciendis officia fugiat.
            
          </p>
        </div>
        <p className='p__opensans'>Animi ipsam minus, aspernatur sapiente expedita consequatur magni? 
            Tenetur nihil officia corrupti exercitationem dignissimos 
            animi cumque! Accusamus necessitatibus ut reiciendis officia fugiat!</p>
      </div>
      <div className='app__chef-sign'>
        <p className=''>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign img'/>
      </div>
    </div>
  </div>
);

export default Chef;

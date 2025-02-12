import React from 'react';
import './Header.css';
import {images} from '../../constants';
import { SubHeading } from '../../component';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info' >
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>  
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Animi ipsam minus, aspernatur sapiente expedita consequatur magni? 
       Tenetur nihil officia corrupti exercitationem dignissimos 
       animi cumque! Accusamus necessitatibus ut reiciendis officia fugiat!
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header__img'/>
    </div>
  </div>
);

export default Header;

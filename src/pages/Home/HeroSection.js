import React from 'react'
import './HeroSection.css';
import { NavLink } from 'react-router-dom';
import Animation from '../../common/GirlAnimation';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Banner from './Banner';
import Testimonials from './Testimonials';
const HeroSection = () => {
  return (
    <>
    <div className='main'>
      <div>
        <div className='content'>
          <h1 className='content-heading'>Every Purchase Will Be Made With Pleasure</h1>
          <p className='content-para'>Buying and selling of goods or services using the internet</p>
        </div>
        <div className='square'></div>
        <NavLink to="/products" className="btn-link">
          <button className='products-btn'>
            <div>Start Shopping </div> 
            <div className='arrow-icon'><FaArrowAltCircleRight /></div>
          </button>
        </NavLink>
      </div>
      <div className="img-animation">
        <Animation />
      </div>
    </div>
    {/* <div style={{display:"flex",justifyContent:"center"}}>
      <Banner />
    </div> */}
    <Testimonials />
    </>
  )
}

export default HeroSection
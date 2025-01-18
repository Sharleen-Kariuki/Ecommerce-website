import React from 'react'
import './Hero2.css'
import arrow_icon from '../Assets/arrow.png'
import hero2_image from '../Assets1/Hero2_photo.png'


const Hero2 = () => {
  return (
    
       <div className='hero2'>
        <div className="hero2-right">
                  <img src={hero2_image} alt="" />
              </div>
              <div className="hero2-left">
                  <h2>KNOW MORE</h2>
                  <div>
                          <h2>ABOUT US</h2>
                      <p>Welcome to Beuta Paints Company, where expertise meets excellence. With decades of experience in the industry, we are proud to be a trusted leader in delivering top-quality paint products and services. Our commitment to integrity and reliability ensures that we provide our clients with the finest solutions tailored to their specific needs.</p>
                      
                  </div>
                  <div className="hero2-latest-btn">
                      <div>Read More</div>
                      <img src={arrow_icon} alt="" />
                  </div>
              </div>
              
          </div>
  )
}

export default Hero2

import React from 'react'
import photos from '../images/Group 77.png'
 const  Hero = () => {
  return (
    <section className='hero'>
        <img src={photos} alt='' className='hero-photo'/>
    <h1 className='hero-header'>Online Experinences</h1>
    <p className='hero-text'>Join unique interactive activities lead by hosts—all without leaving home</p>
    </section>
  )
}

export default Hero
import React from 'react'
import './About.css'
import cont1 from '../images/cont1.jpg'

const About = () => {
  return (
    <div>
      <section className='sec-about'>
        <h1>"Welcome to Layers Restaurant – Where Flavor Meets Tradition"</h1>
      </section>
      <section className='sec-about1'>
        <h2>Our Story</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 text'>
                    <h5>WELCOME!!!</h5>
                    <p>Welcome to LAYERS, where luxury meets comfort, and every stay is an unforgettable experience. Nestled in the heart of Coimbatore, our hotel is designed to provide you with the perfect blend of modern elegance and warm hospitality. Whether you're here for business, leisure, or a special occasion, we are committed to making your stay exceptional.</p>
                    <p>At LAYERS, we pride ourselves on our world-class amenities, including list key amenities, e.g., a rooftop pool, fine dining restaurant, spa, fitness center, etc., and our dedicated team is here to ensure your every need is met. Each of our beautifully appointed rooms and suites offers a serene retreat, featuring list room features, e.g., plush bedding, stunning views, high-speed Wi-Fi, etc..</p>
                    <h6>"Where every moment is crafted with care."</h6>
                </div>
                <div className='col-lg-6 pic'>
                    <img src={cont1}/>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}

export default About

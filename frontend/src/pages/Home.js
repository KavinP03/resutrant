import React from 'react'
import './Home.css'
import crao1 from '../images/crao1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/caro3.avif'
import cont1 from '../images/cont1.jpg'
import bgg from '../images/bgg.avif'
import Food from '../products/Food.js'
import Spl from '../products/Spl.js'
import tacos from '../images/tacos.jpg'
import qual from '../images/qual.jpg'
import buri from '../images/buri.jpg'
import reimg from '../images/reim.jpg'

const Home = () => {
  return (
    <div>
      <section className='sec-carousel'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={caro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crao1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={reimg} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </section>
      <section className='sec-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 content'>
              <h2>WELCOME!!!</h2>
              <p>Welcome to LAYERS, where luxury meets comfort, and every stay is an unforgettable experience. Nestled in the heart of Coimbatore, our hotel is designed to provide you with the perfect blend of modern elegance and warm hospitality. Whether you're here for business, leisure, or a special occasion, we are committed to making your stay exceptional.</p>
              <p>At LAYERS, we pride ourselves on our world-class amenities, including list key amenities, e.g., a rooftop pool, fine dining restaurant, spa, fitness center, etc., and our dedicated team is here to ensure your every need is met. Each of our beautifully appointed rooms and suites offers a serene retreat, featuring list room features, e.g., plush bedding, stunning views, high-speed Wi-Fi, etc..</p>
              <h6>"Where every moment is crafted with care."</h6>
            </div>
            <div className='col-lg-6 bg'>
              <div className='picture'>
                <img src={cont1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sec-three'>
        <h1>Menu</h1>
        <div className='container'>
          <div className='row'>
            {Food.map((item) => (
              <div className='col-lg-4 dir'>
                <div className='card' key={item.id}>
                  <img src={item.img} className='card-img-top' />
                  <div className="card-body">
                    <h5 className="card-title">{item.des}</h5>
                    <p className="card-text">{item.ab}</p>
                    <h6 className='card-text'>{item.price}</h6>
                    <button type="button">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='sec-four'>
        <h1>SPECIAL OFFERS</h1>
        <div className='container'>
          <h2>Chef's Special Dish of the Day</h2>
          <div className='row'>
            {Spl.map((item) => (
              <div className='col-lg-4 chef'>
                <div className='card' key={item.id}>
                  <img src={item.img} className='card-img-top' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.des}</h5>
                    <p className='card-text'>{item.ab}</p>
                    <h6 className='card-text'>{item.price}</h6>
                    <button type="button">Add to cart</button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='sec-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 of'>
              <div className='offer'>
                <h2>Golden Hour Discounts</h2>
                <p>Offer discounts on drinks, appetizers, or desserts during specific hours (e.g., 3 PM–6 PM).</p>
              </div>
            </div>
            <div className='col-lg-6 ofr'>
              <img src={bgg} />
            </div>
          </div>
        </div>
      </section>
      <section className='sec-six'>
        <h1>LAYERS SPECIAL</h1>
        <div className='container'>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={tacos} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Tacos</h5>
                  <p>"Crunchy? Chewy? Both. A crunchy and chewy flatbread filled with Mexican paneer, creamy habanero sauce, crisp shredded lettuce, fajita veggies & pico de galo. </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={qual} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Quesadillas</h5>
                  <p>Meal includes 1 Chicken Melted Cheese Quesadilla, 1 Seasoned Fries and 1 beverage of choice .</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={buri} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Burrito</h5>
                  <p>"It's all you want just in a bowl filled with Mexican seasoned rice, fajita veggies, pinto beans,seasoned nachos, Mexican pico de galo, creamy jalapeno sauce & sour cream.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

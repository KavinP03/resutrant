import React from 'react'
import Layspl from '../products/Layspl'
import './Layersspl.css'

const Layersspl = () => {
  return (
    <div>
      <section className='sec-layer'>
        <h1>LAYERS SPECIAL</h1>
        <div className='container'>
          <div className='row gy-2'>
            {Layspl.map((item) => (
              <div className='col-lg-3 last'>
                <div className='card sp' key={item.id}>
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
    </div>
  )
}

export default Layersspl

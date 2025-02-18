import React from 'react'
import Lay from '../products/Lay'
import './Menu.css'


const Menu = () => {
  return (
    <div>
      <section className='sec-menu'>
        <h1>Our Menu</h1>
        <div className='container'>
        <div className='row gy-2'>
                {Lay.map((item)=>(
                    <div className=' col-lg-3 fd1'>
                        <div className='card blk' key={item.id}>
                            <img src={item.img} className='card-img top'/>
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
    </div>
  )
}

export default Menu

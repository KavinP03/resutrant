import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <section className=' sec-scroll'>
          
          <h5>Welcome to LAYERS!!</h5>
          
        </section>
      <section className="sec-navbar">
        <div className="row">
            <div className="col-lg-3 name">
                <h1>Layers</h1>
            </div>
            <div className='col-lg-6 nav'>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About us</li></Link>
                    <Link to='/menu'><li>Menu</li></Link>
                    
                    <Link to='/layersspl'><li>Layers Spl</li></Link>
                </ul>
            </div>
            <div className='col-lg-3 but'>
                <Link to='/bookhere'><button type="button">Boook Here</button></Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar

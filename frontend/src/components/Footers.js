import React from 'react'
import './Footers.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footers = () => {
  return (
    <div>
      <section className='footer'>
        <div className='container'>
        <div className='row'>
           <div className='col-lg-4 ft1'>
            <h6>Contact US</h6>
            <form>
                <label>Address:</label>
                <input type='text' placeholder='12,Flav Street,Coimbatore'/><br/>
                <label>Phone:</label>
                <input type='text' placeholder='+91 98765 43210'/><br/>
                <label>Email:</label>
                <input type='text' placeholder='info@layers.com'/><br/>
            </form>
           </div>
           <div className='col-lg-4 ft2'>
            <h6>Opening Hours</h6>
            <form>
                <label>Monday - Friday:</label>
                <input type='text' placeholder='11:00 AM - 10:00 PM'/><br/>
                <label>Saturday - Sunday:</label>
                <input type='text' placeholder='10:00 AM - 11:00 PM'/><br/>
                <label>Happy Hours:</label>
                <input type='text' placeholder='3:00 PM - 6:00 PM (Daily)'/><br/>
            </form>
           </div>
           <div className='col-lg-4 ft3'>
            <h6>Follow US</h6>
            <div className='icons'>
            <FaXTwitter />
            <FaInstagram />
            <FaFacebookF />
            </div>
           </div>
        </div><hr/>
        
        <h6>© 2023 Layers Restaurant. All rights reserved.<br/>
        Crafted with ❤️ by Your Layers.</h6>
        
        </div>
      </section>
    </div>
  )
}

export default Footers

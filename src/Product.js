import React from 'react'
import Home from "./Home.css"
import Mobile from "./vivo.jpg"
import  Mobile1 from "./oppo.png"
import Mobile2 from "./poco.jpg"
import Mobile3 from "./iphone.jpg"
import Mobile4 from "./phone.jpg"
import Mobile5 from "./sam.png"

const Product = () => {
  return (
    <div>
        <div className='im1'>    

              <div className='div'>
                <img id='im'src={Mobile}></img>
                <h3 id="price"> Vivo Mobile</h3>
                <h3 id="price">Price:₹18000</h3>
                <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>

              <div className='div'>
              <img id='im'src={Mobile1}></img>
              <h3>Oppo Mobile</h3>
              <h3>Price:₹25000</h3>
              <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>

              <div className='div'>
              <img id='im'src={Mobile2}></img>
              <h3>Poco Mobile</h3>
              <h3>Price:₹30000</h3>
              <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>
              <div className='div'>
                <img id='im'src={Mobile3}></img>
                <h3>IphoneMobile</h3>
              <h3>Price:₹120000</h3>
              <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>
              <div className='div'>
                <img id='im'src={Mobile3}></img>
                <h3>IphoneMobile</h3>
              <h3>Price:₹120000</h3>
              <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>
        
              <div className='div'>
                <img id='im'src={Mobile5}></img>
                <h3>Samsung s23 ultra</h3>
              <h3>Price:₹120000</h3>
              <div className='colo'>
                <div className='c1'></div>
                <div className='c2'></div>
                <div className='c3'></div>
              </div>
              </div>
             
               
                </div>
             

        </div>
        

  )};

export default Product
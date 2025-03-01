// import React from 'react'
import Product from './Product'
import About from './About'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <div className='header1'>
        <div className='home'>       
          <nav className='nav1'>
          <h2>Shafeeq</h2> 
            <ul>
           <Link to ='/'className='Home'><li>Home</li></Link>
            <Link to ="/About"className='About' ><li>About</li></Link>
              <li>CART</li>
              <li>SIGNUP</li>
              </ul>
              </nav>
              <div className='sc'>
                <input className='in1'placeholder='Search'></input>
              </div>
              
                

              </div>
            <Product/>
              </div>
  )}


export default home;
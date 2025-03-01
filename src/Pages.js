import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import About from './About';

const pages = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"element={<Login/>} />
        <Route path="/Home"element={<Home/>} />
        <Route path="/About"element={<About/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default pages;

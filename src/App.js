import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';

import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import FoodGallery from './FoodGallery';
function App() {
  return (
    <>
{/* <ScrollTop/> */}
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <About/>
    <Service/>
    <Skills/>
    <Contact/>
    <Footer/>  */}
    {/* <Routes> */}
     {/* <Route path="/" element={<Home/>}></Route> */}
     {/* <Route path="/about" element={<About/>}></Route> */}
     {/* <Route path="/service" element={<Service/>}></Route> */}
     {/* <Route path="/contact" element={<Contact/>}></Route> */}
     {/* <Route path="/skill" element={<Skills/>}></Route> */}
     {/* <Route path="*" element={<Navigate to="/" />}  /> */}
     {/* </Routes> */}

     <FoodGallery/>
    </>
   
  )
}

export default App;

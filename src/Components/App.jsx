import React from 'react'
import Navbar from './Navbar'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import AnimateRoutes from './AnimateRoutes';

function App() {


  return (
    <div>
        <Navbar/>
        <AnimateRoutes/>
        <Footer/>
    </div>
  )
}

export default App
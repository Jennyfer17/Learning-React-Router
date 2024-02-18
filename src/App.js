import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from './Home';
import { About } from './About';
import { Vans } from './Vans';
import "./server"
import {useState, useEffect} from 'react'
import { NavBar } from './NavBar';
import { Footer } from './Footer';

function App() {

  return (
    <div className='app'>
    <BrowserRouter className="test">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>   
    </div>
  )
}

export default App;
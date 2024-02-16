import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Home';
import { About } from './About';
import { Vans } from './Vans';
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './Home';
import { About } from './About';
import { Vans } from './Vans';
import { VanDetail } from './VanDetail';
import "./server"
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
        <Route path="/vans/:id" element={<VanDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>   
    </div>
  )
}

export default App;
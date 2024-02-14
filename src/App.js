import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Home';
import { About } from './About';

// function App() {
//   return (
//   <BrowserRouter>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Routes>
//       <Route path="/" element={<Home/>}/>  
//       <Route path="/about" element={<About/>}/>  
//     </Routes>
//   </BrowserRouter> 
//   );
// }

// function About() {
//   return (
//     <h1>This is an about page</h1>
//   )
// }

// function Home() {
//   return (
//     <h1>This is the home page!</h1>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
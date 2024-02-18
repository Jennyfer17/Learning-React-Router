// import { NavBar } from "./NavBar"
// import { Footer } from "./Footer"
import {Link} from 'react-router-dom'

export function Home() {
    return (
        <div className="home-page">
            {/* <NavBar /> */}
             <main>
            
            <h2>You got the travel plans, we<br/>got
            the travel vans</h2>

            <p>Add adventure to your life by joining the #vanlife movement.
                <br/>Rent the perfect van to make your perfect road trip. 
            </p>

            <Link to='/van'><button className="home--button">Find your van</button></Link>
        </main>
        {/* <Footer /> */}
        </div>
       
    )
}
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import {Link} from 'react-router-dom'

export function About() {
    return (
        <div className="about-page">
            <NavBar/>
            <header className="about--header">
                <img src={process.env.PUBLIC_URL+'about-hero.png'}className="header--image"/>
            </header>
            <main>
                <h2 className="h2">
                Don’t squeeze in a sedan when  you could relax in a van.
                </h2>
                <p className="paragraph">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br/>
                (Hitch costs extra 😉)
                </p>

                <p className="paragraph">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>

                <div className="about--explore-vans">
                    <h3>
                    Your destination is waiting. <br/>
                    Your van is ready.
                    </h3>

                    <Link to='/vans'>
                        <button className="about--button">
                            Explore our vans
                        </button>
                    </Link>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
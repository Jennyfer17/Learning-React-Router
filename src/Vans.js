import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

export function Vans() {
    return (
        <div className="vans-page">
            <NavBar/>
            <main>
                <h2>Explore our van options</h2>
                <div className="van">
                    {/* <img ></img> */}
                    <span>
                        <p>Modest Explorer</p>
                        <p>$60/day</p>                       
                    </span>
                    <div className="vans-label">
                        <p>Simple</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
import {Link} from 'react-router-dom'

export function Home() {
    return (
        <div className="home-page">
             <main>
            
            <h2>You got the travel plans, we<br/>got
            the travel vans</h2>

            <p>Add adventure to your life by joining the #vanlife movement.
                <br/>Rent the perfect van to make your perfect road trip. 
            </p>

            <Link to='/vans'><button className="home--button">Find your van</button></Link>
        </main>
        </div>
       
    )
}
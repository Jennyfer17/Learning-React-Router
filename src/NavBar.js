import {Link} from "react-router-dom"

export function NavBar() {
    return (
        <nav>
            <Link to='/'>
                <h2>#VANLIFE</h2>
            </Link>
            <div>
                <Link to='/about'>
                    <p>About</p>
                </Link>
                <Link to='/vans'>
                    <p>Vans</p>
                </Link>
            </div>
        </nav>
           
    )
}
import{Link} from 'react-router-dom'
import '../css/Navbar.css'
import CartWidget from './CartWidget'

function NavBar(){
return (
    <nav className='navbar'>
        <Link to="/" className='navbar-brand'>Glitch Market</Link>
        <CartWidget/>
    </nav>
)
}

export default NavBar
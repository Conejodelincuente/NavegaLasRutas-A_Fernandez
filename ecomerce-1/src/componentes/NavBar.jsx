import '../css/Navbar.css'
import Cartwidget from './CartWidget'
function NavBar(){
return (
    <nav className='navbar'>
        <h2>My ecomerce</h2>
        <div>
        <a href="#">Camisetas</a>
        <a href="#">Zapatillas</a>
        <a href="#">Mochilas</a>
        <Cartwidget/>
        </div>

    </nav>
)
}

export default NavBar
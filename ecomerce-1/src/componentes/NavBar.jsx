import '../css/Navbar.css'
import './CartWidget'
import Cartwidget from './CartWidget'
function NavBar(){
return (
    <nav className='navbar'>
        <h2>Soy una barra de navegación</h2>
        <div>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <Cartwidget/>
        </div>

    </nav>
)
}

export default NavBar
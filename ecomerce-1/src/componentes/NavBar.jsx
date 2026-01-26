import '../css/Navbar.css';
function Navbar(){
return (
    <nav className='navbar'>
        <h2>Soy una barra de navegación</h2>
        <div>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a className='carrito' href="#">🛒</a>
        </div>

    </nav>
);
}

export default Navbar
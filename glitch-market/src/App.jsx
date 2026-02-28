import './css/index.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from "./componentes/NavBar"

function App() {
return (
    <>
    <NavBar/>
    <ItemListContainer
      titulo="Bienvenidos a mi ecomerce"/>
    </>
  )
}

export default App

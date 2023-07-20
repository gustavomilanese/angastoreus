import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';



const App = () => {
  return (
    <>
     <NavBar/>
     <ItemListContainer
     greetings = "Bienvenidos a mi tienda"
     />
    </>
  )
}

export default App
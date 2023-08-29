import React from 'react'
import { useEffect,useState } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <ItemListContainer/> 
        <ItemDetailContainer/> */}
        <Route exact path = "/" element = {<ItemListContainer/>}/>
        <Route exact path = "/about" element = {<About/>}/>
        <Route exact path = "/cart" element = {<Cart/>}/>
        <Route exact path = "/category/:category" element = {<ItemListContainer/>}/>
        <Route exact path = "/item/:id" element = {<ItemDetailContainer/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
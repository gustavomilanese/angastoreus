import React from 'react'
import { useEffect,useState } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';
import ShoppingCartContext from './context/ShoppingCartContext';
import Collection from './components/Collection';
import Document from './components/Document';
import SendOrder from './components/SendOrder';


const App = () => {

  return (
    <BrowserRouter>
      <ShoppingCartContext>
        <NavBar/>
        <Routes>
          <Route exact path = "/" element = {<ItemListContainer/>}/>
          <Route exact path = "/cart" element = {<Cart/>}/>
          <Route exact path = "/category/:category" element = {<ItemListContainer/>}/>
          <Route exact path = "/item/:id" element = {<ItemDetailContainer/>}/>
          <Route exact path = "/checkout" element = {<SendOrder/>}/>
        </Routes>
        <Footer/>
        {/* <Document/> */}
        {/* <Collection/> */}
      </ShoppingCartContext>
    </BrowserRouter>
    
  )
}

export default App
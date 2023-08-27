import React from 'react'
import { useEffect,useState } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';


const App = () => {

  const getProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json ()
    return data
  }
 
  const [product, setProducts] = useState([])

  useEffect (()=>{
    getProducts ().then((product) => setProducts (product))
  },[])


  return (
    <>
     <NavBar/>
     <ItemListContainer/> 
    </>
  )
}

export default App
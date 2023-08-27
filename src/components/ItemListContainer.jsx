import React from 'react'
import ItemList from './ItemList'
import {useState,useEffect} from 'react'

const ItemListContainer = () => {

    const productos = [
      { id: 1, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga1.png'},
      { id: 2, title:"Producto B", description:"este es el producto B", price:20, stock:15, imagen: '/src/assets/anga2.png'},
      { id: 3, title:"Producto C", description:"este es el producto C", price:30, stock:25, imagen: '/src/assets/anga3.png'},
      { id: 4, title:"Producto D", description:"este es el producto D", price:30, stock:25, imagen: '/src/assets/anga4.png'},
      { id: 5, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga4.png'},
      { id: 6, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga1.png'},
      { id: 7, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga2.png'},
      { id: 8, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga3.png'},
      { id: 9, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga4.png'},
      { id: 10, title:"Producto A", description:"este es el producto A", price:10, stock:5, imagen: '/src/assets/anga2.png'},
    ]

    const [producto,setProducto] = useState ([]);

    const getProductos = new Promise ((resolve,reject) => {
        if (productos.length > 0) {
          setTimeout (() => {
            resolve (productos)
          }, 2000)
        } else {
        reject (new Error ("no hay productos"))
      }
    })

    useEffect (() => {
      getProductos
      .then((res) => {
        setProducto (res)
      })
      .catch ((error) => {
        console.log(error)
      })
    },[]);
    

    return (
      <div>
        <ItemList productos={productos}/>
      </div>
  )
}

export default ItemListContainer
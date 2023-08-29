import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();

  const productos = [
    { id: 1, title:"Conjunto Turquesa", description:"Conjunto Turquesa de dos piezas", price:"usd 90,00", stock:5, imagen: '/src/assets/anga1.png', category:"cat1"},
    { id: 2, title:"Conjunto Gris con lineas", description:"Conjunto Gris de dos piezas", price:"usd 90,00", stock:15, imagen: '/src/assets/anga2.png', category:"cat1"},
    { id: 3, title:"Conjunto Verde", description:"Conjunto Verde", price:30, stock:25, imagen: '/src/assets/anga3.png', category:"cat1"},
    { id: 4, title:"Conjunto Violeta", description:"Conjunto Violeta", price:30, stock:25, imagen: '/src/assets/anga4.png', category:"cat1"},
    { id: 5, title:"Conjunto Violeta", description:"Conjunto Violeta", price:10, stock:5, imagen: '/src/assets/anga4.png', category:"cat1"},
    { id: 6, title:"Conjunto Turquesa", description:"Conjunto Turquesa de dos piezas", price:"usd 90,00", stock:5, imagen: '/src/assets/anga1.png', category:"cat1"},    
    { id: 7, title:"Conjunto Verde", description:"Conjunto Verde", price:30, stock:25, imagen: '/src/assets/anga3.png', category:"cat1"},
    { id: 8, title:"Top", description:"Conjunto Violeta", price:30, stock:20, imagen: '/src/assets/top1.jpeg', category:"cat2"},
    { id: 9, title:"Top", description:"Conjunto Gris de dos piezas", price:"usd 90,00", stock:15, imagen: '/src/assets/top2.jpeg', category:"cat2"},
    { id: 10, title:"Short pink", description:"Short BB Pink bubble gum BB", price:30, stock:25, imagen: '/src/assets/short.jpeg', category:"cat3"},
  ]


  const [producto, setProducto] = useState([]);

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("no hay productos"));
    }
  });

  useEffect(() => {
    getProductos
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  const filteredProducts = category 
    ? producto.filter(product => product.category === category) 
    : producto;

  return (
    <div>
      <ItemList productos={filteredProducts}/>
    </div>
  );
}

export default ItemListContainer;

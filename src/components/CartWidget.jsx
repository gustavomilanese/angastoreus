import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const { totalItemsInCart } = useContext(CartContext);
  const total = totalItemsInCart ? totalItemsInCart() : 0;

  return (
    <div className='carrito-container'>
        <img src="/src/assets/carrito.png" alt="Icono de carrito" className='cardsize'/>
        <h4 className='estilo-carrito'>{total}</h4>
    </div>
  )
}

export default CartWidget;

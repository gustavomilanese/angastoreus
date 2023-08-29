import { color } from 'framer-motion'
import React from 'react'

const CartWidget = () => {
  return (
    <div className='carrito-container'>
        <img src="src/assets/carrito.png" alt="carrito" className='cardsize'/>
        <h4 className='estilo-carrito'>25</h4>
    </div>
  )
}

export default CartWidget
import { color } from 'framer-motion'
import React from 'react'

const CartWidget = () => {
  return (
    <div className='carrito-container'>
        <img src="src/assets/carrito.png" alt="carrito" />
        <h4 className='estilo-carrito'>5</h4>
    </div>
  )
}

export default CartWidget
import {createContext,useState} from 'react'

export const CartContext = createContext (0)

export const ShoppingCartProvider = ({children}) =>{
    
const [cartItems, setCartItems] = useState ([]);


const totalItemsInCart = () => {
    return cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  }

    return(
    <CartContext.Provider value={{cartItems, setCartItems, totalItemsInCart}}>
            {children}
    </CartContext.Provider>
    )
}

export default ShoppingCartProvider
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Cart = () => {
  const {cartItems,setCartItems} = useContext(CartContext);
  const {totalItemsInCart} = useContext(CartContext);                     

  const totaCart = () => {
    return cartItems.reduce((acc, item) => acc + item.price*item.cantidad, 0);
  }

  const removerDelCarrito = (idProducto) => {
    const existeProducto = cartItems.some(item => item.id === idProducto);

    if (!existeProducto) {
      alert("Producto no encontrado en el carrito.");
    return;
  }

  const itemsActualizados = cartItems.filter(item => item.id !== idProducto);
  setCartItems(itemsActualizados);
};


  return (
    <>
      <Card className="text-left">
        <Card.Header>
          <div>Shopping Cart</div> 
        </Card.Header>

        <div className='card-body-propia'>
            {cartItems.map((item) => (
              <div> 
                <Card.Img className='image-size' src={item.imagen} />
                  <Card.Text className='estilocard'>
                    <Card.Text> {item.description} </Card.Text>
                    <Card.Text> Price us${item.price} - Items:{item.cantidad}</Card.Text>
                    <Card.Text> Subtotal: us${item.cantidad*item.price} </Card.Text>               
                    <Button variant="danger" onClick={() => removerDelCarrito(item.id)}>Remove</Button>
                  </Card.Text>
                </div>  
            ))}
        </div>
        <Card.Footer className="subtotal">
          <Link to={"/"} className="noUnderline">
            <a>Home</a>
          </Link>
          <div>
            <div>Subtotal ({totalItemsInCart()}) us${totaCart()}</div>
              <Link to={"/checkout"} className="noUnderline">
              <button className="btn btn-success">Proceed to checkout</button>
              </Link>          
            </div>
        </Card.Footer>
      </Card>
      <div>
      </div>
    </>
  );
}

export default React.memo(Cart);

import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({producto}) => {

    const {cartItems, setCartItems} = useContext (CartContext);
    const [contador, setContador] = useState(1)
    const [contadorWidget, setContadorWidget] = useState(0)

    const notify = () => {
        toast.success('¡Item have already added to the cart!');
      };

    const sumar = () => {
        if (contador < producto.stock) {
            setContador(contador + 1)
        }
    }


    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        const productoExistente = cartItems.find(item => item.id === producto.id);
        
        if (productoExistente) {
            const cantidadNueva = productoExistente.cantidad + contador;
            if (cantidadNueva <= producto.stock) {
                const nuevosItems = cartItems.map(item => 
                    item.id === producto.id 
                        ? { ...item, cantidad: cantidadNueva } 
                        : item
                );
                setCartItems(nuevosItems);
                setContadorWidget (cantidadNueva);
                toast.success('¡Item have already added to the cart!');
            } else {
                alert("No hay suficiente stock para agregar más de este producto.");
            }
        } else {
            if (contador <= producto.stock) {
                const productoConCantidad = {
                    ...producto,
                    cantidad: contador
                };
                setCartItems([...cartItems, productoConCantidad]);
            } else {
                alert("No hay suficiente stock para agregar este producto.");
            }
        }
    };
    
    

    return (
        <Flex as="div" className="d-flex justify-content-left align-items-center itemcontador">
            <button className="btn btn-outline-primary mr-2" onClick={restar}>-</button>
            <span className="px-4">{contador}</span>
            <button className="btn btn-outline-primary ml-2" onClick={sumar}>+</button>
            <button className="btn btn-primary addcarrito" onClick={addToCart}>Add to Cart</button>
            <ToastContainer/>
            <Link to={"/"} className="noUnderline">
            <button className="btn btn-primary addcarrito">Catalog</button>
            </Link>
        </Flex>
    )
}

export default ItemCount;

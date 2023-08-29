import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap. Asegúrate de tenerlo instalado.

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        // Lógica para agregar el ítem al carrito
        console.log(`Agregar ${contador} ítems al carrito.`);
    }


    return (
        <Flex as="div" className="d-flex justify-content-left align-items-center itemcontador">
            <button className="btn btn-outline-primary mr-2" onClick={restar}>-</button>
            <span className="px-4">{contador}</span>
            <button className="btn btn-outline-primary ml-2" onClick={sumar}>+</button>
            <button className="btn btn-primary addcarrito" onClick={addToCart}>Add to Cart</button>

        </Flex>
    )
}

export default ItemCount;

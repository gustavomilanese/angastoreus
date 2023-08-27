import React from 'react'
import Item from './Item'
import { Row, Col } from 'react-bootstrap';


const ItemList = ({productos}) => {
   
return (
    <>
    <Row>
       {productos.map((p) => {
        return (
            <Item
               key={p.id}
               name={p.title}
               description = {p.description}
               stock={p.stock}
               imagen={p.imagen}
            />
        )
       }
       )}
    </Row>
    </>
)
}

export default ItemList
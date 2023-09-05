import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    
    if (!producto) {
        return <p>Loading</p>;
    }

    console.log(producto)
    console.log(producto.id)

    return (
        <>
            <Card style={{ width: '24rem', margin: 'auto', marginTop: '20px' }}>
                <Card.Img className="imagensize" variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>price: ${producto.price}</Card.Text>
                    <Card.Text>available: {producto.stock}</Card.Text>
                </Card.Body>
                <ItemCount producto={producto}/>
            </Card>
        </>
    );
}

export default React.memo(ItemDetail);

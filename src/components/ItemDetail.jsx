import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    
    if (!producto) {
        return <p>Loading</p>;
    }

    return (
        producto.map((p) => (
            <Card style={{ width: '24rem', margin: 'auto', marginTop: '20px' }}>
                <Card.Img variant="top" src={p.imagen} />
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text>price: ${p.price}</Card.Text>
                    <Card.Text>available: {p.stock}</Card.Text>
                    {/* <Card.Text>Categoría: {category}</Card.Text> */}
                </Card.Body>
                <ItemCount stock={p.stock}/>
            </Card>
        )
    )
    )
}

export default ItemDetail;

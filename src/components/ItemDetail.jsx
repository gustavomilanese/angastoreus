import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    
    if (!producto) {
        return <p>Loading</p>;
    }

    const { id, title, description, price, stock, imagen, category } = producto;

    return (
        <Card style={{ width: '24rem', margin: 'auto', marginTop: '20px' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>price: ${price}</Card.Text>
                <Card.Text>available: {stock}</Card.Text>
                {/* <Card.Text>Categoría: {category}</Card.Text> */}
            </Card.Body>
            <ItemCount stock={stock}/>
        </Card>
    );
}

export default ItemDetail;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, stock, imagen, category }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="imagen" variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* <Card.Text>{category}</Card.Text> */}
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Detail</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;

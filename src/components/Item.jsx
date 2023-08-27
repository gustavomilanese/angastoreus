import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id,name, description, stock, imagen}) => {
  return (
    <>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={imagen}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button variant="primary">Detail</Button>
        </Card.Body>
        </Card>
   
    </>
    )
}

export default Item
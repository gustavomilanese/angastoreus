import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

const ItemList = ({productos}) => {
  return (
    <Row>
      {productos.map((p) => (
        <Item
          key={p.id}
          id={p.id}
          name={p.title}
          description={p.description}
          stock={p.stock}
          imagen={p.imagen}
          category={p.category}
        />
      ))}
    </Row>
  );
}

export default ItemList;

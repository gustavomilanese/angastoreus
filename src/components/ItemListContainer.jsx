import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState ([])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "angadeporte");
    getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setProducts(docs);
    });
}, []);


  const filteredProducts = category 
    ? products.filter(product => product.category === category) 
    : products;




  return (
    <div>
      <ItemList productos={filteredProducts}/>
    </div>
  );
}

export default ItemListContainer;

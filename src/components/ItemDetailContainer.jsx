import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {Firestore, doc, getDoc, getFirestore, snapshotEqual} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect (()=>{
        const db = getFirestore ();
        const oneItem = doc(db, "angadeporte", id);
        getDoc (oneItem).then ((snapshot)=>{
            if (snapshot.exists()){
                setProduct ({
                    id: snapshot.id,  
                    ...snapshot.data()
                });
            }
        });
    }, [id]);  
    

  console.log(product)

    return (
        <div>
            <ItemDetail producto={product} />
        </div>
    );
}

export default ItemDetailContainer;

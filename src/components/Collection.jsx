import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collection = () => {
  
  const [products, setProducts] = useState ([])
  console.log(products)


  useEffect (()=> {
    const db = getFirestore ()
    const itemsCollection = collection (db, "angadeporte")
    getDocs (itemsCollection).then ((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>doc.data())
      setProducts (docs)  
    })
  },[])



  return (
    <div>
        <h1>Productos</h1>
        {
            products.map((product)=>(
                <div key={product.name}>
                    <h4>Producto: {product.title}</h4>
                    <h4>Category: {product.category}</h4>
                    <h4>Precio: {product.price}</h4>
                </div>

            ))
        }
        
    </div>
  )
}

export default Collection
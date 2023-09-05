import {useState, useEffect} from 'react'
import {Firestore, doc, getDoc, getFirestore, snapshotEqual} from 'firebase/firestore'


const Document = () => {
  const [product, setProduct] = useState([])
    console.log(product)

  useEffect (()=>{
    const db = getFirestore ()

    const oneItem = doc (db,"angadeporte", "LNKtqNfDEFt3baIkaARB")
    getDoc (oneItem).then ((snapshot)=>{
        if (snapshot.exists()){
            const docs = snapshot.data ()
            setProduct (docs)
        }
    })
  },[])
    

  return (
    <div>
        <h4>Producto</h4>
        {
            <div>
                <p>Producto:{product.title}</p>
                <p>Categoria:{product.description}</p>
                <p>Precio:{product.price}</p>   
            </div>
        }
    </div>
  )
}

export default Document
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 

const SendOrder = () => {
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [orderId,setOrderId] = useState (null)
    const {cartItems,setCartItems} = useContext(CartContext);

    const db = getFirestore ()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection,order).then (({id}) => 
        setOrderId (id))
        sendOrder()
        setCartItems ([])
    }

    const order = {
        name,
        email
    }

    const ordersCollection = collection (db, "orden")

    const sendOrder = () => {
        const order = {
            buyer: {name,email},
            item: [{cartItems}],
        }
        const ordersCollection = collection (db,"orders")

        addDoc(ordersCollection, order).then (({id})=> setOrderId (id))
    }



  return (
    <div>
        <form className="formcontainer" onSubmit={handleSubmit}>
            <input type="text" className="formcampo" placeholder="Name and Surname"
            onChange={(e)=>setName (e.target.value)}/>
            
            <input type="text" className="formcampo" placeholder="email account"
            onChange={(e)=>setEmail (e.target.value)}/>

            <Button variant="primary" className="formsubmit" type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default SendOrder
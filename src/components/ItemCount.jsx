import React from 'react'
import {useState} from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState (0)
    const sumar =()=>{
        setContador (contador + 1)
    }
    const restar =()=>{
        setContador (contador - 1)
    }
    const reset =()=>{
        setContador (0)
    }

    return (
        <div>
            <p>{contador}</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
            <button onClick={reset}>reset</button>

        </div>
  )
}

export default ItemCount
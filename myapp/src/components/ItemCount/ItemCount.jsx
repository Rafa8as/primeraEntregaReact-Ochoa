import { useState } from "react"
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
    
  const [accountant, setearaccountant] = useState(1)
  const addToCart = () => onAdd(accountant)
  
  
  // FUNCION SUMAR
  const sumar = () => {
      if(accountant < stock){
        setearaccountant (accountant + 1)
      }
    }

  // FUNCION RESTAR
  const restar = () => {
    if (accountant > initial) {
      setearaccountant (accountant - 1)
    }
  }


return (
  <div id="accountant">
      <div id="btnAccountant">
        <button className="btnAccountant btnAccountantSuma" onClick={sumar}>+</button>
        <button className="btnAccountant btnAccountantResta" onClick={restar}>-</button>
      </div>
    <p className="valiuAccountant">{accountant}</p>

    <button className="btnAddToCart" onClick={addToCart}>Agregar al carrito</button>
  </div>
)
}

export default ItemCount
/*
const ItemCount = ({initial=1, stock=10, onAdd}) => {
  return (
    <div>ItemCount</div>
  )
}

export default ItemCount

/*


import ComponenteContainer from "../ComponenteContainer/ComponenteContainer"
import { useState, useEffect } from "react"
export const Items = ({productos} ) => {
const [count,setCount]= useState (0){
    //if (condition){setTimeout (()=>res (productos))}
     //const [bouleano,setBouleano] = useState (0)
      // let count = 0//
      
  
      console.log (count)
    const handleCount = () => {
      setCount (count + 1) 
    }
  
    return (
      <div>
       
      <section>
        <label>click: {}</label>
        <label>cantidad: {count}</label>
        <button onClick={handleCount}> Click</button>
      </section>
     <Formulario />
      </div>
    )
    
    
} 
}
    export default Items
  */
import { useState } from "react"


const ItemCount = ({ initial= 1, stock=10, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = ()=> {
        if (count<stock) {
            setCount(count+1)            
        }
    }
    const restar = ()=> {
        if (count > initial) {
            setCount(count-1)            
        }
    }



 
    return (
      <div className="card mt-5 w-50" >
          <div className="card-body row">
              <div className="col">
              <button className="btn btn-outline-dark w-100" onClick={sumar}> + </button>

              </div>
              <div className="col">
              <center>
              <label>{count}</label>

              </center> 
  
              </div>
              <div className="col">
              <button className="btn btn-outline-dark w-100" onClick={restar}> - </button>

              </div>
          </div>
          <div className="card-footer">
              <button className="btn btn-outline-dark w-100" onClick={()=>onAdd(count)}>Agregar al carrito</button>
          </div>


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
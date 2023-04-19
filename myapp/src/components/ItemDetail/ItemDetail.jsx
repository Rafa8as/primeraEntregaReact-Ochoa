

import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import ButtonCart from "../ButtonCart/ButtonCart"
import ItemCount from "../ItemCount/ItemCount"

import './ItemDetail.css'

const ItemDetail = ({prod}) => {

  const iva = 1.21

  const { addToCart } = useCartContext();
  const [inputType, setInputType] = useState('button');


  const onAdd = (quantity) => {
    addToCart ({...prod, quantity})
    setInputType('input')
  }
  

  return (
    <div id="cartItemDetail">
      <div className="container">
        <h2 className="nameProduct">{prod.name}</h2>
        <img src={prod.photo} alt="imagen producto" className="imgProduct" />
        <p className="descriptionProduct">{prod.description}</p>

       

        <p className="priceProduct">${prod.price * iva}</p>
      </div>

      <div>
        {
          inputType === 'button' ? 
            <ItemCount
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
          : <ButtonCart />     
        }
      </div>
    </div>
  )
}

export default ItemDetail
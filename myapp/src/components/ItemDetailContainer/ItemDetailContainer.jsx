import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../Utils/gFetch'
import Compras from '../Compras/Compras'
import Input from '../Input/Input'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] =useState ({})
  const {idProducto}= useParams()
  const {agregarCart, cartList}= useContext (CartContext)
  console.log (idProducto)
  
  useEffect (()=>{
    gFetch (idProducto)
    .then (resp =>setProduct(resp))

  },
  
  [])

  function onAdd (cantidad ){
    console.log (cantidad)
    console.log (product)
    agregarCart ({...product,cantidad})

  }
  return (
    <ItemDetail product={product}/>,
    <Compras/>
    
    
  )
}

export default ItemDetailContainer
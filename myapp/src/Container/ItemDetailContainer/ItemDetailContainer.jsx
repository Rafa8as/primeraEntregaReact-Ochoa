import {doc, getDoc, getFirestore} from 'firebase/firestore'
import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../Utils/gFetch'
import Compras from '../../components/Compras/Compras'
import Input from '../../components/Input/Input'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemdetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] =useState ({})
  const [loading,setLoading] = useState (true)
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
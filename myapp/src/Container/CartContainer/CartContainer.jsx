import React, { useContext } from 'react'
import { useCartContext } from '../../Context/CartContext'
import Cartlist from "../../components/CartList/CartList"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Form from '../../components/Form/Form'
import './CartContainer.css'

const CartContainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  const generarOrden = () => {
    const order = {}
    order.buyer = dataForm
    order.precioTotal = precioTotal()
    order.productos = cartList.map(({ id, name, price }) => ({ id, name, price }))


    const db = getFirestore()
    const queryCollection = collection(db, 'Order')
    addDoc(queryCollection, order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => { })
  }

  return (
    <div>
      {cartList.map(prodCart => (


        <div className='container'>
          <p key={prodCart.id}>
            <img src="{prodCart.foto}" className='w-20' />
            Nombre : {prodCart.name} -
            Cantidad: {prodCart.Cantidad} -
            Precio: {prodCart.price} {''}

            <button onClick={() => eliminarProducto(prodCart.id)} className='btn btn-danger'>Vaciar carrito</button>


          </p>
        </div>)
      )
      }
      <p> {precioTotal() != 0 && `Precio Total: ${precioTotal()}`} </p>

      <Form />
      <button onClick={() => generarOrden()} className='btn btn-success'>Generar Orden</button>
      <button onClick={vaciarCarrito} className='btn btn-primary'>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer
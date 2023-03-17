import { Firebase } from '@icons-pack/react-simple-icons'
import React, { useContext } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, getFirestore } from "Firebase/firestore"
import Formulario from '../Formulario/Formulario'

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

      <Formulario />
      <button onClick={() => generarOrden()} className='btn btn-success'>Generar Orden</button>
      <button onClick={vaciarCarrito} className='btn btn-primary'>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer
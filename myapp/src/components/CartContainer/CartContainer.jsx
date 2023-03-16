import React, { useContext } from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartContainer = () => {
  const {cartList, vaciarCarrito} = useCartContext ()
  return (
    <div>
      {cartList.map (prodCart => (
        <label key={prodCart.id}>
          <img src="{prodCart.foto}" className='w-20' />
            Nombre : {prodCart.name} -
            Cantidad: {prodCart.Cantidad} -
            Precio: {prodCart.price}
         

        </label>
                          )
                        )
      }
    <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer
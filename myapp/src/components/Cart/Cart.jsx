import { useCartContext } from '../../Context/CartContext'
import './Cart.css'

const Cart = ({producto}) => {

  const { eliminarProducto } = useCartContext()
  const iva = 1.21


  return (
    <div id="cartList">
      <p className="titleCartItem">{producto.name}</p>
      <p className="cartItem">Cantidad: {producto.cantidad}</p>
      <p className="cartItem">Precio: ${producto.cantidad * producto.price * iva}</p>
      <button onClick={() => eliminarProducto(producto.id)} className="btnRemove">eliminar</button>
    </div>
  )
}

export default Cart
import { useCartContext } from '../../Context/CartContext'
import './Cart.css'

const Cart = ({producto}) => {

  const { deleteItem } = useCartContext()
  const iva = 1.21


  return (
    <div id="cartList">
      <p className="titleCartItem">{producto.name}</p>
      <p className="cartItem">Cantidad: {producto.quantity}</p>
      <p className="cartItem">Precio: ${producto.quantity * producto.price * iva}</p>
      <button onClick={() => deleteItem(producto.id)} className="btnRemove">eliminar</button>
    </div>
  )
}

export default Cart
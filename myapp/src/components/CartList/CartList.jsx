import { useCartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'
import './CartList.css'


const CartList = () => {

    const { cartList } = useCartContext()

    return (
      <div id="productCart">
        {cartList.map((producto) => 
          <Cart 
            key={producto.id}
            product={producto}
          />
        )}
      </div>
    )
}


export default CartList
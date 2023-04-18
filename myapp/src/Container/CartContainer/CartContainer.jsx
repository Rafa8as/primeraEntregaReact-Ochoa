import { CartContextProvider, useCartContext } from '../../Context/CartContext'
import FormList from '../../components/FormList/FormList'
import './CartContainer.css'
import NoProds from '../../components/NoProds/NoProds'
import CartList from '../../components/CartList/CartList'

const CartContainer = () => {

  const { totalPrice, totalQuantity } = useCartContext();
  

  return (
    <>
      <div className="container">  
        {totalQuantity() > 0 ?
        <> 
          <CartList/>
          
          <div id="cartCart">
            <p className="titleTotalPrice">El total de su compra es de ${totalPrice()}</p>
          </div>

          <FormList />
        </>
        : <NoProds />
        }

      </div>

     
    </>
  )
}

export default CartContainer
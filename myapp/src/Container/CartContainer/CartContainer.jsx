import {  useCartContext } from '../../Context/CartContext'
import FormList from '../../components/FormList/FormList'
import './CartContainer.css'
import NoProds from '../../components/NoProds/NoProds'
import CartList from '../../components/CartList/CartList'
import Footer from '../../components/Footer/Footer'

const CartContainer = () => {

  const { cantidadTotal, precioTotal } = useCartContext();
  

  return (
    <>
      <div className="container">  
        {cantidadTotal() > 0 ?
        <> 
          <CartList/>
          
          <div id="cartCart">
            <p className="titleTotalPrice">El total de su compra es de ${precioTotal()}</p>
          </div>

          <FormList />
        </>
        : <NoProds />
        }

      </div>

     <Footer/>
    </>
  )
}

export default CartContainer


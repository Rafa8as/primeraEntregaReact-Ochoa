import { Nav} from "react-bootstrap"
import { useCartContext } from "../../Context/CartContext"
import { NavLink } from "react-router-dom"
import './CartWidget.css'

const CartWidget = () => {const {cantidadTotal} = useCartContext ()
  return (
    <div>
    <Nav id="cart">
      <NavLink to = '/cart'>
    <ion-icon name="cart-outline" className="btn btn-primary"></ion-icon>
      </NavLink>
      <div id = "numberCart">
       {cantidadTotal() > 0 && cantidadTotal()}
       </div>
       
      </Nav>
  
    </div>
      
         
   
  )
}

export default CartWidget


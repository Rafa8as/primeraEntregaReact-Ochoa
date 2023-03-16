import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {const {cantidadTotal} = useCartContext ()
  return (
    <div>
    
    <ion-icon name="cart-outline" className="btn btn-primary">
       {cantidadTotal() > 0 && cantidadTotal()}
       </ion-icon>
  
  
    </div>
      
         
   
  )
}

export default CartWidget


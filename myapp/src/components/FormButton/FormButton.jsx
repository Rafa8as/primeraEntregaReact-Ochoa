import { useCartContext } from "../../Context/CartContext";
import './FormButton.css'


const FormButton = () => {

    const { vaciarCarrito } = useCartContext();

  return (
    <div className="btnForm">
        <button className="btnFormStyle btnFormOk">Finalizar compra</button>
        <button onClick={vaciarCarrito} className="btnFormStyle btnFormClear">vaciar carrito</button>
    </div>
  )
}

export default FormButton
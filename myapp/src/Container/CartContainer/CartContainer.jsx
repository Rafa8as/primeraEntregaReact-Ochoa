import { CartContextProvider, useCartContext } from '../../Context/CartContext'
import FormList from '../../components/FormList/FormList'
import './CartContainer.css'
import NoProds from '../../components/NoProds/NoProds'
import CartList from '../../components/CartList/CartList'

function CartContainer() {
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
    
    <>
    <div>
      
      {cartList.map(prodCart => (


        <div className='container'>
          <p key={producto.id}>
            <img src="{producto.foto}" className='w-20' />
            Nombre : {producto.name} -
            Cantidad: {producto.Cantidad} -
            Precio: {producto.price} {''}

            <button onClick={() => eliminarProducto(producto.id)} className='btn btn-danger'>Vaciar carrito</button>


          </p>
        </div>)
      )}
      <p> {precioTotal() != 0 && `Precio Total: ${precioTotal()}`} </p>

      <FormList />
      <button onClick={() => generarOrden()} className='btn btn-success'>Generar Orden</button>
      <button onClick={vaciarCarrito} className='btn btn-primary'>Vaciar carrito</button>
    </div>
    </>
  )
}

export default CartContainer
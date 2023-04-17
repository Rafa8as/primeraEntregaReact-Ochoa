import { createContext, useContext, useState } from "react";

const iva = 1.21
const CartContext = createContext([])

// Cart Context Object
export const useCartContext = () =>  useContext(CartContext)



// incorporando Productos
export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const agregarCart = ( producto ) => {
        const idxProd = cartList.findIndex(product => product.id === producto.id)
        if(idxProd!==-1){
            cartList[idxProd].cantidad += producto.cantidad
            setCartList([...cartList])
            return 
        }
        setCartList( [
            ...cartList,
            producto
        ] )
        
    }
    
    // Precio Total
    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price * iva ), 0)
    
    // Cantidad Total

    const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

    // Eliminar Producto
    const eliminarProducto = (id) => setCartList(cartList.filter(producto => producto.id !== id))
    

    // Vaciar Carrito
    const vaciarCarrito = () =>{
        setCartList([])
    }
 
    return (
        <CartContext.Provider value={{
            cartList, 
            agregarCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}


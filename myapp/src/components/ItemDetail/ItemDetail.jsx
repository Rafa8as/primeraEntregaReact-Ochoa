import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarCart } = useCartContext()

    function onAdd(cantidad) {
        console.log(cantidad)

        agregarCart({ ...product, cantidad })
        setIsCount(false)
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src={product.foto} alt='image' className="w-30" />
                    </div>
                    <div>
                        <p className="" >Nombre: {product.name}</p>
                        <p className="" >Categoría: {product.categoria}</p>
                        <p className="" >Precio: {product.price}</p>
                    
                    </div>
                </div>
                <div className="col-6">
                    {isCount ?
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        :
                        <>
                            <Link to='/cart' className="btn btn-primary">Ir a cart</Link>
                            <Link to='/' className="btn btn-primary">Seguir Comprando</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

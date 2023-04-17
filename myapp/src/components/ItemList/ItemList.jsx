import { memo } from "react"
import Item from "../Item/Item"


const ItemList = memo( ({ productos }) => {
    return (
        <div className="justify-content-center align-item-center" >
            {productos.map(producto => 
            <Item
             key={producto.id} 
            producto={producto} />)

            }
        </div>
    )
})

export default ItemList


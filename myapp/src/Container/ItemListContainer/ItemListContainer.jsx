import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import ItemList from "../../components/ItemList/ItemList"

import { Loading } from "../../components/Loading/Loading"
import './ItemListContainer.css'

const ItemListContainer = ({ saludos }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()
    


    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')

        const queryFilter = idCategoria ? query(queryCollection, where('categoria', '==', idCategoria)) : queryCollection

        getDocs(queryFilter)
            .then(respCollection => setProductos(respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [idCategoria])

    return (
        <>
            <div className="container" id="cardProds">
            {loading ?
                    <div id="cardLoading">
                        <p className="loading">Cargando productos</p>
                        <Spinner animation="grow" className = "spinner"/>
                        </div>
                
                :
                
                    
                    <ItemList productos={productos} />
                
            }
            </div>
        </>
    )
}

export default ItemListContainer
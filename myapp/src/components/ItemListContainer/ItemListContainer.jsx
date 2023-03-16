import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"

export const ItemListContainer = ({ saludos }) => {
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

            {loading ?
                <Loading />
                :
                <>
                    <h2>{saludos}</h2>
                    <ItemList productos={productos} />
                </>
            }
        </>
    )
}


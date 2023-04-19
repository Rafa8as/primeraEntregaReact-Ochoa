import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect,useState } from 'react'

import { useParams } from 'react-router-dom'

import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemdetailContainer.css'



const ItemDetailContainer = () => {
  
  const [prod, setProd] = useState({})
  
  const [loading, setLoading] = useState (true)
  const {productId} = useParams()


  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'Productos', productId)

    getDoc(queryDoc)
    .then(resp => setProd ({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally( ()=> setLoading (false))
  })


  return (
    <>
      {loading ? <p className="loading">Cargando...</p> 
        : <ItemDetail prod={prod}/>
      }
      <div>
       
      </div>
    </>
  )
}

export default ItemDetailContainer
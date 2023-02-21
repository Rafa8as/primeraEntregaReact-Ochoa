let productos = [
    {id: '1',categoria: 'asado', name : "producto 1", price: 250}, 
    {id: '2',categoria: 'gaseosa', name : "producto 2", price: 250},
    {id: '3',categoria: 'cerveza', name : "producto 3", price: 250},
    {id: '4',categoria: 'manteca', name : "producto 4", price: 250},
    {id: '5',categoria: 'leche', name : "producto 5", price: 250},
    {id: '6',categoria: 'yerba', name : "producto 6", price: 250}
  ]
  export const gFetch = ({saludos, children}) => {
     const gFetch=  () => new Promise ((res, rej)=>{
      
      let condition = true
      if (condition) {
        setTimeout (()=> {res (productos)}, 2000)
      } else {rej ('Todo mal')}
    })
}
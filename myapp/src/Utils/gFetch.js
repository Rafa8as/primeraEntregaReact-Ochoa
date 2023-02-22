
let productos = [
  {id: '1',categoria: 'asado', name : "asado", price: 1250, stock: 20}, 
  {id: '2',categoria: 'gaseosa', name : "Gaseosa", price: 350, stock: 35},
  {id: '3',categoria: 'cerveza', name : "Cerveza", price: 200, stock: 200},
  {id: '4',categoria: 'manteca', name : "Manteca", price: 320, stock: 4000},
  {id: '5',categoria: 'leche', name : "Leche", price: 300, stock: 5000},
  {id: '6',categoria: 'yerba', name : "Yerba", price: 600, stock: 500}
]
export const gFetch = () => {
   return new Promise ((res, rej)=>{
    
    let condition = true
    if (condition) {
      setTimeout (()=> {res (productos)}, 2000)
    } else {rej ('Todo mal')}
  })
}



let productos = [
  {id: '1',categoria: 'asado', name : "asado", price: 1250, stock: 20, foto:'https://i.postimg.cc/d3FbPKGQ/asado.jpg' }, 
  {id: '2',categoria: 'gaseosa', name : "Gaseosa", price: 350, stock: 35,foto:'https://i.postimg.cc/sxJt30JY/gaseosa.jpg' },
  {id: '3',categoria: 'cerveza', name : "Cerveza", price: 200, stock: 200,foto:'https://i.postimg.cc/59qc56MX/cerveza.jpg'},
  {id: '4',categoria: 'manteca', name : "Manteca", price: 320, stock: 4000,foto:'https://i.postimg.cc/GhqZNVtr/manteca.jpg'},
  {id: '5',categoria: 'leche', name : "Leche", price: 300, stock: 5000,foto:'https://i.postimg.cc/VLYxKmYD/leche.jpg'},
  {id: '6',categoria: 'yerba', name : "Yerba", price: 600, stock: 500, foto:'https://i.postimg.cc/13XLZBVF/yerba.jpg'}
]
export const gFetch = (id) => {
   return new Promise ((res, rej)=>{
    
    let condition = true
    if (condition) {
      setTimeout (()=> {res (id ? productos.find(prod=> id === prod.id) : productos)}, 2000)
    } else {rej ('Todo mal')}
  })
}


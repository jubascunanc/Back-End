const fs = require ('fs')

class ProductManager {
    constructor(path) {
      this.path = path;
      this.products = this.readFile();
    }
  
    readFile() {

        try {
        
        const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
        
        return data;
        
        } catch (error) {
        
        return []
        
        }
        
        }
  
    writeData(data) {
      let dataString = JSON.stringify(data);
      fs.writeFileSync(`./${this.path}`, dataString);
    }


    addProducts(product) {     
        
        //Aca llamar this o crear variable trayendo los products usando readfile() o getProducts()
        let listado = this.readFile();
        const checkInCart = listado.find(p => p.code === product.code)

        if (!product.title || !product.description || !product.price ||
            
            !product.thumbnail || !product.code || !product.stock) {
                
                throw new Error('Todos los campos son obligatorios'); 
            } else if (checkInCart){
                console.log("ERROR - Porfavor verifica la información una vez más")
            }
        else {
            
            
            product.id = listado.length > 0 ? listado[listado.length - 1].id + 1 : 1;
            listado.push(product)
            this.writeData(listado)
                             
        }
    }
            
         
        
    getProducts () {
        try {
        
            const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
            
            return data;
            
            } catch (error) {
            
            return []
            
            }
            
            }



getProductsById (id){
    let listaProductos = this.readFile();
    const products = listaProductos

  const search = products.find(product => product.id === id) 

if (search == undefined) {
  console.log( "Producto no encontrado")
}
else {

  return search 
}
}

isInProducts  (title)  {
    products.find (prod => prod.title === title)
}




updateProduct(id, product){
  
    let data = this.readFile ();
    if(data.find(product=>product.id===id)){
        let productDeleted = data.filter(product => product.id!==id)
        product.id=id;
        productDeleted.push(product);
        this.writeData(productDeleted);
        return productDeleted;

    }
    else{
        console.log('El Producto que quiere subir no existe')
    }
}


async deleteProduct (id){
    let productos = await  this.readFile()
    try {
       productos = productos.filter (producto =>producto.id != id )
    this.writeData(productos)
        
    } catch (err) {
        console.log("Oops! Debe haber un error")
    }
}

deleteAll(){
    this.writeFile([])
}
}

const newProd = new ProductManager('productos.JSON');

newProd.addProducts({
            title: "Hamburguesa Hispter",
            description: "comida gourmet especial",
            price: 3500,
            thumbnail: "aquí va una ruta de imagen",
            code: 200,
            stock: 10,
}) 

newProd.addProducts({
    title: "Sandwich especial",
    description: "desayuno brunch",
    price: 1500,
    thumbnail: "aquí va una ruta de imagen",
    code: 300,
    stock: 20,
}) 

newProd.updateProduct(1,{
    title: "Pizza Vegetariana",
    description: "Pizza ingredientes vegtariana",
    price: 5000,
    thumbnail: "aquí va una ruta de imagen",
    code: 007,
    stock: 25,
}) 

console.log(newProd.getProducts());
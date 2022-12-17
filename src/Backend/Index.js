const products=[]


class ProductManager {
  static id= 1;
  static products;
  
constructor (title,description,price,thumbnail,code,stock){
this.products=[]

  ProductManager.id += 1;
  this.title= title;
  this.description= description;
  this.price=price;
  this.thumbnail=thumbnail;
  this.code=code;
  this.stock=stock;
  ProductManager.id;
}

addProduct(){
  const product=({
    title:this.title,
    description:this.description,
    price:this.price,
    thumbnail:this.thumbnail,
    code:this.code,
    stock:this.stock,
    id:ProductManager.id

  })

  const checkInCart=products.find(Element=>Element.code===product.code)
  if(checkInCart==true){
    console.log("ERROR - Please check the information and try again")
  }

else{
  products.push(product)
  ProductManager.id++
}
   if (!product.title || !product.description || !product.price ||

    !product.thumbnail || !product.code || !product.stock) {

  throw new Error('Todos los campos son obligatorios');

       }
  }

}

console.log(ProductManager);



const isInCart = (id) => { return products.find (product =>product.title ===title) }


const getProducts = () =>  {

    console.log(products)

}


const getProductsById = (id) => {

  const search = products.find(product => product.id === id)

if (search == undefined) {
  console.log( "Product not found")
}
else {
  console.log(search)
}
}
const isInProducts = (title) => {
    products.find (prod => prod.title === title)
}


const prod1 = new  ProductManager ("Hamburguesa Hispter", "Selección especial 5 ingredientes", 3000, "imagen referencia", 100, 10);
const prod2 = new ProductManager ("Hamburguesa Americana", "Ingredientes gourmet", 5000,"imagen referencia", 102, 20 );

prod1.addProduct()
prod2.addProduct()

getProducts()
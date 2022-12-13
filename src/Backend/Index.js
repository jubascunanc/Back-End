const products=[]


class ProductManager {
  static id= 1;
  static products;
  
constructor (title,description,price,thumbnail,code,stock){
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
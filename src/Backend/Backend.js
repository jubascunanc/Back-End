/*clase Registro usuario*/

class Registro{
    constructor (nombre,edad){
 ;
        this.nombre=nombre;
        this.edad=edad;
    }
    Registro(){
        return  this.edad, this.nombre;
    }
}

const usuario1 = new Registro ('Juan José', 25);
const usuario2 = new Registro ('Santiago', 24);

console.log(usuario1.Registro());
console.log(usuario2.Registro());

/*clase Objeto*/
class Contador{

    contador;
    #_IdCliente;
    nombre;
    static contadorGlobal=0;
    
constructor (cliente){
     this.#_IdCliente;
     this.nombre=nombre;
     this.contador=0;
     Contador.contadorGlobal += 1;
   }

   get getIDResponsable(){
    return this.#_IdCliente;
   }

   Contar () {
     this.contador++;
     Contador.contadorGlobal++;
   }

  getIDResponsable() {
     return this.contador;

   }

  getcuentaGlobal() {
    return Contador.contadorGlobal;
   }
}



console.log(Registro);


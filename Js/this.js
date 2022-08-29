this.modelo = 5



const info = () => {
    return 'Este es un auto ' + this.marca + ', ' + this.modelo + ' del año ' + this.año;
}



let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info
};




// this se refiere al contexto en el que es llamada esta funcion, en este caso seria auto

console.log(auto.info())

//  algo diferente que podriamos hacer es extrar esa funcione y darle un nombre para reutilizarla en el codigo

// function info(){
//     return 'Este es un auto ' + this.marca + ', ' + this.modelo + ' del año ' + this.año;
// }

// ahora cambiaremos esta funcione a un tipo flecha


// una declaracion de una funcion no se puede utilizar a menos que sea declarada antes de que la utilizemos

// pero al hacer esto todos los valores vienen como undefined, la razon por la que pasa esto es que this no esta definido, porque las funciones flechas se van a referir al ambito en las que son creadas,
// en este caso el ambito es global





// Aquí puedes ver un ejemplo de cómo funcionan las funciones flecha con el contexto. 
// Como recomendación general es mejor evitar usar funciones flechas con el contexto ya que su interacción no es muy intuitiva.
// Usa funciones flecha para funciones simples que no interactúen con su contexto.








const objeto1 = {
    flecha: () => {
      console.log(this);
    }
  };
  
  objeto1.flecha(); // this es el objeto global
  
  const objeto2 = {
    flecha: null,
    metodo: function() {
      this.flecha = () => {
        console.log(this)
      };
    }
  };
  
  objeto2.metodo(); // crea a funcion flecha
  objeto2.flecha(); // this es el objeto2 porque flecha se creó allí
// en js existen las funciones flecha y lo que hace es reemplazar a las funciones normales, por ejemplo

// function llamar(enExito, enError){
//     let exito = true;


//     if (exito){
//         enExito();
//     } else {
//         enError();
//     }
// }




// llamar(
//     () => console.log('Exito'),
//     () => console.log('Error')
// );




// [1,2,3,4].forEach(() => {console.log(3);})
// este metodo nos permite iterar por cada uno de los elementos y requiere una funcion flecha con las que puede hacer cualquier cosa, esta funcione flecha es realmente un callback
// este callback viene con argumentos
// [1,2,3,40].forEach((e) => { console.log(e);})


// cuando tenemos un solo elemento no necesitamos el parentesis de la primera e, ni las llaves

[1,2,3,40].forEach(e =>  console.log(e));


[1,2,3,40].forEach(console.log);


// La recomendación es usar funciones flechas solo para operaciones que no dependan de un contexto para evitar confusiones.


const objeto1 = {
    flecha: () => {
      console.log(this);
    }
  };
  
  objeto1.flecha(); // this es objeto global
  
  const objeto2 = {
    flecha: null,
    metodo: function() {
      this.flecha = () => {
        console.log(this)
      };
    }
  };
  
  objeto2.metodo(); // crea a funcion flecha
  objeto2.flecha(); // this es objeto2 porque flecha se creó allí
  

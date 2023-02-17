let translation = {
    'at Fault': 'tener la culpa',
    'account Holder': 'Titular de la cuenta',
    'account Specialist': 'Especialista en manejo de cuentas',
    'activate': 'activar',
    'active' :'en vigor, vigente',
    'aditionals' : 'Adicional',
    'adress' : 'Direccion',
    'adjuster' : 'Liquidador de daños',
    'airbag': 'bolsa de aire',
    'ambulance' : 'ambulancia',
    'amount': 'monto, cantidad',
    'application': 'Solicitud, Formulario',
    'appointment': 'Cita',
    'appraiser': 'Tasador',
    'approved' : 'Aprobado',
    'arrangement': 'Arreglo, Acuerdo',
    'ATM': 'Cajero automático',
  };
  
  // convert the translation object into an array of keys
  let keys = Object.keys(translation);
  
  // get a reference to the button and content elements
  let button = document.querySelector('#translate');
  let content = document.querySelector('#content');
  
  // shuffle the keys array randomly
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  keys = shuffle(keys);
  
  // initialize the index of the current element
  let index = 0;
  
  // add an event listener to the button to display the next translation
  button.addEventListener('click', () => {
    if (index < keys.length) {
      let key = keys[index];
      content.textContent = key;
      index++;
    } else {
      content.textContent = 'No more translations';
    }
  });
  
  // add an event listener to the content to display the translation on click
  content.addEventListener('click', () => {
    if (content.textContent in translation) {
      content.textContent = translation[content.textContent];
    }
  });
  
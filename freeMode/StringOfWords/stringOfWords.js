const btn = document.querySelector('.btn');
const btnEnd = document.querySelector('.end');
const searchBtn = document.querySelector('.srcBtn');
let inputBar = document.querySelector('.browser');
let hide = document.querySelectorAll('.hide');
let list = document.querySelector('.list');
let points = 0;
let pointsGame = document.querySelector('.points');
let addDic = document.querySelector('.addDic');
const languageEsp = document.querySelector('.esp');
const languageEng = document.querySelector('.eng');
let wordsArray = [
  'At Fault',
  'Tener la culpa',
  'Account Holder',
  'Titular de la poliza',
  'Account Specialis',
  'Especialista en manejo de cuentas',
  'activate',
  'activar',
  'active',
  'en vigor, vigente',
  'adittional',
  'adicional',
  'adress',
  'adjuster',
  'airbag',
  'bolsa de aire',
  'ambulance',
  'ambulancia',
  'amount',
  'monto',
  'application',
  'solicitud',
  'appointment',
  'cita',
  'appraiser',
  'approved',
  'aprobado',
  'arrangement',
  'arreglo, acuerdo',
  'ATM (AUtomated teller Machine)',
  'cajero automatico',
  'authorized',
  'autorizado',
  'baby bottle',
  'biberon',
  'baby formula',
  'leche infantil, formula para bebe',
  'back',
  'espalda',
  'beneficiary',
  'beneficiario',
  'benefits',
  'bill',
  'bill of sale',
  'factura compra-venta',
  'billing (department)',
  'departamento de facturacion',
  'birth certificate',
  'acta de nacimiento',
  'bodily injury',
  'lesion corporal',
  'body shop',
  'borrow',
  'prestador, prestar',
  'braces',
  'frenillos',
  'branch',
  'sucursal',
  'brand',
  'marca',
  'breathing',
  'respiracion, respirar',
  'brief',
  'breve, corto',
  'browser',
  'explorador, navegador',
  'bumper',
  'parachoques',
  'bussiness days',
  'dias habiles',
  'case (number)'
  ,'numero de caso/expediente',
  'case worker',
  'trabajador de caso',
  'characters',
  'caracterers',
  'check stub',
  'talones ,recibos, talonarios',
  'checking account',
  'cuenta corriente',
  'chest',
  'pecho',
  'chiropractor',
  'chiropractico',
  'claim',
  'reclamo, reclamacion',
  'clinic',
  'clinica',
  'code',
  'codigo',
  'collections department',
  'departamento de cobranzas',
  'collision',
  'colision',
  'collision coverage',
  'cobertura contra choques',
  'commercial',
  'comercial',
  'compact',
  'compacto',
  'comprehensive (insurance coverage)',
  'cobertura contra todo riesgo',
  'confirm',
  'confirmar',

  'consolidate',
  'consolidar',
  'co-pay',
  'copago',
  'corner/intersection',
  'esquina',
  'cough',
  'tos',
  'coverage',
  'cobertura',
  'cracked',
  'agrietado',
  'crashed',
  'se estrello, colisionar',
  'credit(to)',
  'acreditar',
  'credit card',
  'tarjeta de credita',
  'credit limit',
  'limite de credito',
  'credit report',
  'informe de credito',
  'current',
  'al dia',
  'damages',
  'daños',
  'date of birth',
  'fecha de nacimiento',
  'debris',
  'escombros',
  'debts',
  'deudas',
  'deductible',
  'deducible',
  'delivery',
  'parto',
  'dmv',
  'departamento de vehiculos motorizados',
  'deploy',
  'se desplego',
  'diabetes',
  'diabetes',
  'diapers',
  'pañales',
  'direct deposit',
  'deposito directo',
  'disability',
  'incapacidad',
  'disconnection',
  'desconexion',
  'dispute',
  'disputar',
  'down, weak',
  'decaido',
  'drivable',
  'conducible',
  'drive in facilities',
  'centro de inspecciones',
  'drivers license',
  'licencia de conducir',
  'earning (an income)',
  'generacion de ingresos',
  'econmic crisis',
  'crisis economica',
  'effective date',
  'fecha de vigencia',
  'elegible',
  'elegible',
  'emergency',
  'urgencia, emergencia',
  'emergency lights, hazard lights',
  'luces intermitentes',
  'emergency room',
  'sala de emergencia/urgencia',
  'employer',
  'empleador',
  'engine',
  'motor',
  'enrolled',
  'inscrito',
  'entrance',
  'entrada',
  'equipment',
  'aparato, equipo',
  'estimate',
  'presupuesto',
  'expedite',
  'acelerar, expeditar',
  'expire',
  'vencer, caducar, expirar',
  'factory installed',
  'instalado de fabrica',
  'fee',
  'cuota',
  'fender',
  'guardafango',
  'files',
  'archivos',
  'financial',
  'financiero',
  'flight',
  'vuelo',
  'follow up',
  'seguimiento',
  'food bank',
  'banco de alimentos',
  'food stamps',
  'cupones de alimentos',
  'forge',
  'falsifico',
  'fraud',
  'fraude',
  'full coverage',
  'cobertura completa',
  'generic',
  'generico',
  'gross income',
  'ingreso bruto',
  'gynecology',
  'ginecologia',
  'hall',
  'granizo',
  'hazard lights',
  'luces intermitents',
  'health plan/insurance',
  'plan/seguro salud',
  'heart',
  'corazon',
  'hit and run',
  'chocar y huir'
];
let emptyArray = [];
let arrayCopy = [];

console.log(wordsArray.length);

function newWords() {
  let i = 0;
  while (i < 10) {
    i++;
    math = Math.trunc(Math.random() * 180)
    emptyArray.push(wordsArray[math]);
  }

}

function all() {
  newWords();

  hide.forEach(hide => {
    hide.classList.add('hidden');
  });

  list.classList.remove('hidden');

  let createList = document.createElement('li');
  list.appendChild(createList);
  
  for (x = 0; x < 10; x++) {
    let createBtns = document.createElement('button');
    let ulList = document.createElement('ul');
    list.appendChild(ulList);
    emptyArray[x];
    ulList.insertAdjacentHTML('afterbegin', emptyArray[x]);
    createBtns.textContent = 'Ready';
    ulList.appendChild(createBtns)

    for (let i = 0; i < emptyArray.length; i++) {
      createBtns.addEventListener('click', ()=> {
        createBtns.remove();
        ulList.remove();
        points += 1;
        console.log(points);
        pointsGame.textContent = `Points: ${a = points/10}/10`;
        if (a == 10){
          pointsGame.textContent = 'Congratulations!! you got that 10/10';
        } 
      });
    }

  }

}



function searchWord(){
//   if (inputBar.placeholder == 'appointment'){
//     wordsArray.forEach(m => {
//       if (m == inputBar.value){
//         let createP = document.createElement('p');
//         a = wordsArray.indexOf(`${inputBar.value}`) + 1;
//         console.log(a);
        
//         createP.textContent = `${inputBar.value}`;
//         createP.textContent = `${wordsArray.at(a)}`;
//         addDic.appendChild(createP);
//       }
//     })
//   }else if (inputBar.placeholder == 'cita'){
//     wordsArray.forEach(m => {
//       if (m == inputBar.value){
//         let createP = document.createElement('p');
//         a = wordsArray.indexOf(`${inputBar.value}`) - 1;
//         console.log(a);
        
//         createP.textContent = `${inputBar.value}`;
//         createP.textContent = `${wordsArray.at(a)}`;
//         addDic.appendChild(createP);
//       }
//     })
//   }
// }


 wordsArray.forEach(m => {
    if (m == inputBar.value){
      let createP = document.createElement('p');
      if (inputBar.placeholder == 'appointment'){
        a = wordsArray.indexOf(`${inputBar.value}`) + 1;
      }else{
        a = wordsArray.indexOf(`${inputBar.value}`) - 1;
      }
      console.log(a);
      
      createP.textContent = `${inputBar.value}`;
      createP.textContent = `${wordsArray.at(a)}`;
      addDic.appendChild(createP);
    }
  })
}

searchBtn.addEventListener('click', ()=>{
  searchWord()
});


btn.addEventListener('click', () => {
  all();
  list.classList.add('grid');
  console.log('start');
});

btnEnd.addEventListener('click', () => {
  emptyArray = [];
  console.log(emptyArray);
  console.log(list.textContent);
  list.textContent = '';
  pointsGame.textContent = `points: 0/10`;
  points = 0
});

languageEng.addEventListener('click', () => {
  inputBar.placeholder = 'appointment'
  console.log(inputBar.placeholder);
});

languageEsp.addEventListener('click', () => {
  inputBar.placeholder = 'cita'
  console.log(inputBar.placeholder);
});

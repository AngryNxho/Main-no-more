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
  'at fault',
  'tener la culpa',
  'account Holder',
  'titular de la poliza',
  'account Specialis',
  'especialista en manejo de cuentas',
  'activate',
  'activar',
  'active',
  'vigente',
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
  'arreglo',
  'ATM ',
  'cajero automatico',
  'authorized',
  'autorizado',
  'baby bottle',
  'biberon',
  'baby formula',
  'leche infantil',
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
  'prestar',
  'braces',
  'frenillos',
  'branch',
  'sucursal',
  'brand',
  'marca',
  'breathing',
  'respiracion',
  'brief',
  'breve',
  'browser',
  'explorador',
  'bumper',
  'parachoques',
  'bussiness days',
  'dias habiles',
  'case (number)',
  'numero de caso/expediente',
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
  'reclamo',
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
  'se estrello',
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
  'down',
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
  'hazard lights',
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
  'equipo',
  'estimate',
  'presupuesto',
  'expedite',
  'expeditar',
  'expire',
  'expirar',
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
  'chocar y huir',
  'home care provider',
  'proveedor de atencion domiciliaria',
  'homeowner',
  'propietario de una casa',
  'homeowners insurance',
  'seguro para viviendas',
  'horn',
  'bocina',
  'identification',
  'identificacion',
  'income',
  'entrada',
  'injuries',
  'lesiones',
  'inspect',
  'inspeccionar',
  'installments',
  'abonos',
  'insufficient funds',
  'insurance',
  'insurance broker',
  'insured',
  'asegurado',
  'interest',
  'tasas de interes',
  'internet',
  'internet',
  'invalid',
  'investigation',
  'issue',
  'keep up',
  'cumplir',
  'layoff',
  'despedir',
  'layover',
  'escala',
  'legal guardian',
  'tutor legal',
  'legal resident',
  'residente legal',
  'liability insurance',
  'license plates',
  'loan',
  'prestamo',
  'location',
  'ubicacion',
  'login',
  'ingresar',
  'long term',
  'a largo plazo',
  'mail',
  'correspondencia',
  'make',
  'marca',
  'manager',
  'gerente',
  'manufacturers defect',
  'market value',
  'mechanic',
  'mecanico',
  'member',
  'miembro',
  'member id',
  'numero de identificacion de miembro',
  'membership',
  'membresia',
  'migraines',
  'migrañas',
  'minimum balance ',
  'saldo minimo',
  'model',
  'modelo',
  'modification',
  'modificacion',
  'mortgage',
  'prestamo hipotecario',
  'mothers maiden name',
  'appellido de soltera de su madre',
  'nape',
  'nuca',
  'navigation system',
  'sistema de navegacion',
  'neck',
  'cuello',
  'nephew',
  'sobrino',
  'neurologist',
  'neurologo',
  'niece',
  'sobrina',
  'no fault laws',
  'leyes independientes de la culpabilidad',
  'non payment',
  'falta de pago',
  'non perishable',
  'alimentos no perecederos',
  'non stop flight',
  'sin escala',
  'notice',
  'notificacion',
  'obstetrician',
  'obbstetra',
  'office visit',
  'consulta',
  'online',
  'en linea',
  'orthodontist',
  'ortodoncista',
  'overnight delivery',
  'entrega de un dia para otro',
  'painkiller',
  'analgesicos',
  'paperwork',
  'paramedics',
  'participates',
  'participa',
  'passes out',
  'desmayar',
  'passport',
  'pasaporte',
  'password',
  'contraseña',
  'paychecks',
  'cheque de pago',
  'payment arrangement',
  'arreglo de pago',
  'pay off',
  'liquidar',
  'payroll',
  'nomina',
  'paystubs',
  'recibos de pago',


];
let emptyArray = [];
let arrayCopy = [];

console.log(wordsArray.length);

function newWords() {
  let i = 0;
  while (i < 10) {
    i++;
    math = Math.trunc(Math.random() * 365);
    emptyArray.push(wordsArray[math].toLowerCase());
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
    // emptyArray[x];
    ulList.insertAdjacentHTML('afterbegin', emptyArray[x]);
    createBtns.textContent = 'Ready';
    ulList.appendChild(createBtns);

    for (let i = 0; i < emptyArray.length; i++) {
      createBtns.addEventListener('click', () => {
        createBtns.remove();
        ulList.remove();
        points += 1;
        console.log(points);
        pointsGame.textContent = `Points: ${(a = points / 10)}/10`;
        if (a == 10) {
          pointsGame.textContent = 'Congratulations!! you got that 10/10';
        }
      });
    }
  }
}

function searchWord() {
  wordsArray.forEach(m => {
    if (m == inputBar.value.toLowerCase()) {
      let createP = document.createElement('p');
      if (inputBar.placeholder == 'appointment') {
        a = wordsArray.indexOf(`${inputBar.value}`) + 1;
      } else if (inputBar.placeholder == 'cita') {
        a = wordsArray.indexOf(`${inputBar.value}`) - 1;
      }
      console.log(a);
    
      createP.textContent = `${inputBar.value}`;
      createP.textContent = `${wordsArray.at(a)}`;
      addDic.appendChild(createP);
    
    }
  });
}

searchBtn.addEventListener('click', () => {
  searchWord();
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
  points = 0;
});

languageEng.addEventListener('click', () => {
  inputBar.placeholder = 'appointment';
  inputBar.value = '';
  console.log(inputBar.placeholder);
});

languageEsp.addEventListener('click', () => {
  inputBar.placeholder = 'cita';
  inputBar.value = '';
  console.log(inputBar.placeholder);
});

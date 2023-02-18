const btn = document.querySelector('.btn');
const btnEnd = document.querySelector('.end');
const searchBtn = document.querySelector('.srcBtn');
let inputBar = document.querySelector('.browser');
let hide = document.querySelectorAll('.hide');
let list = document.querySelector('.list');
let points = 0;
let pointsGame = document.querySelector('.points');
let addDic = document.querySelector('.addDic');

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
  'code',
  'collections department',
  'collision',
  'collision coverage',
  'commercial',
  'compact',
  'comprehensive (insurance coverage)',
  'confirm',
  'consolidate',
  'co-pay',
  'corner/intersection',
  'cough',
  'coverage',
  'cracked',
  'crashed',
  'credit(to)',
  'credit card',
  'credit limit',
  'credit report',
  'current',
  'damages',
  'date of birth',
  'debris',
  'debts',
  'deductible',
  'delivery',
  'DMV',
  'departamento de vehiculos motorizados',
  'deploy',
  'diabetes',
  'diapers',
  'direct deposit',
  'disability',
  'disconnection',
  'dispute',
  'down, weak',
  'drivable',
  'drive in facilities',
  'drivers license',
  'earning (an income)',
  'econmic crisis',
  'effective date',
  'elegible',
  'emergency',
  'emergency lights, hazard lights',
  'emergency room',
  'employer',
  'engine',
  'ACCELERATOR', 
  'ACELERADOR',
'ACCELERATOR CABLE', 
'CABLE DE ACELERADOR',
'ACCELERATOR PEDAL',
 'PEDAL DE ACELERADOR',
'ADJUST', 
'REGULAR',
'ADJUST/SET/FIT', 
'AJUSTAR',
'ADJUSTING SCREW', 
'TORNILLO DE AJUSTE',
'ADJUSTMENT', 
'REGLAJE/AJUSTE',
'AIR', 
'AIRE',
'AIR BELLOW', 
'COJIN DE AIRE',
'AIR CYLINDER', 
'CILINDRO DE AIRE',
'AIR DRYER', 
'DESHIDRADADOR',
'AIR FILTER', 
'FILTRO DE AIRE',
'AIR HOSE', 
'TUBO FLEXIBLE DE AIRE',
'AIR PIPE', 
'TUBO DE AIRE',
'AIR PRESSURE GAUGE', 
'MANOMETRO AIRE COMPROMIDO',
'AIR RELEASE FILTER', 
'FILTRO DE PURGA',
'AIR SUSPENSION', 
'SUSPENSION NEUMATICA',
'AIR TANK', 
'DEPOSITO DE AIRE COMPRIMIDO',
'AIR VALVE', 
'VALVULA DE CAMBIO',
'ALTENATOR', 
'DINAMO', 
'ALTERNADOR',
'ANCHOR PLATE', 
'PLATE DEL INDUCIDO/ PLACA DEL INDUCIDO',
'ANGULAR MEMBER', 
'TRANSMISION ANGULAR',
'ANTI-FREEZER', 
'ANTICONGELANTE',
'ANTI-JACKKNIVE', 
'FRENO REMOLQUE',
'ARLE HOUSING COVER', 
'TAPA DEL CARTER DEL PUENTE',
'ARMATURE', 
'INDUCIDO',
'AUXILIARY DROP ARM', 
'BRAZO DE MANDO AUXILIAR',
'AUXILIARY HEATER', 
'CALEFACCION AUXILLIAR',
'AUXILIARY SPRING', 
'MUELLE AUXILIAR',
'AXLE', 
'EJE/ARBOL',
'AXLE BEAM', 
'VIGA EJA',
'AXLE END', 
'TROMPETA',
'BACK LASH', 
'JUEGO ENTRE DENTES',
'BALL BEARING', 
'COJINETE DE BOLAS/ROLINERAS',
'BALL JOINT', 
'JUNTA DE ROTULA DE DIRECCION',
'BATTERY', 
'BATERIA',
'BATTERY BOX', 
'CAJA DE BATERIA',
'BEARING', 
'RODIAMENTO/COJINETE/CHUMASERA',
'BEARING HOUSING', 
'CAJA DEL COJINETE/DELAS CHUMASERAS',
'BEARING SHELL', 
'COJINETE DE BIELA',
'BEARING SHELL(main)', 
'COQUILLA DEL COJINETE (principal)',
'BELT TENSION/JOCKEY PULLEY', 
'POLEA INTERMEDIA',
'BIG END SHELL', 
'COJINETA DE BIELA',
'BLADE WHEEL', 
'PALETAS/CUCHILLAS DE LAS RUEDA',
'BODY', 
'CARROCERIA',
'BOLT', 
'BULON/PERNO',
'BOLT/SCREW', 
'TORNITO',
'TORNILLO',
'BOOST CONTROL', 
'AMPLIFICADOR DE AIRE/LIMIDADOR DE HUMO',
'BOOSTER', 
'AMPLIFICADOR/ SERVO',
'BRACKET', 
'SOPORTE',
'BRAKE BACKING', 
'SOPORTE/ZAPATA DE FRENO',
'BRAKE BACKING PLATE', 
'ZAPATA DEL FRENO/PLATO SOPPORTE DEL FRENO',
'BRAKE BAND', 
'CINTA DE FRENO',
'BRAKE CALIPER',
 'CARTER DEL FRENO',
'BRAKE CHAMBER', 'CAMARA DE FRENO',
'BRAKE FLUID', 'LIQUIDO DE FRENO',
 'BRAKE PEDAL', 'PEDAL DE FRENO',
'BRAKE PLATE', 'PLATO DE FRENO',
'BRAKE SERVO', 'SERVO FRENO',
'BRAKE SHOE', 'ZAPATA DE FRENO',
'BRAKE SHOE', 'LINER, FORRE DE FRENO',
'BRAKE CYLINDER',' CILINDRO DE FRENO',
'BRAKE DRUM', 'TAMBOR DE FRENO',
'BREATHER', 'RESPIRADERO',
'BREATHER CAP', 'TAPA DEL RESPIRADERO',
'BREATHER PIPE', 'TUBO DEL RESPIRADERO',
'BRUSH HOLDER', 'PORTAESCOBILLAS',
'BRUSH SPRING', 'MUELLE DE PORTAESCOBILLAS',
'BUFFER STOP', 'CONTRATOPE',
'BUMP STOP', 'TOPE DE SUSPENSION',
'BUMPER', 'PARACHOQUES',
'BUNK', 'BUJE/CAMA',
'BUSHING', 'CASQUILLO DE BRONZE',
'BUZZER', 'ZUMBADOR',
'CALIBRATION', 'CALIBRACION',
'CAM', 'LEVA',
'CAM FOLLOWER', 'EMPUJADOR',
'CAM FOLLOWER ROLLER', 'TALON DE EMPUJADOR',
'CAM SHAFT', 'ARBOL DE LEVAS',
'CAMSHAFT', 'ARBOL DE LEVAS',
'CANVAS COVERING', 'LONA',
'CARBON BRUSH', 'ESCOBILLA DE CARBON',
'CASING', 'CARCASA',
'CASTER', 'AVANCE DEL PONTE',
'CENTERBOLT', 'PERNO CAPUCHINO',
'CENTRE AXLE', 'ARBOL PRINCIPAL',
'CENTRE BEARING', 'COJINATE INTERMEDIO',
'CHASSIS FRAME', 'BASTIDOR',
'CHECK VALVE', 'VALVULA DE RETENCION',
'CHECK/INSPECT', 'CONTROLAR',
'CIGAR LIGHTER', 'ENCEDOR DE CIGARROS',
'CLAMP', 'MORDAZA',
'CLUTCH', 'EMBRAGUE',
'CLUTCH ASSY', 'GRUPE/ENSAMBLAJE DE PRESION',
'CLUTCH COVER', 'MECANISMO',
'CLUTCH CROSS', 'SHAFT, EJE MANDO DE EMBRAGUE',
'CLUTCH DISC', 'DISCO DE EMBRAGUE',
'CLUTCH DISK', 'DISCO',
'CLUTCH FORK', 'HORQUILLA',
'CLUTCH MASTER CYLINDER', 'BOMBA DE PRESION',
'CLUTCH PEDAL, PEDAL DE EMBRAGUE',
'CLUTCH RELEASE ASSISTANCE', 'SERVO EMBRAGUE',
'CLUTCH RELEASE SLEEVE', 'CAMISA DE CORREDERA',
'COIL', 'BOBINA',
'COLD STARTING CABLE', 'CABLE DE ARRANQUE EN FRIO',
'COMBINATION SWITCH', 
'INTERRUPTOR DE COMBINATION',
'COMPRESSION SPRING', 
'MUELLE DE PRESION',
];
let emptyArray = [];
let arrayCopy = [];

wordsArray.forEach(a => {
  arrayCopy.push(a.toLowerCase())
})

function newWords() {
  let i = 0;
  while (i < 10) {
    i++;
    math = Math.trunc(Math.random() * 350)
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
    emptyArray[x].toLowerCase();
    ulList.insertAdjacentHTML('afterbegin', emptyArray[x].toLowerCase());
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



searchBtn.addEventListener('click', ()=>{
  arrayCopy.forEach(m => {
    if (m == inputBar.value){
      let createP = document.createElement('p');
      a = arrayCopy.indexOf(`${inputBar.value}`) + 1;
      console.log(a);
      
      createP.textContent = `${inputBar.value}`;
      createP.textContent = `${arrayCopy.at(a)}`;
      addDic.appendChild(createP);
    }
    
  })
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



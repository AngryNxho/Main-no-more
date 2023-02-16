let wordsArray = [
  'at Fault',
  'account holder',
  'account specialist',
  'activate',
  'active',
  'additional',
  'adress',
  'ajuster',
  'airbag',
  ' ambulance',
  'amount',
  'aplication',
  'appointment',
  'appraiser',
  'approved',
  'arrangement',
  'ATM',
  'authorized',
  'baby bottle',
  'baby formula',
  'back',
  'beneficiary',
  'benefits',
  'bills',
  'bill of sale',
  'billing (department)',
  'birth certificate',
  'bodily injury',
  'body shop',
  'borrow',
  'braces',
  'branch',
  'brand',
  'breathing',
  'brief',
  'browser',
  'bumper',
  'business days',
  'case number',
  'case worker',
  'characters',
  'check stub',
  'checking account',
  'chest',
  'chiropractor',
  'claim',
  'clinic',
  'code',
  'collections department',
  'collision',
  'collision coverage',
  'comercial',
  'compact',
  'comprehensive coverage',
  'confirm',
  'consolidate',
  'co-pay',
  'corner',
  'cough',
  'coverage',
  'cracked',
  'ACCELERATOR',
  'ACCELERATOR CABLE',
  'ACCELERATOR PEDAL',
  'ADJUST',
  'ADJUST/SET/FIT',
  'ADJUSTING SCREW',
  'ADJUSTMENT',
  'AIR',
  'AIR BELLOW',
  'AIR CYLINDER',
  'AIR DRYER',
  'AIR FILTER',
  'AIR HOSE',
  'AIR PIPE',
  'AIR PRESSURE GAUGE',
  'AIR RELEASE FILTER',
  'AIR SUSPENSION',
  'AIR TANK',
  'AIR VALVE',
  'ALTENATOR',
  'ANCHOR PLATE',
  'ANGULAR MEMBER',
  'ANTI-FREEZER',
  'ANTI-JACKKNIVE',
  'ARLE HOUSING COVER',
  'ARMATURE',
  'AUXILIARY',
  'AUXILIARY HEATER',
  'AUXILIARY SPRING',
  'AXLE',
  'AXLE BEAM',
  'AXLE END',
  'BACK LASH',
  'BALL BEARING',
  'BALL JOINT',
  'BATTERY',
  'BATTERY BOX',
  'BEARING',
  'BEARING HOUSING',
  'BEARING SHELL',
  'EARING SHELL(main)',
  'BELT TENSION/JOCKEY PULLEY',
  'BIG END SHELL',
  'BLADE WHEEL',
  'BODY',
  'BOLT',
  'BOLT/SCREW',
  'BOOSTER',
  'BRACKET',
  'BRAKE BACKING',
  'BRAKEB ACKING PLATE',
  'BRAKE BAND',
  ,
  'CONCRETE MIXER',
  'CONNECTING PIPE',
  'CONNECTING ROD',
  'CONNECTOR',
  'CONTROL',
  'CONTROL ROD',
  'CONTROL VALVE',
  'COOLING WATER',
  'COULD YOU REFIL THE RADIATOR ?',
  'COVER',
  'COVER PLATE',
  'CRACK',
  'CRANK SHAFT TIMING GEAR',
  'CRANKING BOLT',
  'CRANKSHAFT',
  'CRANKSHAFT BEARING',
  'CRANKSHAFT BEARING CAP',
  'CREDIT CARD',
  'CROSS MEMBER',
  'CROWN WHEEL',
  'CYCLONE',
  'CYLINDER BLOCK',
  'CYLINDER HEAD',
  'CYLINDER HEAD GASKET',
  'CYLINDER LINER',
  'CYLINDER LINING',
  'DAMAGE',
  'DASH BOARD',
  'DEALER',
  'DELIVERY VALVE',
  'DIAFRAGMA',
  'DIAPHRAGME SPRING',
  'DIFFERENTIAL',
  'DIFFERENTIAL GEAR CASE',
  'DIFFERENTIAL HOUSING',
  'DIFFERENTIAL LOCK',
  ,
  'DIFFERENTIAL SIDE GEAR',
  'DIMMING',
  'DIODE BANK',
  'DIPSTICK HOLDER',
  'DIRECTION INDICATOR',
  'DISC WHEEL',
  'DISCHARGE/UNLOAD',
  'DISTRIBUTION BOX',
  'DOES NOT WORK',
  'DOOR',
  'DOOR COVERING',
  'DOOR HANDLE',
  'DRAIN COCK',
  'DRAIN OIL PUMP',
  'DRAIN PLUG',
  'DRAIN VALVE',
  'DRAW PULL BAR',
  'DRIVE SHAFT',
  'DRIVE SHAFT BEARING',
  'DRIVE SLOWLY',
  ,
  'DRIVE SLOWLY',
  'DRIVER',
  'DRIVING HEAD',
  'DRIVING PINION',
  'DROP ARM',
  'ELECTRICAL PLUG SOCKET',
  'ELECTROMAGN FAN COUPLING',
  'EMERGENCY FILLING CONNECTION',
  'EMERGENCY REPAIR',
  'ENGINE BLOCKED',
  'ENGINE BONNET',
  'ENGINE CATCH',
  'ENGINE MOUNTING',
  'ENGINE MOUNTING RUBBER',
  'ENGINE SUSPENSION',
  'EXCHANGE',
  'EXHAUST BRAKE',
  'EXHAUST MANIFOLD',
  'EXHAUST PIPE',
  'EXHAUST SILENCER',
  'EXHAUST VALVE',
  'EXPANDER',
  'EXPANSION TANK/HEADER',
  'FAN',
  'FAN BELT',
  'FELT STRIP',
  'FEMALE SPLINE',
  'FIELD COIL',
  'FIFTH WHEEL',
  'FIL',
  'FILLER CAP',
  'FILTER ELEMENT',
  'FILTER HOUSING',
  'FINISHED',
  'FIXATION',
  'FLANGE',
  'FLASHER LAMP',
  'FLASHER UNIT',
  'FLYWHEEL',
  'FLYWHEEL HOUSING',
  'FOOT BRAKE VALVE',
  'FORK COUPLING',
  'FOUR CIRCUITS SECURITY VALVE',
  'FREE WHEEL',
  'FREEZ PLUG',
  'FRONT AXLE',
  'FRONT SUPPORTING PLATE',
  'FUEL CONSUMPTION',
  'FUEL FEED PIPE',
  'FUEL FILTER',
  'FUEL GAUGE FLOAT',
  'FUEL LIFT POMP',
  'FUEL PUMP COUPLING',
];
let emptyArray = [];

function newWords() {
  let i = 0;
  while (i < 10) {
    i++;
    emptyArray.push(wordsArray[Math.trunc(Math.random() * 225)]) + 1;
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
    let readyBtn = document.createElement('button');
    readyBtn.textContent = 'Ready'
    
  
    let a = document.createElement('br');
    let ulList = document.createElement('ul');
    list.appendChild(ulList);
    
    ulList.insertAdjacentHTML('afterbegin', emptyArray[x]);
    
    ulList.appendChild(readyBtn)
  }

  return list
}

console.log(emptyArray);

const btn = document.getElementById('start');
const btnEnd = document.querySelector('.end');
let hide = document.querySelectorAll('.hide');
let list = document.querySelector('.list');

btn.addEventListener('click', () => {
  all();
  list.classList.add('grid')
});

btnEnd.addEventListener('click', () => {
  emptyArray = [];

  console.log(emptyArray);
  console.log(list.textContent);
  list.textContent = '';
});

let admin = 'Nacho';
let usuario = admin;

switch (usuario){
    case 'Pedro':
        console.log('Autorizado'); 
        break;

    case 'Emilia': {
        console.log('Autorizado con privilegios');
        break;
    }

    default: {
        console.log('No autorizado');
    }
}
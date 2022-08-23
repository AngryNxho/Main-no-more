let admin = 'Pedro';
let usuario = admin;


//Si queremos que los usuarios tengan acceso a una opcion
switch (usuario) {
    case 'Pedro':
        console.log('ADMINISTRADOR');
        break;
    case 'Emilia':
        console.log(('Autorizado con privilegios'))
        break;

    default:
        console.log('No autorizado')
}

//Si queremos que un usuario pueda tener multiples opciones
switch (usuario) {
    case 'Pedro':
        console.log('ADMINISTRADOR');
    case 'Emilia':
        console.log(('Autorizado con privilegios'))
        break;

    default:
        console.log('No autorizado')

}
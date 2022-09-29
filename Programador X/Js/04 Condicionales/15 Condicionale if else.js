let usuario = 'Pedro';
let admin = 'Emilia';


if (usuario == 'Pedro'){
    console.log(`Usuario ${usuario} esta Autorizado`);

}else if (usuario === admin){
    console.log(`Usuario ${usuario} autorizado con privilegios`);
    
} else{
    console.log(`${usuario} no esta autorizado`);
}


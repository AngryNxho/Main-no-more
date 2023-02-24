

function extension(archivo){
    let lista = [];
    lista.push(archivo);

    lista = lista.toString();

    return `La extesion del archivo es: ${lista.split(".").pop()}`;

};
console.log(extension("Spiderman.exe"));
console.log(extension("Duoc.pdf"));
console.log(extension("Spiderman.mp4"));
console.log(extension("Spiderman.mkv"));
console.log(extension("Spiderman.exe"));

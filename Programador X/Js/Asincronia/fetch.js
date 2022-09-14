// AJAX, esta era la forma en que pediamos informacion en un servidor en el pasado
// var xhttp = new XMLHttpRequest ( ) ;
// xhttp.onreadystatechange = function () { //
// console.log ( this.responseText ) ;
// } ;
// xhttp.open ( " GET " , " www.xaviro.com " , true ) ;
// xhttp.send ( ) ;

fetch('www.xaviro.com')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
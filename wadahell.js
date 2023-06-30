function LogistiCompany(capacity, weigth) {
  const max = capacity;

  const bigBox = 210;
  const medBox = 90;

  let bigQ = 0;
  let mediumQ = 0;

  for (let i = 0; i <= capacity; i++) {
    if (bigBox <= capacity) {
      capacity -= bigBox;
      bigQ += 1;
    } else if (medBox <= capacity) {
      capacity -= medBox;
      mediumQ += 1;
    }
  }

  bigSum = bigBox * bigQ;
  midSum = mediumQ * medBox;
  total = bigSum + midSum;
  // console.log(bigSum, midSum, bigSum + midSum);
  // console.log(bigSum/weigth);
  // console.log(midSum/weigth);

  if (total <= capacity == false) {
    console.log(max, total);
    return `Big boxes: ${bigQ} (Kg) - Small Boxes: ${mediumQ}`;
  } else {
    return `Not enough space on this truck. Maximun capacity is: ${capacity} and the weitgh is ${weigth}`;
  }
}

console.log(LogistiCompany(1000, 750));


// function calcularCajas(capacidadMaxima, pesoPedido) {
//   const pesoCajaMediana = 90;
//   const pesoCajaGrande = 210;

//   if (pesoPedido > capacidadMaxima) {
//     return "El camión no puede transportar el pedido.";
//   }

//   const cantidadCajasGrande = Math.floor(pesoPedido / pesoCajaGrande);
//   const cantidadCajasMediana = Math.floor(
//     (pesoPedido % pesoCajaGrande) / pesoCajaMediana
//   );

//   const capacidadRestante = pesoPedido - (cantidadCajasGrande * pesoCajaGrande) - (cantidadCajasMediana * pesoCajaMediana);

//   const productosPorCajaGrande = Math.floor(pesoCajaGrande / capacidadRestante);
//   const productosPorCajaMediana = Math.floor(pesoCajaMediana / capacidadRestante);

//   return {
//     cajasGrande: cantidadCajasGrande,
//     cajasMediana: cantidadCajasMediana,
//     productosPorCajaGrande,
//     productosPorCajaMediana,
//     camionSoportaPeso: true,
//   };
// }

// // Ejemplo de uso
// const capacidadMaximaCamion = 1000; // Capacidad máxima del camión en kg
// const pesoDelPedido = 750; // Peso del pedido en kg

// const resultado = calcularCajas(capacidadMaximaCamion, pesoDelPedido);
// console.log(resultado);

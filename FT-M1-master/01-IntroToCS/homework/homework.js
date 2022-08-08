"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let cadenaNum = String(num);
  let arrayNum = [];

  for (let i in cadenaNum) {
    arrayNum[i] = cadenaNum[i];
  }

  let numeroDecimal = 0;
  let potenciaPosicion = 0;
  let x = 0;

  for (let i = arrayNum.length - 1; i >= 0; i--) {
    if (arrayNum[i] == "1") {
      potenciaPosicion = Math.pow(2, x);
      numeroDecimal =
        numeroDecimal + potenciaPosicion;
    }
    x++;
  }
  return numeroDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let cadenaBinaria = "";
  let salir = false;

  do {
    if (num % 2 == 0) {
      cadenaBinaria = "0" + cadenaBinaria;
    } else {
      cadenaBinaria = "1" + cadenaBinaria;
    }

    num = parseInt(num / 2);

    if (num == 1) {
      cadenaBinaria = "1" + cadenaBinaria;
      salir = true;
    } else if (num == 0) {
      cadenaBinaria = "0" + cadenaBinaria;
      salir = true;
    }
  } while (!salir);
  
  return cadenaBinaria;
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

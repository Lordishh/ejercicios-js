//Ejercicio 1: Suma de Todos los Números en un Array
function sumarArray(numeros) {
  //Escriba su código aquí abajo...
  /* let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma; */
}

//Ejercicio 2: Concatenación de Todos los Strings en un Array
function concatenarStrings(strings) {
  //Escriba su código aquí abajo...
  /* let resultado = "";
    for (let i = 0; i < strings.length; i++) {
        resultado += strings[i];
    }
    return resultado; */
}

//Ejercicio 3: Filtrar Números Mayores a 10
function filtrarMayoresADiez(numeros) {
  //Escriba su código aquí abajo...
  /* let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            resultado.push(numeros[i]);
        }
    }

    return resultado; */
}

// Ejercicio 4: Suma de Números Pares en un Array
function sumarPares(numeros) {
  // Tu código aquí
  /* let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
    }

    return suma; */
}

// Ejercicio 5: Eliminar un Elemento de un Array
function eliminarElemento(array, stringEliminar) {
  // Tu código aquí
  // Encontrar el índice del elemento a eliminar
  /* const index = array.indexOf(stringEliminar);

  // Si el índice es -1, el elemento no está en el array
  if (index === -1) {
      return null;
  }

  // Eliminar el elemento del array usando splice
  array.splice(index, 1);

  // Devolver el array modificado
  return array; */
}

// Ejercicio 6: Crear una Lista de Nombres
function crearLista(nombres, nombreDeLista) {
  //Tu código aquí
  /* let resultado = `Lista de ${nombreDeLista}:`;
  if (nombres.length > 0) {
      resultado += '\n';
      for (let i = 0; i < nombres.length; i++) {
          resultado += nombres[i];
          if (i !== nombres.length - 1) {
              resultado += '\n';
          }
      }
  }
  return resultado; */
}

/* ####### FIN DE LOS EJERCICIOS ###### */

module.exports = {
  sumarArray,
  concatenarStrings,
  filtrarMayoresADiez,
  sumarPares,
  eliminarElemento,
  crearLista,
};

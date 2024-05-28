# `Ejercicio 1: Suma de Todos los Números en un Array`


## Objetivo:
#### Completar la función sumarArray que recibe un array de números como parámetro y haz que devuelva la suma de todos los números de ese array.

## Descripción:
#### La función sumarArray ya está definida y recibe un parámetro numeros, que es un array de números. Tu tarea es completar el código dentro de la función para que sume todos los números en el array y devuelva el resultado.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(sumarArray([1, 2, 3, 4, 5])); // Debería devolver 15
console.log(sumarArray([])); // Debería devolver 0
console.log(sumarArray([-1, -2, -3, -4, -5])); // Debería devolver -15
```

<hr>

# `Ejercicio 2: Concatenación de Todos los Strings en un Array`

## Objetivo:
#### Completar la función concatenarStrings que recibe un array de strings como parámetro y haz que devuelva la concatenación de todos esos strings en un único string.

## Descripción:
#### La función concatenarStrings ya está definida y recibe un array de strings como parámetro. Tu tarea es completar el código dentro de la función para que concatene todos los strings en ese array y devuelva el resultado como un único string.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(concatenarStrings(["Hola", " ", "Mundo"])); // Debería devolver "Hola Mundo"
console.log(concatenarStrings(["JavaScript", " ", "es", " ", "genial"])); // Debería devolver "JavaScript es genial"
console.log(concatenarStrings([])); // Debería devolver ""
```
<hr>

# `Ejercicio 3: Filtrar Números Mayores a 10`

## Objetivo:
#### Completar la función filtrarMayoresADiez que recibe un array de números y haz que devuelva un array con todos los números mayores a 10.

## Descripción:
#### La función filtrarMayoresADiez ya está definida y recibe un array de números como parámetro. Tu tarea es completar el código dentro de la función para que filtre y devuelva un nuevo array que contenga solo los números mayores a 10.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(filtrarMayoresADiez([5, 12, 8, 15, 3])); // Debería devolver [12, 15]
console.log(filtrarMayoresADiez([20, 5, 10, 30])); // Debería devolver [20, 30]
console.log(filtrarMayoresADiez([1, 2, 3, 4, 5])); // Debería devolver []
console.log(filtrarMayoresADiez([])); // Debería devolver []
```

<hr>

# `Ejercicio 4: Suma de Números Pares en un Array`

## Objetivo:
#### Completar la función sumarPares que recibe un array de números para devuelva la suma de todos los números que sean pares.

## Descripción:
#### La función sumarPares ya está definida y recibe un array de números como parámetro. Tu tarea es completar el código dentro de la función para que sume y devuelva la suma de todos los números que sean pares en el array.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(sumarPares([5, 12, 8, 15, 3])); // Debería devolver 20
console.log(sumarPares([1, 3, 5, 7])); // Debería devolver 0
console.log(sumarPares([-1, -2, -3, -4])); // Debería devolver -6
console.log(sumarPares([])); // Debería devolver 0
```

<hr>

# `Ejercicio 5: Eliminar un Elemento de un Array`

## Objetivo:
#### Completar la función eliminarElemento que recibe un array de strings y un string stringEliminar como parámetros, y haz que devuelva un array sin el elemento que se eliminó. Si el elemento no está en el array, la función debe retornar null.

## Descripción:
#### La función eliminarElemento ya está definida y recibe un array de strings y un string como parámetros. Tu tarea es completar el código dentro de la función para que elimine el elemento indicado y devuelva el array modificado. Si el elemento no está en el array, debe retornar null.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(eliminarElemento(['a', 'b', 'c'], 'b')); // Debería devolver ['a', 'c']
console.log(eliminarElemento(['a', 'b', 'c'], 'd')); // Debería devolver null
console.log(eliminarElemento(['x', 'y', 'z'], 'y')); // Debería devolver ['x', 'z']
```

<hr>

# `Ejercicio 6: Crear una Lista de Nombres`

## Objetivo:
#### Completar la función crearLista que reciba un array de nombres y un string nombreDeLista, y haz que devuelva un string con el formato especificado.

## Descripción:
#### La función crearLista ya está definida y recibe un array de nombres y un string nombreDeLista como parámetros. Tu tarea es completar el código dentro de la función para que devuelva un string con el siguiente formato:

```
Lista de (nombreDeLista):
nombre1
nombre2
nombre3
```

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(crearLista(['juan', 'pepe', 'maria'], 'Amigos')); // Debería devolver 'Lista de Amigos:\njuan\npepe\nmaria'
console.log(crearLista([], 'Vacío')); // Debería devolver 'Lista de Vacío:'
console.log(crearLista(['pedro', 'ana', 'luisa'], 'Familias')); // Debería devolver 'Lista de Familias:\npedro\nana\nluisa'
```

<hr>

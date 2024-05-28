const homeworks = require('../src/homeworks');

// Ejercicio 1: Suma de Todos los Números en un Array
describe("sumarArray", function() {
    it("debería devolver la suma de todos los números en el array", function() {
        const numeros = [1, 2, 3, 4, 5];
        const resultado = homeworks.sumarArray(numeros);
        expect(resultado).toBe(15);
    });

    it("debería devolver 0 para un array vacío", function() {
        const numeros = [];
        const resultado = homeworks.sumarArray(numeros);
        expect(resultado).toBe(0);
    });

    it("debería manejar arrays con números negativos", function() {
        const numeros = [-1, -2, -3, -4, -5];
        const resultado = homeworks.sumarArray(numeros);
        expect(resultado).toBe(-15);
    });
});

//Ejercicio 2: Concatenación de Todos los Strings en un Array
describe("concatenarStrings", function() {
  it("debería devolver 'Hola Mundo' al concatenar ['Hola', ' ', 'Mundo']", function() {
      expect(homeworks.concatenarStrings(["Hola", " ", "Mundo"])).toEqual("Hola Mundo");
  });

  it("debería devolver 'JavaScript es genial' al concatenar ['JavaScript', ' ', 'es', ' ', 'genial']", function() {
      expect(homeworks.concatenarStrings(["JavaScript", " ", "es", " ", "genial"])).toEqual("JavaScript es genial");
  });

  it("debería devolver '' al concatenar un array vacío", function() {
      expect(homeworks.concatenarStrings([])).toEqual("");
  });
});

// Ejercicio 3: Filtrar Números Mayores a 10
describe("filtrarMayoresADiez", function() {
  it("debería devolver [12, 15] al filtrar [5, 12, 8, 15, 3]", function() {
    expect(homeworks.filtrarMayoresADiez([5, 12, 8, 15, 3])).toEqual([12, 15]);
  });

  it("debería devolver [20, 30] al filtrar [20, 5, 10, 30]", function() {
    expect(homeworks.filtrarMayoresADiez([20, 5, 10, 30])).toEqual([20, 30]);
  });

  it("debería devolver [] al filtrar [1, 2, 3, 4, 5]", function() {
    expect(homeworks.filtrarMayoresADiez([1, 2, 3, 4, 5])).toEqual([]);
  });

  it("debería devolver [] al filtrar un array vacío", function() {
    expect(homeworks.filtrarMayoresADiez([])).toEqual([]);
  });
});


// Ejercicio 4: Suma de Números Pares en un Array
describe("sumarPares", function() {
  it("debería devolver 20 al sumar [5, 12, 8, 15, 3]", function() {
    expect(homeworks.sumarPares([5, 12, 8, 15, 3])).toBe(20);
  });

  it("debería devolver 0 al sumar [1, 3, 5, 7]", function() {
    expect(homeworks.sumarPares([1, 3, 5, 7])).toBe(0);
  });

  it("debería devolver -6 al sumar [-1, -2, -3, -4]", function() {
    expect(homeworks.sumarPares([-1, -2, -3, -4])).toBe(-6);
  });

  it("debería devolver 0 al sumar un array vacío", function() {
    expect(homeworks.sumarPares([])).toBe(0);
  });
});

// Ejercicio 5: Eliminar un Elemento de un Array
describe("eliminarElemento", function() {
  it("debería devolver ['a', 'c'] al eliminar 'b' de ['a', 'b', 'c']", function() {
    expect(homeworks.eliminarElemento(['a', 'b', 'c'], 'b')).toEqual(['a', 'c']);
  });

  it("debería devolver ['a', 'b'] al eliminar 'c' de ['a', 'b', 'c']", function() {
    expect(homeworks.eliminarElemento(['a', 'b', 'c'], 'c')).toEqual(['a', 'b']);
  });

  it("debería devolver null si el elemento no está en el array", function() {
    expect(homeworks.eliminarElemento(['a', 'b', 'c'], 'd')).toBe(null);
  });

  it("debería devolver ['a', 'b', 'c'] si se elimina un elemento de un array con un solo elemento que no coincide", function() {
    expect(homeworks.eliminarElemento(['a', 'b', 'c'], 'd')).toEqual(['a', 'b', 'c']);
  });
});

// Ejercicio 6: Crear una Lista de Nombres
describe("crearLista", function() {
  it("debería devolver 'Lista de Amigos:\njuan\npepe\nmaria' al pasar ['juan', 'pepe', 'maria'] y 'Amigos'", function() {
    const nombres = ['juan', 'pepe', 'maria'];
    const nombreDeLista = 'Amigos';
    const resultado = homeworks.crearLista(nombres, nombreDeLista);
    expect(resultado).toBe('Lista de Amigos:\njuan\npepe\nmaria');
  });

  it("debería devolver 'Lista de Familias:\npedro\nana\nluisa' al pasar ['pedro', 'ana', 'luisa'] y 'Familias'", function() {
    const nombres = ['pedro', 'ana', 'luisa'];
    const nombreDeLista = 'Familias';
    const resultado = homeworks.crearLista(nombres, nombreDeLista);
    expect(resultado).toBe('Lista de Familias:\npedro\nana\nluisa');
  });

  it("debería devolver 'Lista de Vacío:' al pasar [] y 'Vacío'", function() {
    const nombres = [];
    const nombreDeLista = 'Vacío';
    const resultado = homeworks.crearLista(nombres, nombreDeLista);
    expect(resultado).toBe('Lista de Vacío:');
  });
});

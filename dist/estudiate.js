"use strict";
// Función tipada: recibe un número y devuelve un número.
function redondear(valor) {
    return Math.round(valor * 100) / 100;
}
// La clase implementa la interfaz; sus propiedades llevan tipo.
class Estudiante {
    constructor(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
    estado() {
        if (this.creditos < 1 || this.creditos > 24) {
            return "Créditos inválidos";
        }
        else if (this.creditos >= 12) {
            return "Matriculado";
        }
        else {
            return "Pendiente";
        }
    }
}
// Arreglo tipado: solo admite objetos Estudiante.
const estudiantes = [
    new Estudiante("María Torres", 18),
    new Estudiante("Luis Pérez", 8),
    new Estudiante("Ana Ruiz", 14)
];
console.log("=== Mini-LMS (Node + TypeScript) ===");
estudiantes.forEach((e) => {
    console.log(`${e.nombre} -> ${e.estado()}`);
});
const matriculados = estudiantes.filter((e) => e.creditos >= 12).length;
console.log("Matriculados:", matriculados);
console.log("Promedio de créditos:", redondear(estudiantes.reduce((suma, e) => suma + e.creditos, 0) /
    estudiantes.length));
// LÓGICA PARA SUMAS
function sumar() {
    let sumas = 0;
    for (const e of estudiantes) {
        sumas = sumas + e.creditos;
    }
    console.log("La suma es: " + sumas);
}
sumar();
// MÍNIMO Y MÁXIMO
function minYmax() {
    let listaCre = [];
    for (const e of estudiantes) {
        listaCre.push(e.creditos);
    }
    let maximo = Math.max(...listaCre);
    let minimo = Math.min(...listaCre);
    console.log("El máximo valor es: " + maximo);
    console.log("El mínimo valor es: " + minimo);
}
minYmax();

"use strict";
class alumno {
    constructor(nombre, curso, nota) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
    }
}
const alumnos = [
    new alumno("Mária", "Ciencias", 15),
    new alumno("Juan", "Matemáticas", 10),
    new alumno("Kevin", "Historia del Perú", 19)
];
function sumYprom() {
    let sum = 0;
    for (const a of alumnos) {
        sum = sum + a.nota;
    }
    console.log("La suma de notas es: " + sum);
    let prom;
    prom = sum / alumnos.length;
    console.log("El promedio de notas es de: " + prom);
}
function maxYmin() {
    let listaFil = [];
    for (const a of alumnos) {
        listaFil.push(a.nota);
    }
    let max = Math.max(...listaFil);
    let min = Math.min(...listaFil);
    console.log("El valor mínimo de notas es: " + min);
    console.log("El valor máximo de notas es: " + max);
}
sumYprom();
maxYmin();

class alumno{
    nombre : String;
    curso : String;
    nota : number;

    constructor(nombre: string, curso: String, nota: number) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
    }
}

const alumnos : alumno[] = [
    new alumno("Mária","Ciencias",15),
    new alumno("Juan","Matemáticas",10),
    new alumno("Kevin","Historia del Perú",19)
];

function sumYprom(){
    let sum : number = 0;
    for(const a of alumnos){
        sum = sum + a.nota;
    }
    console.log("La suma de notas es: " + sum);
    
    let prom : number;
    prom = sum / alumnos.length;
    console.log("El promedio de notas es de: " + prom)
}

function maxYmin(){
    let listaFil : number[] = [];
    for(const a of alumnos){
        listaFil.push(a.nota);
    }

    let max : number = Math.max(...listaFil);
    let min : number = Math.min(...listaFil); 

    console.log("El valor mínimo de notas es: " + min);
    console.log("El valor máximo de notas es: " + max);
}

sumYprom();
maxYmin();
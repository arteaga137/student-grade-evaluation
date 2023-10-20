/* 
Las notas de María, Juan y Luis en los exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/

// Definir objetos para cada estudiante. Name = Nombre; Grade = Nota.
const maria = {
    name: "Maria",
    grade: [10, 3, 6, 7]
};
const juan = {
    name: "Juan",
    grade: [5, 6, 1, 4]
};
const luis = {
    name: "Luis",
    grade: [9, 1, 1, 8]
};

// Calcular promedio
const averageMaria = (maria.grade[0] + maria.grade[1] + maria.grade[2] + maria.grade[3]) / 4;
const averageJuan = (juan.grade[0] + juan.grade[1] + juan.grade[2] + juan.grade[3]) / 4;
const averageLuis = (luis.grade[0] + luis.grade[1] + luis.grade[2] + luis.grade[3]) / 4;

// bloque if-else para evaluar si el estudiante suspende o aprueba
if (averageMaria < 5) {
    console.log(maria.name + " suspende")
} else if ((averageMaria >= 5) && (averageMaria > 8)) {
    console.log(maria.name + " aprueba")
} else {
    console.log(maria.name + " tiene un notable")
};
if (averageJuan < 5) {
    console.log(juan.name + " suspende")
} else if ((averageJuan >= 5) && (averageJuan > 8)) {
    console.log(juan.name + " aprueba")
} else {
    console.log(juan.name + " tiene un notable")
};
if (averageLuis < 5) {
    console.log(luis.name + " suspende")
} else if ((averageLuis >= 5) && (averageLuis > 8)) {
    console.log(luis.name + " aprueba")
} else {
    console.log(luis.name + " tiene un notable")
};
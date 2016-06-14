var	alumno1	=	{nombre:	"Matías",	edad:5}
var	alumno2	=	alumno1
alumno2.nombre	=	"Sebastián"

console.log("ambas variables (alumno1 y alumno2) apunta al mismo espacio de memoria, por lo tanto al doficicar una se modifican ambas");

console.log("alumno1: ");console.log(alumno1);
console.log("alumno2: ");console.log(alumno2);

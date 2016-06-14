function Alumno(nombre, notas) {
  if (typeof(nombre) == "string") {
    this.nombre = nombre;
  } else {
    alert("Nombre debe ser un String");
    return false;
  }

  if (notas instanceof Array) {
    //Solo retornamos un arreglos con enteros y omitimos los que no lo son
    this.notas =  notas.filter(function(e){return !isNaN(e)}).map(function(e){return Math.round(e)})
  } else {
    alert("Notas no es un arreglo")
    return false;
  }
}

// Agregando el metodo promedio a la clase Alumno
Alumno.prototype.promedio = function () {
  var suma = this.notas.reduce(function(acum, e){return acum + e}, 0);
  return suma / this.notas.length;
};

//Probando
var alumno1	=	new Alumno("Oscar", [10, 9, 10])
var promedio = alumno1.promedio() //	9.6666667
console.log("El promedio de Oscar es: " + promedio);

var alumno2	=	new Alumno("Pedro", [10, 9,"f",11.4, 10])
var promedio = alumno2.promedio() //	10
console.log("El promedio de Pedro es: " + promedio);

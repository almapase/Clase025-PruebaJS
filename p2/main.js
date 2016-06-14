function copia_objeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Probando la función copia_objeto
console.log("Probando la función copia_objeto");

var peli1 = {
    "nombre" : "sin filtro",
    "genero" : "Drama",
    "anio" : "2016",
    "tags" : [ "buena", "humor", "Chilena", "drama" ]
};

console.log("peli1: ");
console.log(peli1);

peli2 = copia_objeto(peli1);
console.log("Peli2 despues de copiada");
console.log(peli2);

//modificamos peli2
console.log("peli2");
console.log("peli2.nombre = 'Sin filtro 2';");
console.log("peli2.tags.push('Fome');");

peli2.nombre = "Sin filtro 2";
peli2.tags.push("Fome");

// revisamos los objetos

console.log("peli1: ");
console.log(peli1);

console.log("peli2: ");
console.log(peli2);

//Array
/* let frutas = ["Banana", "Manzana","Pera"]; */
// extraer datos de un array sin destructuring
/* let manzana = frutas[1]
console.log(manzana);
 */
// objeto
/* let auto = {
    marca: "Citroen",
    modelo:"C3",
    anio: 2003
}
// extraer datos de un objeto sin destructuring
let marcaAuto = auto.marca
console.log(marcaAuto); */

// destructuring Array
/* let colores = ["Rojo","Amarillo","Verde","Celeste"]
let [color1,color2,color3,color4] = colores */

/* let frutas = ["Banana", "Manzana","Pera"];
let [amarillo,rojo,verde] = frutas
console.log(amarillo); */

// destructuring objeto
/* let auto = {
    marca: "Citroen",
    modelo:"C3",
    anio: 2003
}
let {marca,modelo:nuevaVariable}= auto
console.log(nuevaVariable);
 */

//

//spread operator arrays
/* let colores = ["Rojo","Amarillo","Verde","Celeste"] */
/* let colores2 = ["Azul","violeta","Naranja"]

let todosLosColores=[...colores,...colores2]
console.log(todosLosColores); */

//spread operator objetos
/* 
let generoAccion ={
    nombreGenero:"Accion",
    popularidad:10
};

let rambo ={
    titulo: "Rambo",
    ranking:1,
    duracion:120,
...generoAccion
}

console.log(rambo); */
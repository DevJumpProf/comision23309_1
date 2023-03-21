// sentencia while
/* 
let numero = Number(prompt ("Dime un numero"));

 */
/* while (numero<1000){
    numero++;
    document.write(numero + "<br>");
    if(numero ==500){
        break;
    }
} */

//do while

/* do{
    numero++;
    document.write(numero + "<br>")
}while (numero<10)
 */


/* while (numero<1000){
    numero++;
    document.write(numero + "<br>")
}
 */
//1000


//for


// declaramos la variable, expresion condicional;incrementamos la variable
/* for (let i=0;i<10;i++){
    console.log(i);
} */

/* for (let i = 1;i<=10;i++){

    console.log(2*i);
}
 */

//
/* for (let i = 0;i>=0;i++){
    console.log(i);
}
 */

//Arrays - matriz - arreglo

// indice  (acceder) 0         1       2       3       4         5     6    
/* let colores = ["Amarillo", "Azul", "Verde","Negro", "Blanco","Rojo","Rosa"]; */
//cantidad de datos 1        2       3       4          5     6       7
//.length 

/* for(let i=0; i < colores.length; i++){
    console.log(colores[i])
  } */
/* 
console.log(colores[2]); // accedo a un elemento por su indice
console.log(colores.length);  // contamos la cantidad de datos
console.log(colores[colores.length-1]); / */// accedo al ultimo elemento

// metodos de array
              //    0        1      2       3        4        5
let animales = ["Gato","Perro","Ñandu","Pajaro","Tortuga","Gato"];

let numeros = [1,2,8,7,4,6,7,3];



//slice()

/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.  */
/* let nuevoArray= animales.slice(1,4)
console.log(nuevoArray); */

//unshift
//Agrega Inicio al final del array
/* animales.unshift("Iguana")
console.log(animales)  */

//shift
// elimina elemento al inicio del array
/* animales.shift()
console.log(animales) */


// .pop()
/* animales.pop();
console.log(animales) */ 

//.push()
// elimina elemento al final del array
/* animales.push("Cocodrilo","Rata")
console.log(animales); */

//find()
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* const nuevoArray = numeros.find(elements=>elements>3);
console.log(nuevoArray); */


//forEach
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */

/* animales.forEach((element,i)=>{
    console.log(`el ${element} está en la posicion ${i}`);
})
 */

//filter()
/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* let nuevoArray = animales.filter(elements=>elements==="Gato"||elements==="Perro")
console.log(nuevoArray); */

//.map
/* .map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original.
.map */

/*  let nuevoArray = numeros.map(elements=>elements*10);
console.log(nuevoArray); 

 */











/* PASAR A FUNCION FLECHA
PASAR A IF TERNARIO
UTILIZAR PLANTILLAS LITERALES TEMPLATE LITERALS `` (BACKSTICKS) O ACENTUACION GRAVE
 */
/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Batman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 37;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



/* function devolverString(str) {

console.log(str)
}
devolverString("Cadena de texto")
 */
// Funcion Flecha
//podemos prescindir de los parentesis si solo recibe un argumento

const devolverString = str=>{console.log(str)};devolverString("Cadena de texto")

/* 
function suma(x, y) {
console.log(x+y);

}
suma(10,10) */
// Funcion Flecha
const suma = (x,y)=>{
  console.log(x+y)
};
  suma (10,10)

function resta(x, y) {
console.log(x-y)
}
resta(20,10)


function multiplica(x, y) {
return(x*y)   //ejemplo return

}
console.log(multiplica(4, 2) )

function divide(x, y) {
  console.log(x/y);
}
divide(21,7)

function sonIguales(x, y) {
console.log(x===y); // en una linea
/* if (x===y){
  console.log(true)
}else{
  console.log(false)
} */
}
sonIguales(20,20)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(str1.length===str2.length);

}
tienenMismaLongitud("Ringo", "Rocas")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(num<90);
}
menosQueNoventa(87)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num>50);

}
mayorQueCincuenta(49)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
console.log(x%y);
}
obtenerResto(24,7)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
return(num%2===0);
  
}
console.log(esPar(10))

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(num%2===1);
console.log(num%2!==0);
}
esImpar(9)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
console.log(Math.pow(num,2));
}
elevarAlCuadrado(3)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  console.log(Math.pow(num,3));
}
elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  console.log(Math.pow(num,exponent))

}
elevar(2,3)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
console.log(Math.round(num));
}
redondearNumero(6.3)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
console.log(Math.ceil(num));

}
redondearHaciaArriba(6.3)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
/* console.log(Math.trunc(Math.random()*10));  */ // numero random entre 0 y 10
console.log(Math.random());
}
numeroRandom()

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
if(numero>0){
  console.log("ES positivo");
}else if( numero<0){
  console.log("ES Negativo");
}else{
  console.log(false);
}

(numero > 0) ? console.log( "Es positivo") : (numero == 0) ?  console.log(false) :   console.log("ES Negativo");
}
esPositivo(-1)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
console.log(str + "!");

}
agregarSimboloExclamacion("Hola Mundo")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  console.log("Hola " + nombre + " " + apellido);
/*   template literals */
  console.log(`hola como estas ${nombre} ${apellido} un gusto conocerte`);

}
combinarNombres("Bruce", "Wayne") 

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
console.log("Hola " + nombre);
}
obtenerSaludo("Nadia")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  console.log(alto*ancho);

}
obtenerAreaRectangulo(10, 7)

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
console.log(lado*4);
}
retornarPerimetro(4)

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
console.log((base*altura)/2);
}
areaDelTriangulo(10,8)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  console.log("Tu cambio en dolares es: " + euro*1.20);

}
deEuroAdolar(20)

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
/*   opcion 1 */
/* if(letra.length!==1){
  console.log("Dato incorrecto ingresaste mas de un caracter");
}else if (letra.toLowerCase()=="a" ||letra.toLowerCase()=="e" ||letra.toLowerCase()=="i" ||letra.toLowerCase()=="o" ||letra.toLowerCase()=="u" ){
  console.log("ingreaste la letra " + letra + " Es Vocal!!");
}else{
console.log("ingresaste la letra " + letra + " NO ES VOCAL");
} */

 if(letra.length!==1){
  console.log("Dato incorrecto ingresaste mas de un caracter");
}else if (letra=="a" ||letra=="e" ||letra=="i" ||letra=="o" ||letra=="u" ){
  console.log("ingreaste la letra " + letra + " Es Vocal!!");
}else{
console.log("ingresaste la letra " + letra + " NO ES VOCAL");
}

}
esVocal("g".toLowerCase())

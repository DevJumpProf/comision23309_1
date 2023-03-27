// funcion para que cargue las peliculas.


//API
// https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=1


let pagina = 1; //variable para controlar la paginacion

//capturo los botones
let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

// funcion boton Anterior.

btnAnterior.addEventListener("click",()=>{
    if(pagina>1){
     /*    pagina = pagina -1 */
        pagina-=1
        //llamar a la funcion que carga las paginas.    
        }
});

btnSiguiente.addEventListener("click",()=>{
    if (pagina<=500){
        pagina+=1
          //llamar a la funcion que carga las paginas.    
    }
})




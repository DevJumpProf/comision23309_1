// funcion para que cargue las peliculas.
window.addEventListener("load",()=>{
    cargarPeliculas()
})
//API
// https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=1

let pagina = 1; //variable para controlar la paginacion



//capturo los botones
let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

// funcion boton Anterior.

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas()
    //llamar a la funcion que carga las paginas.
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    pagina += 1;
    cargarPeliculas()
    //llamar a la funcion que carga las paginas.
  }
});

//funcion que carga las peliculas

const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=${pagina}`
    );
     console.log(respuesta)

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
       console.log(datos)
        let peliculas = "";

      datos.results.forEach((pelicula) => {
        peliculas += `<div class="pelicula" >
<img class="poster" src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
<h3 class= "titulo">${pelicula.title}</h3>
</div>
`;
      });
      document.querySelector("#contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 404) {
      console.log("lo buscado no esta disponible");
    }
  } catch (error) {
    console.log(error);
  }
  let titulo = document.querySelector("#titulo").innerHTML = `Pagina : ${pagina}`
};

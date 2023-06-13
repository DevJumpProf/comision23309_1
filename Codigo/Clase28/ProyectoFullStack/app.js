/* const express = require ("express") */
import express from "express"; // importo express
import cors from "cors"
import db from "./database/db.js"

const app = express(); //traigo los metodos de express

const port = 8000; // defino el puerto

app.use(cors())
app.use(express.json())
// chequeo conexion base de datos

try {
  await db.authenticate()
  console.log("Conexion exitosa A la DataBase");
} catch (error) {
  console.log(`Conexion Fallida error ${error}`);
}


app.listen(port, () => {
  console.log(`servidor ok en el puerto ${port}`);
});

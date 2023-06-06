/* const express = require ("express") */
import express from "express" // importo express

const app = express() //traigo los metodos de express

const port = 3000 // defino el puerto

app.get("/",(req,res)=>{
res.send ("estas en el index")
});
//defino rutas
app.get("/contacto",(req,res)=>{
    res.send ("estas contacto")
    });

    app.listen(port,()=>{
        console.log("servidor ok en el puerto"+ port);
    })



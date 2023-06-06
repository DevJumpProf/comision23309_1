/* const http = require ("http");  */
import http from "http"

const port = 3030;

const server = http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader("Content-Type", "text/html")
res.end("<h1>Hola desde el servidor</h1>")
})

server.listen(port,()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
})
// Definiendo constantes para instalar express
const express= require('express');
const app= express();
const path= require('path');
const publicPath=path.resolve(__dirname,'../public')

app.use(express.static(publicPath));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
   })

//Llamado del sv con puerto
const port = process.env.port || 3030;
app.listen(port,() =>console.log("Servidor corriendo en puerto "+ port));


/* -----------------------------LLAMADOS PARA SECCIONES -----------------------------*/


/* -------------------------------------------------------------- */
/* RUTA PARA INGRESAR A SECCION REGISTRO/CREAR CUENTA */
app.get('/register.html',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/register.html'))
})
/* RUTA PARA INGRESAR A CUENTA */

app.get('/login.html', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

/* -------------------------------------------------------------- */
/* RUTAS PARA VOLVER AL INICIO DESDE REGISTRO Y LOGIN */
app.post('/',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/register.html'))
})
app.post('/',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/login.html'))
})
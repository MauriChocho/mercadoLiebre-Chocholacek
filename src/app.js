// Definiendo constantes para instalar express
const express= require('express');
const app= express();
const path= require('path');
const publicPath=path.resolve(__dirname,'../public')

app.use(express.static(publicPath));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
   })

//Llamado del sv
app.listen(3030,() =>console.log("Servidor corriendo en puerto 3030"));
// uso de recursos publicos


/* LLAMADOS PARA SECCIONES */

/* RUTA PARA INGRESAR A SECCION REGISTRO/CREAR CUENTA */
app.get('/register.html',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/register.html'))
})

/* BOTON DE VOVLER A PAG, INICIO DE SECCION REGISTRO */
/* app.get('/index.html',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/index.html'))
}) */

/* RUTA PARA INGRESAR A CUENTA */

app.get('/login.html', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/register.html'))
})
app.post('/',function(req,res){
    res.sendFile(path.resolve(__dirname , './views/login.html'))
})
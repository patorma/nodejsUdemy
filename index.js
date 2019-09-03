const express = require('express')
const routes = require('./routes')
const path = require('path')

//Crear una app de express
const app = express()

//Habilitar pug (set es para agregar cierto valor)
app.set('view engine', 'pug')

//Añadir la carpeta de las vistas
//con esto leemos los archivos de la carpeta views
app.set('views', path.join(__dirname, './views'))
    //use cuando se hace un request a la aplicacion
app.use('/', routes())

//listen  escucha el puerto
app.listen(3000)
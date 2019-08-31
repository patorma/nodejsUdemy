const express = require('express')

//crear una app de express
const app = express()

//Ejemplo arreglo estatico como de bd
const productos = [{
        producto: 'Libro',
        precio: 20
    },
    {
        producto: 'Computadora',
        precio: 10000
    }
]

//ruta para el home
app.use('/', (req, res) => {
    res.json(productos)
})

app.listen(3000)
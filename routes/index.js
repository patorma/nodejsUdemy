const express = require('express')
const router = express.Router()

//importar controlador

const proyectosController = require('../controllers/proyectosController')

module.exports = function() { // equivalente a export default
    //ruta para el home
    router.get('/', proyectosController.proyectosHome)



    return router
}
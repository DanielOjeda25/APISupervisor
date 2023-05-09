// Importamos el módulo Router de Express
import { Router } from 'express';

// Importamos el controlador que maneja la ruta '/idClientes'
import { getIdCliente } from '../controllers/idClientes.controller.js'

// Creamos una instancia del router de Express
const router = Router()

// Definimos la ruta '/idClientes' y la función que manejará las peticiones a esta ruta
router.get('/idClientes', getIdCliente)

// Exportamos el router para que pueda ser utilizado por el servidor
export default router

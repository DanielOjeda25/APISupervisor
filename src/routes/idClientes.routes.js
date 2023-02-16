import { Router } from 'express';
import { getIdCliente } from '../controllers/idClientes.controller.js'

const router = Router()
router.get('/idClientes', getIdCliente)

export default router


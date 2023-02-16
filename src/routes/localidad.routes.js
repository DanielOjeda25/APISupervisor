import { Router } from 'express';
import { getLocalidades } from '../controllers/localidad.controller.js'

const router = Router()
router.get('/localidades', getLocalidades)

export default router


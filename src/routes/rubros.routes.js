import { Router } from 'express'
import { getRubros } from '../controllers/rubros.controllers.js'

const router = Router()
router.get('/rubros', getRubros)

export default router

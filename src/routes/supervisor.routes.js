import { Router } from 'express'
import { getSupervisores } from '../controllers/supervisor.controller.js'

const router = Router()
router.get('/supervisor', getSupervisores)

export default router

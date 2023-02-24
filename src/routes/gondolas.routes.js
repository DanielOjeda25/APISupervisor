import { Router } from 'express';
import { POSTGondola } from '../controllers/gondolas.controller.js'

const router = Router()
router.post('/gondolas', POSTGondola)

export default router


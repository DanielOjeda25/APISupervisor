import { Router } from 'express';
import { POSTGondola, GetGondolas } from '../controllers/gondolas.controller.js'

const router = Router()
router.post('/gondolas', POSTGondola)
router.get('/gondolas', GetGondolas)
export default router


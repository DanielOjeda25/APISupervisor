import { Router } from 'express';

const router = Router()
router.get('/', (req, res) => {
  res.json('Bienvenido')
})

export default router


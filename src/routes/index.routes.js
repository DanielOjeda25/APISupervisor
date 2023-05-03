import { Router } from 'express';

const router = Router()
router.get('/', (req, res) => {
  console.log('Has llegado')
})

export default router


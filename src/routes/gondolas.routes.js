import { Router } from 'express';
import { POSTGondola, GetGondolas } from '../controllers/gondolas.controller.js'

// Creamos el enrutador
const router = Router();

// Definimos la ruta para el método POST de /gondolas y la función controladora
router.post('/gondolas', POSTGondola);

// Definimos la ruta para el método GET de /gondolas y la función controladora
router.get('/gondolas', GetGondolas);

// Exportamos el enrutador como módulo predeterminado
export default router;

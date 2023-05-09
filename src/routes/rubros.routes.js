// Importamos el objeto Router desde el paquete express
import { Router } from 'express'

// Importamos la función "getRubros" desde el archivo "rubros.controllers.js"
import { getRubros } from '../controllers/rubros.controllers.js'

// Creamos un nuevo objeto Router
const router = Router()

// Configuramos una ruta GET "/rubros" que llamará a la función "getRubros"
router.get('/rubros', getRubros)

// Exportamos el objeto Router
export default router

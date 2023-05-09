// Importamos el módulo Router de express
import { Router } from 'express';

// Creamos una instancia del enrutador
const router = Router()

// Agregamos una ruta para la raíz del servidor
router.get('/', (req, res) => {
  // Enviamos una respuesta con un mensaje de bienvenida
  res.send('<h1>Bienvenido</h1>')
  // Imprimimos un mensaje en la consola para registrar el acceso
  console.log('Has llegado')
})

// Exportamos el enrutador para su uso en otros módulos
export default router

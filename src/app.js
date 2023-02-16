import express from 'express'
import config from './dbConfig.js'
import rubrosRouter from './routes/rubros.routes.js'
import idClientes from './routes/idClientes.routes.js'
import indexRoute from './routes/index.routes.js'

const app = express()
app.set('port', config.port)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(rubrosRouter)
app.use(idClientes)
app.use(indexRoute)
export default app

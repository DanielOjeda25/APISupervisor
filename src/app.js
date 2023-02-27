import express from 'express'
import config from './dbConfig.js'
import rubrosRouter from './routes/rubros.routes.js'
import idClientes from './routes/idClientes.routes.js'
import indexRoute from './routes/index.routes.js'
import gondolasRoute from './routes/gondolas.routes.js'
import corss from 'corss'

const app = express()
app.set('port', config.port)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(corss())
app.use(rubrosRouter)
app.use(idClientes)
app.use(indexRoute)
app.use(gondolasRoute)



export default app

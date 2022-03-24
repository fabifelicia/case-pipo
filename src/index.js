import express from 'express';
import clientsRoutes from './routes/clients.route.js'
import partnersRoutes from './routes/partners.route.js'


const port = 3333
const api = express()

api.use(express.json())
api.use(express.urlencoded())

api.use(clientsRoutes)
api.use(partnersRoutes)

api.listen(port, () => {
     console.log(`Server running on port ${port}`)
})
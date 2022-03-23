import express, { json, urlencoded } from 'express';
import clientsRoutes from './routes/clients.route.js'


const port = 3333
const api = express()

api.use(json())
api.use(urlencoded())

api.use(clientsRoutes)

api.listen(port, () => {
     console.log(`Server running on port ${port}`)
})
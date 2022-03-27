import 'dotenv/config'
import express from 'express';
import clientsRoutes from './routes/clients.route.js'
import partnersRoutes from './routes/partners.route.js'
import userRoutes from './routes/users.route.js'


const port = process.env.PORT
const api = express()

api.use(express.json())

api.use(clientsRoutes)
api.use(partnersRoutes)
api.use(userRoutes)

api.listen(port, () => {
     console.log(`Server running on port ${port}`)
})
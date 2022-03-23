import { Router } from 'express'

const clientsRoutes = Router()


clientsRoutes.get('/clients', (req, res) => {
    const clients = [{ name: 'Acme Co' }]
    res.status(200).send({clients})
})

clientsRoutes.get('/clients/:uuid', (req, res) => {
    const uuid = req.params.uuid
    res.status(200).send(uuid)
})

clientsRoutes.post('/clients', (req, res) => {
    const newClient = req.body
    res.status(200).send(newClient)
})

clientsRoutes.put('/clients/:uuid', (req, res) => {
    const uuid = req.params.uuid
    const modifiedClient = req.body

    modifiedClient.uuid = uuid

    res.status(200).send(modifiedClient)
})

clientsRoutes.delete('/clients/:uuid', (req, res) => {
    const uuid = req.params.uuid
    res.status(200).send({message:'Cliente deletado om sucesso'})
})

export default clientsRoutes

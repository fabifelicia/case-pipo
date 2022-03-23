import { Router } from 'express'
import ClientRepository from '../repositories/client.repository.js'

const clientsRoutes = Router()


clientsRoutes.get('/clients', async(req, res) => {
    const clients = await ClientRepository.findAllClients()
    res.status(200).send({clients})
})

clientsRoutes.get('/clients/:uuid', async(req, res) => {
    const uuid = req.params.uuid
    const client = await ClientRepository.findClientById(uuid)
    res.status(200).send(client)
})

clientsRoutes.post('/clients', async (req, res) => {
    const newClient = req.body

    const uuid = await ClientRepository.create(newClient)
    res.status(201).send(uuid)
})

clientsRoutes.put('/clients/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    const modifiedClient = req.body

    modifiedClient.uuid = uuid

    await ClientRepository.update(modifiedClient)

    res.status(200).send({message: 'Cliente alterado com sucesso'})
})

clientsRoutes.delete('/clients/:uuid', async(req, res) => {
    const uuid = req.params.uuid
    await ClientRepository.remove(uuid)
    res.status(200).send({message:'Cliente deletado om sucesso'})
})

export default clientsRoutes

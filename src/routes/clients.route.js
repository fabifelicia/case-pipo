import { Router } from 'express'
import ClientRepository from '../repositories/client.repository.js'

const clientsRoutes = Router()

clientsRoutes.get('/clients', async (req, res) => {
  const clients = await ClientRepository.findAllClients()
  res.status(200).send({ clients })
})

clientsRoutes.get('/clients/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const client = await ClientRepository.findClientById(uuid)
    res.status(200).send(client)
  } catch(error) {
    return res.status(404).json({ message: 'Cliente não encontrado'})
  }
  
})

clientsRoutes.post('/clients', async (req, res) => {
  const newClient = req.body

  const client = await ClientRepository.create(newClient)
  res.status(201).send(client)
})

clientsRoutes.put('/clients/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const modifiedClient = req.body
  
    modifiedClient.uuid = uuid
  
    await ClientRepository.update(modifiedClient)
  
    res.status(200).send({ message: 'Cliente alterado com sucesso' })
    
  } catch (error) {
    return res.status(404).json({ message: 'Cliente não encontrado'})
  }
})

clientsRoutes.delete('/clients/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    await ClientRepository.remove(uuid)
    res.status(200).send({ message: 'Cliente removido com sucesso' })    
  } catch (error) {
    return res.status(404).json({ message: 'Cliente não encontrado'})
  }
})

export default clientsRoutes

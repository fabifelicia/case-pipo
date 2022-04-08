import { Router } from 'express'
import PartnerRepository from '../repositories/partner.repository.js'

const partnersRoutes = Router()

partnersRoutes.get('/partners', async (req, res) => {
  const partners = await PartnerRepository.findAllPartners()
  res.status(200).send({ partners })
})

partnersRoutes.get('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const partner = await PartnerRepository.findPartnerById(uuid)    
    res.status(200).send(partner)
  } catch (error) {
    res.status(404).json({message: 'Parceiro não encontrado'})
  }
})

partnersRoutes.post('/partners', async (req, res) => {
  const newPartner = req.body

  const partner = await PartnerRepository.create(newPartner)
  res.status(201).send(partner)
})

partnersRoutes.put('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid

  try {
    const modifiedPartner = req.body
  
    modifiedPartner.uuid = uuid
  
    await PartnerRepository.update(modifiedPartner)
  
    res.status(200).send({ message: 'Parceiro alterado com sucesso' })
    
  } catch (error) {
    res.status(404).json({message: 'Parceiro não encontrado'})
  }
})

partnersRoutes.delete('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    await PartnerRepository.remove(uuid)
    res.status(200).send({ message: 'Parceiro removido com sucesso' })     
  } catch (error) {
    res.status(404).json({message: 'Parceiro não encontrado'})
  }
})

export default partnersRoutes

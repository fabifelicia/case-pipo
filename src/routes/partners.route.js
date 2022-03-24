import { Router } from 'express'
import PartnerRepository from '../repositories/partner.repository.js'

const partnersRoutes = Router()

partnersRoutes.get('/partners', async (req, res) => {
  const partners = await PartnerRepository.findAllPartners()
  res.status(200).send({ partners })
})

partnersRoutes.get('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const partner = await PartnerRepository.findPartnerById(uuid)
  res.status(200).send(partner)
})

partnersRoutes.post('/partners', async (req, res) => {
  const newPartner = req.body

  const uuid = await PartnerRepository.create(newPartner)
  res.status(201).send(uuid)
})

partnersRoutes.put('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const modifiedPartner = req.body

  modifiedPartner.uuid = uuid

  await PartnerRepository.update(modifiedPartner)

  res.status(200).send({ message: 'Parceiro alterado com sucesso' })
})

partnersRoutes.delete('/partners/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  await PartnerRepository.remove(uuid)
  res.status(200).send({ message: 'Parceiro deletado om sucesso' })
})

export default partnersRoutes

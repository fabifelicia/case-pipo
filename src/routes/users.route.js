import { Router } from 'express'
import UserRepository from '../repositories/client.repository.js'

const usersRoutes = Router()

usersRoutes.get('/users', async (req, res) => {
  const users = await UserRepository.findAllUsers()
  res.status(200).send({ users })
})

usersRoutes.get('/users/:cpf', async (req, res) => {
  const cpf = req.params.cpf
  const user = await UserRepository.findUserById(cpf)
  res.status(200).send(user)
})

usersRoutes.post('/users', async (req, res) => {
  const newUser = req.body

  const user = await UserRepository.create(newUser)
  res.status(201).send(user)
})

usersRoutes.put('/clients/:cpf', async (req, res) => {
  const uuid = req.params.cpf
  const modifiedUser = req.body

  modifiedUser.uuid = cpf

  await UserRepository.update(modifiedUser)

  res.status(200).send({ message: 'Usuário alterado com sucesso' })
})

usersRoutes.delete('/clients/:cpf', async (req, res) => {
  const cpf = req.params.cpf
  await UserRepository.remove(cpf)
  res.status(200).send({ message: 'Usuário removido com sucesso' })
})

export default usersRoutes

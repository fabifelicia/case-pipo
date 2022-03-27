import { Router } from 'express'
import UserRepository from '../repositories/user.repository.js'


const usersRoutes = Router()

usersRoutes.get('/users', async (req, res) => {
  const users = await UserRepository.findAllUsers()
  res.status(200).send({ users })
})

usersRoutes.get('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const user = await UserRepository.findUserById(uuid)
  res.status(200).send(user)
})

usersRoutes.post('/users', async (req, res) => {
  const newUser = req.body
  const user = await UserRepository.create(newUser)
  res.status(201).send(user)
})

usersRoutes.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body

  modifiedUser.uuid = uuid

  await UserRepository.update(modifiedUser)

  res.status(200).send({ message: 'Usuário alterado com sucesso' })
})

usersRoutes.delete('/users/:cpf', async (req, res) => {
  const uuid = req.params.uuid
  await UserRepository.remove(uuid)
  res.status(200).send({ message: 'Usuário removido com sucesso' })
})

export default usersRoutes

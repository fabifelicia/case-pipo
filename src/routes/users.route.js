import { Router } from "express";
import UserRepository from "../repositories/user.repository.js";

const usersRoutes = Router();

usersRoutes.get("/users", async (req, res) => {
  const users = await UserRepository.findAllUsers();
  res.status(200).send({ users });
});

usersRoutes.get("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const user = await UserRepository.findUserById(user_id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
  
  res.status(200).send(user);
});

usersRoutes.post("/users", async (req, res) => {
  const newUser = req.body;
  const user = await UserRepository.create(newUser);
  res.status(201).send(user);
});

usersRoutes.put("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const user = await UserRepository.findUserById(user_id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

  const modifiedUser = req.body;
  modifiedUser.user_id = user_id;

  await UserRepository.update(modifiedUser);
  res.status(200).send({ message: "Usuário alterado com sucesso" });
});

usersRoutes.delete("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const user = await UserRepository.findUserById(user_id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

  await UserRepository.remove(user_id);
  res.status(200).send({ message: "Usuário removido com sucesso" });
});

export default usersRoutes;

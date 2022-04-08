import { Router } from "express";
import ClientRepository from "../repositories/client.repository.js";

const clientsRoutes = Router();

clientsRoutes.get("/clients", async (req, res) => {
  const clients = await ClientRepository.findAllClients();
  res.status(200).send({ clients });
});

clientsRoutes.get("/clients/:client_id", async (req, res) => {
  const client_id = req.params.client_id;
  const client = await ClientRepository.findClientById(client_id);
  if (!client) {
    return res.status(404).json({ message: "Cliente não encontrado" });
  }
  res.status(200).send(client);
});

clientsRoutes.post("/clients", async (req, res) => {
  const newClient = req.body;

  const client = await ClientRepository.create(newClient);
  res.status(201).send(client);
});

clientsRoutes.put("/clients/:client_id", async (req, res) => {
  const { client_id } = req.params;
  const client = await ClientRepository.findClientById(client_id);

  if (!client) {
    return res.status(404).json({ message: "Cliente não encontrado" });
  } else {
    const modifiedClient = req.body;
    modifiedClient.client_id = client_id;

    await ClientRepository.update(modifiedClient);

    res.status(200).send({ message: "Cliente alterado com sucesso" });
  }
});

clientsRoutes.delete("/clients/:client_id", async (req, res) => {
  const { client_id } = req.params;

  const client = await ClientRepository.findClientById(client_id);
  if (!client) {
    return res.status(404).json({ message: "Cliente não encontrado" });
  } else {
    await ClientRepository.remove(client_id);
    res.status(200).send({ message: "Cliente removido com sucesso" });
  }
});

export default clientsRoutes;

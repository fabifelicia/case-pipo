import { Router } from "express";
import PartnerRepository from "../repositories/partner.repository.js";

const partnersRoutes = Router();

partnersRoutes.get("/partners", async (req, res) => {
  const partners = await PartnerRepository.findAllPartners();
  res.status(200).send({ partners });
});

partnersRoutes.get("/partners/:partner_id", async (req, res) => {
  const { partner_id } = req.params;

  const partner = await PartnerRepository.findPartnerById(partner_id);
  if (!partner) {
    return res.status(404).json({ message: "Parceiro não encontrado" });
  }
  res.status(200).send(partner);
});

partnersRoutes.post("/partners", async (req, res) => {
  const newPartner = req.body;

  const partner = await PartnerRepository.create(newPartner);
  res.status(201).send(partner);
});

partnersRoutes.put("/partners/:partner_id", async (req, res) => {
  A;
  const { partner_id } = req.params;

  const partner = await PartnerRepository.findPartnerById(partner_id);

  if (!partner) {
    return res.status(404).json({ message: "Parceiro não encontrado" });
  }
  const modifiedPartner = req.body;

  modifiedPartner.partner_id = partner_id;

  await PartnerRepository.update(modifiedPartner);

  res.status(200).send({ message: "Parceiro alterado com sucesso" });
});

partnersRoutes.delete("/partners/:partner_id", async (req, res) => {
  const { partner_id } = req.params;

  const partner = await PartnerRepository.findPartnerById(partner_id);
  if (!partner) {
    return res.status(404).json({ message: "Parceiro não encontrado" });
  }
  await PartnerRepository.remove(partner_id);
  res.status(200).send({ message: "Parceiro removido com sucesso" });
});

export default partnersRoutes;

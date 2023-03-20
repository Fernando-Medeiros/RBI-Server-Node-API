import type { Request } from "express";

import { EquipmentRepository } from "@inf/repositories/equipment.repository.impl";
import { EquipmentRequestsToCreate } from "@app/use-cases/equipment-cases/requests/create.requests";
import { EquipmentRequestsToDelete } from "@app/use-cases/equipment-cases/requests/delete.requests";
import { EquipmentRequestsToUpdate } from "@app/use-cases/equipment-cases/requests/update.requests";
import { EquipmentRequestsToGetById } from "@app/use-cases/equipment-cases/requests/get-by-id.requests";

import { createCase } from "@app/use-cases/equipment-cases/create.case";
import { deleteCase } from "@app/use-cases/equipment-cases/delete.case";
import { getByIdCase } from "@app/use-cases/equipment-cases/get-by-id.case";
import { updateCase } from "@app/use-cases/equipment-cases/update.case";

export const EquipmentHandler = {
  async getEquipmentById(req: Request) {
    const { id } = req.params;

    return await getByIdCase(
      new EquipmentRequestsToGetById(id as string),
      new EquipmentRepository()
    );
  },

  async createEquipment(req: Request) {
    const { sub } = req.headers;

    return await createCase(
      new EquipmentRequestsToCreate(sub as string),
      new EquipmentRepository()
    );
  },

  async deleteEquipment(req: Request) {
    const { sub } = req.headers;

    return await deleteCase(
      new EquipmentRequestsToDelete(sub as string),
      new EquipmentRepository()
    );
  },

  async updateEquipment(req: Request) {
    const { sub } = req.headers;
    const {
      head,
      body,
      leg,
      handLeft,
      handRight,
      accessoryLeft,
      accessoryRight,
    } = req.body;

    return await updateCase(
      new EquipmentRequestsToUpdate(sub as string, {
        head,
        body,
        leg,
        handLeft,
        handRight,
        accessoryLeft,
        accessoryRight,
      }),
      new EquipmentRepository()
    );
  },
};

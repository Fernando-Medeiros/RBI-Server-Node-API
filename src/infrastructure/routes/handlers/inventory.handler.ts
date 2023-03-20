import type { Request } from "express";

import { InventoryRepository } from "@inf/repositories/inventory.repository.impl";
import { InventoryRequestsToCreate } from "@app/use-cases/inventory-cases/requests/create.requests";
import { InventoryRequestsToDelete } from "@app/use-cases/inventory-cases/requests/delete.requests";
import { InventoryRequestsToUpdate } from "@app/use-cases/inventory-cases/requests/update.requests";
import { InventoryRequestsToGetById } from "@app/use-cases/inventory-cases/requests/get-by-id.requests";

import { createCase } from "@app/use-cases/inventory-cases/create.case";
import { deleteCase } from "@app/use-cases/inventory-cases/delete.case";
import { getByIdCase } from "@app/use-cases/inventory-cases/get-by-id.case";
import { updateCase } from "@app/use-cases/inventory-cases/update.case";

export const InventoryHandler = {
  async getInventoryById(req: Request) {
    const { id } = req.params;

    return await getByIdCase(
      new InventoryRequestsToGetById(id as string),
      new InventoryRepository()
    );
  },

  async createInventory(req: Request) {
    const { sub } = req.headers;

    return await createCase(
      new InventoryRequestsToCreate(sub as string),
      new InventoryRepository()
    );
  },

  async deleteInventory(req: Request) {
    const { sub } = req.headers;

    return await deleteCase(
      new InventoryRequestsToDelete(sub as string),
      new InventoryRepository()
    );
  },

  async updateInventory(req: Request) {
    const { sub } = req.headers;
    const { armors, accessories, consumables, materials, weapons } = req.body;

    return await updateCase(
      new InventoryRequestsToUpdate(sub as string, {
        armors,
        accessories,
        consumables,
        materials,
        weapons,
      }),
      new InventoryRepository()
    );
  },
};

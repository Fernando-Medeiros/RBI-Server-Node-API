import type { Request } from "express";
import { InventoryRepository } from "infra/repositories/inventory.repository.impl";
import { InventoryRequestsToCreate } from "app/use-cases/inventory-cases/requests/create.requests";
import { InventoryRequestsToDelete } from "app/use-cases/inventory-cases/requests/delete.requests";
import { InventoryRequestsToUpdate } from "app/use-cases/inventory-cases/requests/update.requests";
import { InventoryRequestsToGetById } from "app/use-cases/inventory-cases/requests/get-by-id.requests";
import { createCase } from "app/use-cases/inventory-cases/create.case";
import { deleteCase } from "app/use-cases/inventory-cases/delete.case";
import { getByIdCase } from "app/use-cases/inventory-cases/get-by-id.case";
import { updateCase } from "app/use-cases/inventory-cases/update.case";

export class InventoryHandler {
  private readonly Repository = new InventoryRepository();

  async getInventoryById(req: Request) {
    return await getByIdCase(
      new InventoryRequestsToGetById(Object(req.params)),
      this.Repository
    );
  }

  async createInventory(req: Request) {
    return await createCase(
      new InventoryRequestsToCreate(Object(req.headers)),
      this.Repository
    );
  }

  async deleteInventory(req: Request) {
    return await deleteCase(
      new InventoryRequestsToDelete(Object(req.headers)),
      this.Repository
    );
  }

  async updateInventory(req: Request) {
    return await updateCase(
      new InventoryRequestsToUpdate(Object.assign(req.headers, req.body)),
      this.Repository
    );
  }
}

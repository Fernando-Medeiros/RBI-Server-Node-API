import type { Request } from 'express';
import { InventoryRepository } from '../repositories/inventory.repository.impl';
import { InventoryRequests } from '../requests/inventory.request.impl';
import { createCase } from 'app/use-cases/inventory-cases/create.case';
import { deleteCase } from 'app/use-cases/inventory-cases/delete.case';
import { updateCase } from 'app/use-cases/inventory-cases/update.case';
import { getByIdCase } from 'app/use-cases/inventory-cases/get-by-id.case';

export default class InventoryHandler {
    private static readonly Repository = new InventoryRepository();

    static async getInventoryById(req: Request) {
        return getByIdCase(
            new InventoryRequests({ ...req.params, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    static async createInventory(req: Request) {
        return createCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    static async deleteInventory(req: Request) {
        return deleteCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    static async updateInventory(req: Request) {
        return updateCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }
}

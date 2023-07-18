import type { Request } from 'express';
import { InventoryRepository } from 'infra/repositories/inventory.repository.impl';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { createCase } from 'app/use-cases/inventory-cases/create.case';
import { deleteCase } from 'app/use-cases/inventory-cases/delete.case';
import { updateCase } from 'app/use-cases/inventory-cases/update.case';
import { getByIdCase } from 'app/use-cases/inventory-cases/get-by-id.case';

export class InventoryHandler {
    private static readonly Repository = new InventoryRepository();

    async getInventoryById(req: Request) {
        return await getByIdCase(
            new InventoryRequests({ ...req.params, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    async createInventory(req: Request) {
        return await createCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    async deleteInventory(req: Request) {
        return await deleteCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }

    async updateInventory(req: Request) {
        return await updateCase(
            new InventoryRequests({ ...req.headers, ...req.body }),
            InventoryHandler.Repository,
        );
    }
}

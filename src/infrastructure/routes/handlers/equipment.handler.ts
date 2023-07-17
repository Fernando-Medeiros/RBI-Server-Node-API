import type { Request } from 'express';
import { EquipmentRepository } from 'infra/repositories/equipment.repository.impl';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { createCase } from 'app/use-cases/equipment-cases/create.case';
import { deleteCase } from 'app/use-cases/equipment-cases/delete.case';
import { updateCase } from 'app/use-cases/equipment-cases/update.case';
import { getByIdCase } from 'app/use-cases/equipment-cases/get-by-id.case';

export class EquipmentHandler {
    private static readonly Repository = new EquipmentRepository();

    async getEquipmentById(req: Request) {
        return await getByIdCase(
            new EquipmentRequests({ ...req.params, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    async createEquipment(req: Request) {
        return await createCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    async deleteEquipment(req: Request) {
        return await deleteCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    async updateEquipment(req: Request) {
        return await updateCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }
}

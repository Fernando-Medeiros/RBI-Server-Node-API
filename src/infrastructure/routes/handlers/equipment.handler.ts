import type { Request } from 'express';
import { EquipmentRepository } from 'infra/repositories/equipment.repository.impl';
import { EquipmentRequestsToCreate } from 'app/use-cases/equipment-cases/requests/create.requests';
import { EquipmentRequestsToDelete } from 'app/use-cases/equipment-cases/requests/delete.requests';
import { EquipmentRequestsToUpdate } from 'app/use-cases/equipment-cases/requests/update.requests';
import { EquipmentRequestsToGetById } from 'app/use-cases/equipment-cases/requests/get-by-id.requests';
import { createCase } from 'app/use-cases/equipment-cases/create.case';
import { deleteCase } from 'app/use-cases/equipment-cases/delete.case';
import { getByIdCase } from 'app/use-cases/equipment-cases/get-by-id.case';
import { updateCase } from 'app/use-cases/equipment-cases/update.case';

export class EquipmentHandler {
    private readonly Repository = new EquipmentRepository();

    async getEquipmentById(req: Request) {
        return await getByIdCase(
            new EquipmentRequestsToGetById(Object(req.params)),
            this.Repository,
        );
    }

    async createEquipment(req: Request) {
        return await createCase(
            new EquipmentRequestsToCreate(Object(req.headers)),
            this.Repository,
        );
    }

    async deleteEquipment(req: Request) {
        return await deleteCase(
            new EquipmentRequestsToDelete(Object(req.headers)),
            this.Repository,
        );
    }

    async updateEquipment(req: Request) {
        return await updateCase(
            new EquipmentRequestsToUpdate(
                Object.assign({}, req.headers, req.body),
            ),
            this.Repository,
        );
    }
}

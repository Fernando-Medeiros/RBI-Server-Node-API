import type { Request } from 'express';
import { EquipmentRepository } from '../repositories/equipment.repository.impl';
import { EquipmentRequests } from '../requests/equipment.request.impl';
import { createCase } from 'app/use-cases/equipment-cases/create.case';
import { deleteCase } from 'app/use-cases/equipment-cases/delete.case';
import { updateCase } from 'app/use-cases/equipment-cases/update.case';
import { getByIdCase } from 'app/use-cases/equipment-cases/get-by-id.case';

export default class EquipmentHandler {
    private static readonly Repository = new EquipmentRepository();

    static async getEquipmentById(req: Request) {
        return getByIdCase(
            new EquipmentRequests({ ...req.params, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    static async createEquipment(req: Request) {
        return createCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    static async deleteEquipment(req: Request) {
        return deleteCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }

    static async updateEquipment(req: Request) {
        return updateCase(
            new EquipmentRequests({ ...req.headers, ...req.body }),
            EquipmentHandler.Repository,
        );
    }
}

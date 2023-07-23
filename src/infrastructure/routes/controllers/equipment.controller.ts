import type { Request, Response } from 'express';
import EquipmentHandler from '../handlers/equipment.handler';
import {
    HttpStatusCreated,
    HttpStatusOk,
    HttpStatusNoContent,
} from 'utils/http.protocols';

export default class EquipmentController {
    static async getEquipmentById(req: Request, res: Response) {
        const equipments = await EquipmentHandler.getEquipmentById(req);

        return new HttpStatusOk(res, equipments);
    }

    static async createEquipment(req: Request, res: Response) {
        await EquipmentHandler.createEquipment(req);

        return new HttpStatusCreated(res);
    }

    static async updateEquipment(req: Request, res: Response) {
        await EquipmentHandler.updateEquipment(req);

        return new HttpStatusNoContent(res);
    }

    static async deleteEquipment(req: Request, res: Response) {
        await EquipmentHandler.deleteEquipment(req);

        return new HttpStatusNoContent(res);
    }
}

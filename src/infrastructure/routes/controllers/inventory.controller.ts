import type { Request, Response } from 'express';
import InventoryHandler from '../handlers/inventory.handler';
import {
    HttpStatusCreated,
    HttpStatusOk,
    HttpStatusNoContent,
} from 'utils/http.protocols';

export default class InventoryController {
    static async getInventoryById(req: Request, res: Response) {
        const inventory = await InventoryHandler.getInventoryById(req);

        return new HttpStatusOk(res, inventory);
    }

    static async createInventory(req: Request, res: Response) {
        await InventoryHandler.createInventory(req);

        return new HttpStatusCreated(res);
    }

    static async updateInventory(req: Request, res: Response) {
        await InventoryHandler.updateInventory(req);

        return new HttpStatusNoContent(res);
    }

    static async deleteInventory(req: Request, res: Response) {
        await InventoryHandler.deleteInventory(req);

        return new HttpStatusNoContent(res);
    }
}

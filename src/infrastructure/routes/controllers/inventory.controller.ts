import type { Request, Response } from 'express';
import { InventoryHandler } from '../handlers/inventory.handler';
import {
    StatusCreated,
    StatusOK,
    StatusOkNoContent,
} from 'utils/http.protocols';

const handler = new InventoryHandler();

export const getInventoryById = async (req: Request, res: Response) => {
    const inventory = await handler.getInventoryById(req);

    return new StatusOK(res, inventory);
};

export const createInventory = async (req: Request, res: Response) => {
    await handler.createInventory(req);

    return new StatusCreated(res);
};

export const updateInventory = async (req: Request, res: Response) => {
    await handler.updateInventory(req);

    return new StatusOkNoContent(res);
};

export const deleteInventory = async (req: Request, res: Response) => {
    await handler.deleteInventory(req);

    return new StatusOkNoContent(res);
};

import { Router } from 'express';
import Controller from '../controllers/inventory.controller';

export const routes = Router();

routes.get('/inventories/:id', Controller.getInventoryById);

routes.post('/inventories', Controller.createInventory);

routes.patch('/inventories', Controller.updateInventory);

routes.delete('/inventories', Controller.deleteInventory);

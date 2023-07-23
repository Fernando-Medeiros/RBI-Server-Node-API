import { Router } from 'express';
import Controller from '../controllers/equipment.controller';

export const routes = Router();

routes.get('/equipments/:id', Controller.getEquipmentById);

routes.post('/equipments', Controller.createEquipment);

routes.patch('/equipments', Controller.updateEquipment);

routes.delete('/equipments', Controller.deleteEquipment);

import { Router } from 'express';
import Controller from '../controllers/status.controller';

export const routes = Router();

routes.get('/status/:id', Controller.getStatusById);

routes.post('/status', Controller.createStatus);

routes.patch('/status', Controller.updateStatus);

routes.delete('/status', Controller.deleteStatus);

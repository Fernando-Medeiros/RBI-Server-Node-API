import { Router } from 'express';
import Controller from '../controllers/skills.controller';

export const routes = Router();

routes.get('/skills/:id', Controller.getSkillsById);

routes.post('/skills', Controller.createSkills);

routes.patch('/skills', Controller.updateSkills);

routes.delete('/skills', Controller.deleteSkills);

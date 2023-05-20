import { Router } from 'express';
import {
    getSkillsById,
    createSkills,
    updateSkills,
    deleteSkills,
} from '../controllers/skills.controller';

export const routes = Router();

routes.get('/skills/:id', getSkillsById);

routes.post('/skills', createSkills);

routes.patch('/skills', updateSkills);

routes.delete('/skills', deleteSkills);

import { Router } from 'express';
import {
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} from '../controllers/character.controller';

export const routes = Router();

routes.get('/characters/:id', getCharacterById);

routes.post('/characters', createCharacter);

routes.patch('/characters', updateCharacter);

routes.delete('/characters', deleteCharacter);

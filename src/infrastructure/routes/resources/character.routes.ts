import { Router } from 'express';
import {
    getCharacterById,
    getAllCharacters,
    getCharacterByName,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} from '../controllers/character.controller';

export const routes = Router();

routes.get('/characters', getAllCharacters);

routes.get('/characters/:id', getCharacterById);

routes.get('/characters/name/:name', getCharacterByName);

routes.post('/characters', createCharacter);

routes.patch('/characters', updateCharacter);

routes.delete('/characters', deleteCharacter);

import { Router } from 'express';
import Controller from '../controllers/character.controller';

export const routes = Router();

routes.get('/characters/:id', Controller.getCharacterById);

routes.post('/characters', Controller.createCharacter);

routes.patch('/characters', Controller.updateCharacter);

routes.delete('/characters', Controller.deleteCharacter);

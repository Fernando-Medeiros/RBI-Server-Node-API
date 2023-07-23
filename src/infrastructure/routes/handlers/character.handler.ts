import type { Request } from 'express';
import { CharacterRepository } from '../repositories/character.repository.impl';
import { CharacterRequests } from '../requests/character.request.impl';
import { createCase } from 'app/use-cases/character-cases/create.case';
import { deleteCase } from 'app/use-cases/character-cases/delete.case';
import { updateCase } from 'app/use-cases/character-cases/update.case';
import { getByIdCase } from 'app/use-cases/character-cases/get-by-id.case';

export default class CharacterHandler {
    private static readonly Repository = new CharacterRepository();

    static async getCharacterById(req: Request) {
        return getByIdCase(
            new CharacterRequests({ ...req.params, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    static async createCharacter(req: Request) {
        return createCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    static async deleteCharacter(req: Request) {
        return deleteCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    static async updateCharacter(req: Request) {
        return updateCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }
}

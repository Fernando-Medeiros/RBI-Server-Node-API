import type { Request } from 'express';
import { CharacterRepository } from 'infra/repositories/character.repository.impl';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { createCase } from 'app/use-cases/character-cases/create.case';
import { deleteCase } from 'app/use-cases/character-cases/delete.case';
import { updateCase } from 'app/use-cases/character-cases/update.case';
import { getByIdCase } from 'app/use-cases/character-cases/get-by-id.case';

export class CharacterHandler {
    private static readonly Repository = new CharacterRepository();

    async getCharacterById(req: Request) {
        return await getByIdCase(
            new CharacterRequests({ ...req.params, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    async createCharacter(req: Request) {
        return await createCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    async deleteCharacter(req: Request) {
        return await deleteCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }

    async updateCharacter(req: Request) {
        return await updateCase(
            new CharacterRequests({ ...req.headers, ...req.body }),
            CharacterHandler.Repository,
        );
    }
}

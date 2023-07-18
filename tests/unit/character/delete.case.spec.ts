import { describe, it, expect } from 'vitest';
import { InMemoryCharacterRepository } from './mock/inMemoryCharacterRepository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { deleteCase } from 'app/use-cases/character-cases/delete.case';
import { NotFound } from 'utils/http.exceptions';

const repository = new InMemoryCharacterRepository();
const { id } = repository.helpers.pubId();

describe('Delete-> Character-OK', () => {
    repository.helpers.insertOneCharacterToDatabase();

    it('should delete the character', async () => {
        const res = await deleteCase(new CharacterRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Character-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new CharacterRequests({ id }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

import { describe, it, expect } from 'vitest';
import { InMemoryCharacterRepository } from './mock/inMemoryCharacterRepository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { getByIdCase } from 'app/use-cases/character-cases/get-by-id.case';
import { BadRequest, NotFound } from 'utils/http.exceptions';

const repository = new InMemoryCharacterRepository();
const { id } = repository.helpers.pubId();

describe('Get-By-Id-> Character-OK', () => {
    repository.helpers.insertOneCharacterToDatabase();

    it('Should get a character by id', async () => {
        const res = await getByIdCase(
            new CharacterRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Character-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(new CharacterRequests({ id: '000-000' }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new CharacterRequests(Object()), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new CharacterRequests({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                repository,
            ),
        ).rejects.toThrowError(NotFound);
    });
});

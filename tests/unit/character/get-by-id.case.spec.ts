import { describe, it, expect } from 'vitest';
import { InMemoryCharacterRepository } from './mock/in-memory.character.repository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { getByIdCase } from 'app/use-cases/character-cases/get-by-id.case';
import { BadRequest, NotFound } from 'utils/http.exceptions';
import * as uuid from 'uuid';

const repository = new InMemoryCharacterRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Get-By-Id-> Character-OK', () => {
    it('Should get a character by id', async () => {
        const res = await getByIdCase(
            new CharacterRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Character-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', () => {
        const usingArrayId = [{ id: '' }, { id: '000-000' }];

        usingArrayId.forEach(async testId => {
            await expect(() =>
                getByIdCase(new CharacterRequests({ ...testId }), repository),
            ).rejects.toThrowError(BadRequest);
        });
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new CharacterRequests({
                    id: uuid.v4(),
                }),
                repository,
            ),
        ).rejects.toThrowError(NotFound);
    });
});

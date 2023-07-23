import { describe, it, expect } from 'vitest';
import { InMemoryCharacterRepository } from './mock/in-memory.character.repository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { updateCase } from 'app/use-cases/character-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryCharacterRepository();

const { pubId: id } = repository.getDataMock();

const usingArrayFields = <T>(value: T) => [
    { charName: value },
    { className: value, level: value },
];

repository.save(repository.getDataMock());

describe('Update-> Character-OK', () => {
    it('Should update charName, className and level', async () => {
        const data = { charName: 'FakeName', className: 'Mage', level: 1 };

        const res = await updateCase(
            new CharacterRequests({ id, ...data }),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update charName', async () => {
        const res = await updateCase(
            new CharacterRequests({ id, charName: 'FakeNameX' }),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update className', async () => {
        const res = await updateCase(
            new CharacterRequests({ id, className: 'Warrior' }),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update level', async () => {
        const res = await updateCase(
            new CharacterRequests({ id, level: 2 }),
            repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Update-> Character-Exceptions', () => {
    it('Should return [BadRequest] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new CharacterRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when informing INVALID FIELD (string)', () => {
        usingArrayFields<string>('@@@@@@@@@').forEach(
            async field =>
                await expect(
                    updateCase(
                        new CharacterRequests(Object({ id, ...field })),
                        repository,
                    ),
                ).rejects.toThrowError(BadRequest),
        );
    });

    it('Should return [BadRequest] when informing INVALID FIELD (number)', () => {
        usingArrayFields<number>(500).forEach(
            async field =>
                await expect(
                    updateCase(
                        new CharacterRequests(Object({ id, ...field })),
                        repository,
                    ),
                ).rejects.toThrowError(BadRequest),
        );
    });
});

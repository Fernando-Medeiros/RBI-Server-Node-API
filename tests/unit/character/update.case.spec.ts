import { describe, it, expect } from 'vitest';
import { InMemoryCharacterRepository } from './mock/inMemoryCharacterRepository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { updateCase } from 'app/use-cases/character-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryCharacterRepository();

describe('Update-> Character-OK', () => {
    repository.helpers.insertOneCharacterToDatabase();

    const { id } = repository.helpers.pubId();

    it('Should update charName, className and level', async () => {
        const [charName, className, level] = ['fakeName', 'Mage', 2];

        const res = await updateCase(
            new CharacterRequests(Object({ id, charName, className, level })),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update charName', async () => {
        const [charName, className, level] = ['FakeName', undefined, undefined];

        const res = await updateCase(
            new CharacterRequests(Object({ id, charName, className, level })),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update className', async () => {
        const [charName, className, level] = [undefined, 'Warrior', undefined];

        const res = await updateCase(
            new CharacterRequests(Object({ id, charName, className, level })),
            repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update level', async () => {
        const [charName, className, level] = [undefined, undefined, 2];

        const res = await updateCase(
            new CharacterRequests(Object({ id, charName, className, level })),
            repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Update-> Character-Exceptions', () => {
    const { id } = repository.helpers.pubId();

    it('Should return [BadRequest] when passing an empty object', async () => {
        const [charName, className, level] = [undefined, undefined, undefined];

        await expect(() =>
            updateCase(
                new CharacterRequests(
                    Object({ id, charName, className, level }),
                ),
                repository,
            ),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when informing invalid charName', async () => {
        const [charName, className, level] = ['@@@@', undefined, undefined];

        await expect(() =>
            updateCase(
                new CharacterRequests(
                    Object({ id, charName, className, level }),
                ),
                repository,
            ),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when informing invalid className', async () => {
        const [charName, className, level] = [undefined, '@@@@', undefined];

        await expect(() =>
            updateCase(
                new CharacterRequests(
                    Object({ id, charName, className, level }),
                ),
                repository,
            ),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when informing invalid level', async () => {
        const [charName, className, level] = [undefined, undefined, -1];

        await expect(() =>
            updateCase(
                new CharacterRequests(
                    Object({ id, charName, className, level }),
                ),
                repository,
            ),
        ).rejects.toThrowError(BadRequest);
    });
});

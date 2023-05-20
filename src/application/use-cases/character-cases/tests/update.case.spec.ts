import { describe, it, expect } from 'vitest';
import { CharacterRequestsToUpdate } from '../requests/update.requests';
import { InMemoryCharacterRepository } from './mock/inMemoryCharacterRepository';
import { UseCaseCharacterHelpers } from './mock/utils';
import { updateCase } from '../update.case';

const Repository = new InMemoryCharacterRepository();
const Helpers = new UseCaseCharacterHelpers(Repository);

describe('Update-> Character-OK', () => {
    Helpers.insertOneCharacterToDatabase();

    const sub = Helpers.pubId();

    it('Should update charName, className and level', async () => {
        const [charName, className, level] = ['fakeName', 'Mage', 2];

        const res = await updateCase(
            new CharacterRequestsToUpdate(
                Object({ sub, charName, className, level }),
            ),
            Repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update charName', async () => {
        const [charName, className, level] = ['FakeName', undefined, undefined];

        const res = await updateCase(
            new CharacterRequestsToUpdate(
                Object({ sub, charName, className, level }),
            ),
            Repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update className', async () => {
        const [charName, className, level] = [undefined, 'Warrior', undefined];

        const res = await updateCase(
            new CharacterRequestsToUpdate(
                Object({ sub, charName, className, level }),
            ),
            Repository,
        );

        expect(res).toBeUndefined();
    });

    it('Should update level', async () => {
        const [charName, className, level] = [undefined, undefined, 2];

        const res = await updateCase(
            new CharacterRequestsToUpdate(
                Object({ sub, charName, className, level }),
            ),
            Repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Update-> Character-Exceptions', () => {
    const { pubId: sub } = Helpers.getCharacterDataMock();

    it('Should return [no data] when passing an empty object', async () => {
        const [charName, className, level] = [undefined, undefined, undefined];

        await expect(() =>
            updateCase(
                new CharacterRequestsToUpdate(
                    Object({ sub, charName, className, level }),
                ),
                Repository,
            ),
        ).rejects.toThrowError('No data');
    });

    it('Should return [invalid format] when informing invalid charName', async () => {
        const [charName, className, level] = ['@@@@', undefined, undefined];

        await expect(() =>
            updateCase(
                new CharacterRequestsToUpdate(
                    Object({ sub, charName, className, level }),
                ),
                Repository,
            ),
        ).rejects.toThrowError('format is invalid');
    });

    it('Should return [invalid format] when informing invalid className', async () => {
        const [charName, className, level] = [undefined, '@@@@', undefined];

        await expect(() =>
            updateCase(
                new CharacterRequestsToUpdate(
                    Object({ sub, charName, className, level }),
                ),
                Repository,
            ),
        ).rejects.toThrowError('format is invalid');
    });

    it('Should return [invalid format] when informing invalid level', async () => {
        const [charName, className, level] = [undefined, undefined, -1];

        await expect(() =>
            updateCase(
                new CharacterRequestsToUpdate(
                    Object({ sub, charName, className, level }),
                ),
                Repository,
            ),
        ).rejects.toThrowError('format is invalid');
    });
});

import { describe, it, expect } from 'vitest';
import { CharacterRequestsToGetByName } from '../requests/get-by-name.requests';
import { InMemoryCharacterRepository } from './mock/inMemoryCharacterRepository';
import { UseCaseCharacterHelpers } from './mock/utils';
import { getByNameCase } from '../get-by-name.case';

const Repository = new InMemoryCharacterRepository();
const Helpers = new UseCaseCharacterHelpers(Repository);

describe('Get-By-Name-> Character-OK', () => {
    Helpers.insertOneCharacterToDatabase();

    it('Should get a character by name', async () => {
        const { charName: name } = Helpers.getCharacterDataMock();

        const res = await getByNameCase(
            new CharacterRequestsToGetByName({ name }),
            Repository,
        );

        expect(res).toContain({ charName: name });
    });
});

describe('Get-By-Name-> Character-Exceptions', () => {
    Helpers.insertOneCharacterToDatabase();

    it('Should return [invalid format]', async () => {
        await expect(() =>
            getByNameCase(
                new CharacterRequestsToGetByName({ name: '@@@@@' }),
                Repository,
            ),
        ).rejects.toThrowError('format is invalid');
    });

    it('Should return [not found]', async () => {
        await expect(() =>
            getByNameCase(
                new CharacterRequestsToGetByName({ name: 'FakeName' }),
                Repository,
            ),
        ).rejects.toThrowError('not found');
    });
});

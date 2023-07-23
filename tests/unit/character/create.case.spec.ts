import { it, expect, describe } from 'vitest';
import { InMemoryCharacterRepository } from './mock/in-memory.character.repository';
import { CharacterRequests } from 'infra/routes/requests/character.request.impl';
import { createCase } from 'app/use-cases/character-cases/create.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryCharacterRepository();

const { pubId: id, ...data } = repository.getDataMock();

describe('UseCases - Character - Create - OK', () => {
    it('Should create the character', async () => {
        const res = await createCase(
            new CharacterRequests({ id, ...data }),
            repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('UseCases - Character - Create - Exceptions', () => {
    it('Should return [BadRequest] when entering an invalid charName', async () => {
        data.charName = 'Fake-Name-@@';

        await expect(() =>
            createCase(new CharacterRequests({ id, ...data }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when entering an invalid className', async () => {
        data.className = 'M@ge';

        await expect(() =>
            createCase(new CharacterRequests({ id, ...data }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when informing a name in use', async () => {
        const { pubId: id, ...data } = repository.getDataMock();

        await expect(() =>
            createCase(new CharacterRequests({ id, ...data }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when sending null data', async () => {
        const [charName, className] = [undefined, ''];

        await expect(() =>
            createCase(
                new CharacterRequests(Object({ charName, className, id })),
                repository,
            ),
        ).rejects.toThrowError(BadRequest);
    });
});

describe('UseCases - Character - Create - Loop-Exceptions', () => {
    const { pubId: id, ...data } = repository.getDataMock();

    const invalidNamesForTest = [
        ['fake22', 'fake()', 'fake**', 'fake&&', 'fake##', 'fake@@', 'fake%%'],
        ['12345', '00fake', 'fake<>', 'fake-fake', 'Fake=Fake', 'Fake[]'],
        ['fake//', 'fff', 'ff', 'f', ' ', '   ', '\n', '/n', '$!#@'],
        ['fake=', '(*&@]', 'FakeFake00', 'fakeFAKE  ', 'fake<<fake'],
        ['fake!!', '$$$$', 'fakeÇ', '-------', 'FakeFakeFakeFakeFakeFake'],
    ];

    it('Should return [BadRequest] when entering loop with invalid charName', async () => {
        for (const listNames of invalidNamesForTest) {
            for (const charName of listNames) {
                await expect(() =>
                    createCase(
                        new CharacterRequests({
                            id,
                            ...data,
                            charName,
                        }),
                        repository,
                    ),
                ).rejects.toThrowError(BadRequest);
            }
        }
    });

    it('Should return [BadRequest] when entering loop with invalid className', async () => {
        for (const listNames of invalidNamesForTest) {
            for (const charName of listNames) {
                await expect(() =>
                    createCase(
                        new CharacterRequests({
                            id,
                            ...data,
                            charName,
                        }),
                        repository,
                    ),
                ).rejects.toThrowError(BadRequest);
            }
        }
    });
});

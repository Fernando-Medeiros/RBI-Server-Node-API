import { describe, test, expect, beforeAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { CharacterMock } from 'tests/integration/characters/mock/character.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new CharacterMock('XTesterXY');
const headers = { ...secretHeader, Authorization: '' };

describe('E2E - Delete all character data - Success', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        Promise.all([
            await Helpers.insertBeforeAll(
                '/characters',
                mock.dataToCreate,
                headers,
            ),
            await Helpers.insertBeforeAll('/status', {}, headers),
            await Helpers.insertBeforeAll('/equipments', {}, headers),
            await Helpers.insertBeforeAll('/inventories', {}, headers),
            await Helpers.insertBeforeAll('/skills', {}, headers),
        ]);
    });

    test('Should delete full character data', async () => {
        const [character, status, equipment, inventory, skills] =
            await Promise.all([
                app.delete('/characters').set(headers),
                app.delete('/status').set(headers),
                app.delete('/equipments').set(headers),
                app.delete('/inventories').set(headers),
                app.delete('/skills').set(headers),
            ]);

        expect(character.statusCode).toEqual(204);
        expect(status.statusCode).toEqual(204);
        expect(equipment.statusCode).toEqual(204);
        expect(inventory.statusCode).toEqual(204);
        expect(skills.statusCode).toEqual(204);
    });
});

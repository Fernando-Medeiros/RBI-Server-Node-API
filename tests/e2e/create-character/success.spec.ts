import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { CharacterMock } from 'tests/integration/characters/mock/character.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new CharacterMock('XTesterXXY');
const headers = { ...secretHeader, Authorization: '' };

describe('E2E - Request all character data - Success', () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
    });
    afterAll(async () => {
        Promise.all([
            await Helpers.removeAfterAll('/characters', headers),
            await Helpers.removeAfterAll('/status', headers),
            await Helpers.removeAfterAll('/equipments', headers),
            await Helpers.removeAfterAll('/inventories', headers),
            await Helpers.removeAfterAll('/skills', headers),
        ]);
    });

    test('Should create a new character', async () => {
        const [character, status, equipment, inventory, skills] =
            await Promise.all([
                app.post('/characters').send(mock.dataToCreate).set(headers),
                app.post('/status').set(headers),
                app.post('/equipments').set(headers),
                app.post('/inventories').set(headers),
                app.post('/skills').set(headers),
            ]);

        expect(character.statusCode).toEqual(201);
        expect(status.statusCode).toEqual(201);
        expect(equipment.statusCode).toEqual(201);
        expect(inventory.statusCode).toEqual(201);
        expect(skills.statusCode).toEqual(201);
    });

    test('Should receive full character data', async () => {
        const [character, status, equipment, inventory, skills] =
            await Promise.all([
                app.get(`/characters/${mock.pubId}`).set(headers),
                app.get(`/status/${mock.pubId}`).set(headers),
                app.get(`/equipments/${mock.pubId}`).set(headers),
                app.get(`/inventories/${mock.pubId}`).set(headers),
                app.get(`/skills/${mock.pubId}`).set(headers),
            ]);

        const { pubId } = character.body;

        expect(character.body).toHaveProperty('charName');
        expect(status.body).toHaveProperty('points');
        expect(equipment.body).toHaveProperty('head');
        expect(inventory.body).toHaveProperty('armors');
        expect(skills.body).toHaveProperty('defensive');

        expect(status.body['pubId']).toEqual(pubId);
        expect(equipment.body['pubId']).toEqual(pubId);
        expect(inventory.body['pubId']).toEqual(pubId);
        expect(skills.body['pubId']).toEqual(pubId);
    });
});

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { CharacterMock } from '../mock/character.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';
import { v4 } from 'uuid';

const mock = new CharacterMock('FakeByIdEx');
const headers = { ...secretHeader, ...{ Authorization: '' } };

describe('Character - Get By Id - Exceptions', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll(
            '/characters',
            mock.dataToCreate,
            headers,
        );
    });

    afterAll(async () => {
        await Helpers.removeAfterAll('/characters', headers);
    });

    it('Should return 400 when sending an invalid id', async () => {
        const res = await app
            .get(`/characters/${'00000000000000'}`)
            .set(headers);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .get(`/characters/${mock.pubId}`)
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 404 when sending a valid but nonexistent id', async () => {
        const res = await app.get(`/characters/${v4()}`).set(headers);

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message');
    });
});

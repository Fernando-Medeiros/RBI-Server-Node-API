import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { InventoryMock } from '../mock/inventory.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';
import { v4 } from 'uuid';

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Inventory - Get By Id - Exceptions', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll(
            '/inventories',
            mock.dataToCreate,
            headers,
        );
    });
    afterAll(async () => {
        await Helpers.removeAfterAll('/inventories', headers);
    });

    it('Should return 400 when sending an invalid id', async () => {
        const res = await app
            .get(`/inventories/${'00000000000000'}`)
            .set(headers);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .get(`/inventories/${mock.pubId}`)
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 404 when sending a valid but nonexistent id', async () => {
        const res = await app.get(`/inventories/${v4()}`).set(headers);

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message');
    });
});

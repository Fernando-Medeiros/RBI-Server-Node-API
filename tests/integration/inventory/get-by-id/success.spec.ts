import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { InventoryMock } from '../mock/inventory.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Inventory - Get By Id - Success', async () => {
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

    it('Should return inventory', async () => {
        const res = await app.get(`/inventories/${mock.pubId}`).set(headers);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('pubId');
    });
});

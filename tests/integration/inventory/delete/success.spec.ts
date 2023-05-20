import { describe, it, expect, beforeAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { InventoryMock } from '../mock/inventory.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Inventory - Delete - Success', async () => {
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

    it('Should return 204 when deleting the inventory', async () => {
        const res = await app.delete('/inventories').set(headers);

        expect(res.statusCode).toEqual(204);
    });
});

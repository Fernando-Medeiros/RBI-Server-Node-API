import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { InventoryMock } from '../mock/inventory.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: '' };

function usingArrayItems<T>(value: T[]) {
    return [
        { armors: value },
        { accessories: value },
        { consumables: value },
        { materials: value },
        { weapons: value },
    ];
}

describe('Inventory - Update - Exceptions', async () => {
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

    it('Should return 400 when trying to update NULL', async () => {
        const res = await app.patch('/inventories').send().set(headers);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 400 when trying to update INVALID ITEM', () => {
        usingArrayItems<object>([{ invalidField: '', value: -11 }]).forEach(
            async element => {
                const res = await app
                    .patch('/inventories')
                    .send(element)
                    .set(headers);

                expect(res.statusCode).toEqual(400);
                expect(res.body).toHaveProperty('message');
            },
        );
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .patch('/inventories')
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });
});

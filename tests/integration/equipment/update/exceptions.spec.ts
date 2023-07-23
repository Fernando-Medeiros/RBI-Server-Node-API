import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { EquipmentMock } from '../mock/equipment.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: '' };

function usingArrayEquipments<T>(value: T) {
    return [
        { head: value },
        { body: value },
        { leg: value },
        { handLeft: value },
        { handRight: value },
        { accessoryLeft: value },
        { accessoryRight: value },
    ];
}

describe('Equipment - Update - Exceptions', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll(
            '/equipments',
            mock.dataToCreate,
            headers,
        );
    });
    afterAll(async () => {
        await Helpers.removeAfterAll('/equipments', headers);
    });

    it('Should return 400 when trying to update NULL', () => {
        usingArrayEquipments<null>(null).forEach(async equipment => {
            const res = await app
                .patch('/equipments')
                .send(equipment)
                .set(headers);

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        });
    });

    it('Should return 400 when trying to update INVALID ITEM', () => {
        usingArrayEquipments<object>({ invalidField: '' }).forEach(
            async equipment => {
                const res = await app
                    .patch('/equipments')
                    .send(equipment)
                    .set(headers);

                expect(res.statusCode).toEqual(400);
                expect(res.body).toHaveProperty('message');
            },
        );
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .patch('/equipments')
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });
});

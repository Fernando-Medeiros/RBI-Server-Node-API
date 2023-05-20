import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { EquipmentMock } from '../mock/equipment.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Equipment - Get By Id - Success', async () => {
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

    it('Should return equipments', async () => {
        const res = await app.get(`/equipments/${mock.pubId}`).set(headers);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('pubId');
    });
});

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { StatusMock } from '../mock/status.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: '' };

function usingArrayFields<T>(value: T) {
    return [
        { points: value },
        { experience: value },
        { strength: value },
        { intelligence: value },
        { dexterity: value },
        { vitality: value },
        { health: value },
        { energy: value },
        { currentHealth: value },
        { currentEnergy: value },
    ];
}

describe('Status - Update - Success', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll('/status', mock.dataToCreate, headers);
    });
    afterAll(async () => {
        await Helpers.removeAfterAll('/status', headers);
    });

    it('Should update the all status', async () => {
        const res = await app
            .patch('/status')
            .send(mock.dataToCreate)
            .set(headers);

        expect(res.statusCode).toEqual(204);
    });

    it('Should update fields', () => {
        usingArrayFields<number>(5).forEach(async element => {
            const res = await app.patch('/status').send(element).set(headers);

            expect(res.statusCode).toEqual(204);
        });
    });
});

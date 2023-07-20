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

describe('Status - Update - Exceptions', async () => {
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

    it('Should return 400 when trying to update negative numbers', () => {
        usingArrayFields<number>(-3).forEach(async element => {
            const res = await app.patch('/status').send(element).set(headers);

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        });
    });

    it('Should return 400 when trying to update 0', () => {
        usingArrayFields<number>(0).forEach(async element => {
            const res = await app.patch('/status').send(element).set(headers);

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        });
    });

    it('Should return 400 when trying to update invalid type', () => {
        usingArrayFields<string>('invalidType').forEach(async element => {
            const res = await app.patch('/status').send(element).set(headers);

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        });
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .patch('/status')
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });
});

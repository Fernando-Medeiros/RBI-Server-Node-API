import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { StatusMock } from '../mock/status.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: '' };

describe('status - Get By Id - Success', async () => {
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

    it('Should return a status', async () => {
        const res = await app.get(`/status/${mock.pubId}`).set(headers);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('pubId');
    });
});

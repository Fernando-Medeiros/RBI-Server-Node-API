import { describe, it, expect, beforeAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { StatusMock } from '../mock/status.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Status - Delete - Exceptions', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
    });

    it('Should return 401 when sending invalid or null token', async () => {
        const res = await app
            .delete('/status')
            .set({ ...secretHeader, Authorization: 'Bearer 000000' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message');
    });

    it('Should return 404 when trying to delete non-existent status', async () => {
        const res = await app.delete('/status').set(headers);

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message');
    });
});

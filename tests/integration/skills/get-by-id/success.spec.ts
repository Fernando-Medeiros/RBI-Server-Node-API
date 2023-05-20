import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app, secretHeader } from 'tests/config/config';
import { SkillsMock } from '../mock/skills.mock';
import { HelperHeaders } from 'tests/config/helpers/get-auth-header';
import { Helpers } from 'tests/config/helpers/insert-remove';

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: '' };

describe('Equipment - Get By Id - Success', async () => {
    beforeAll(async () => {
        Object.assign(
            headers,
            await HelperHeaders.mockAuthorizationHeader(mock.pubId),
        );
        await Helpers.insertBeforeAll('/skills', mock.dataToCreate, headers);
    });
    afterAll(async () => {
        await Helpers.removeAfterAll('/skills', headers);
    });

    it('Should return skills', async () => {
        const res = await app.get(`/skills/${mock.pubId}`).set(headers);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('pubId');
    });
});

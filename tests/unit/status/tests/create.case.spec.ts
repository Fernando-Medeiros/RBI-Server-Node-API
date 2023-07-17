import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/inMemoryStatusRepository';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { createCase } from 'app/use-cases/status-cases/create.case';

const repository = new InMemoryStatusRepository();
const { id } = repository.helpers.pubId();

describe('Create-> Status-OK', () => {
    it('Should create the status', async () => {
        const res = await createCase(new StatusRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Status-Exceptions', () => {
    it('Should return error when trying to duplicate a status in use', async () => {
        await expect(() =>
            createCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError('one status allowed per character');
    });
});

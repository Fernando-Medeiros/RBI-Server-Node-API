import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/inMemoryStatusRepository';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { StatusRequests } from 'infra/routes/requests/status.request';

const repository = new InMemoryStatusRepository();
const { id } = repository.helpers.pubId();

describe('Delete-> Status-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should delete the status', async () => {
        const res = await deleteCase(new StatusRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Status-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError('not found');
    });
});

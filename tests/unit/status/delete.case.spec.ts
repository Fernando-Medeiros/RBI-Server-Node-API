import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/in-memory.status.repository';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { deleteCase } from 'app/use-cases/status-cases/delete.case';
import { NotFound } from 'utils/http.exceptions';

const repository = new InMemoryStatusRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Delete-> Status-OK', () => {
    it('Should delete the status', async () => {
        expect(
            await deleteCase(new StatusRequests({ id }), repository),
        ).toBeUndefined();
    });
});

describe('Delete-> Status-Exceptions', () => {
    it('Should return [NotFound] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

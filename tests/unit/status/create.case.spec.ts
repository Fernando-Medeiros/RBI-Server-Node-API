import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/in-memory.status.repository';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { createCase } from 'app/use-cases/status-cases/create.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryStatusRepository();

const { pubId: id } = repository.getDataMock();

describe('Create-> Status-OK', () => {
    it('Should create the status', async () => {
        expect(
            await createCase(new StatusRequests({ id }), repository),
        ).toBeUndefined();
    });
});

describe('Create-> Status-Exceptions', () => {
    it('Should return [BadRequest] when trying to duplicate a status in use', async () => {
        await expect(() =>
            createCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });
});

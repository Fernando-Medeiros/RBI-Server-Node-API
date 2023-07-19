import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/in-memory.status.repository';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { BadRequest, NotFound } from 'utils/http.exceptions';
import * as uuid from 'uuid';

const repository = new InMemoryStatusRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Get-By-Id-> Status-OK', () => {
    it('Should get a status by id', async () => {
        expect(
            await getByIdCase(new StatusRequests({ id }), repository),
        ).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Status-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', async () => {
        const usingArrayIds = [{ id: '' }, { id: '000-000' }];

        usingArrayIds.forEach(async testId => {
            await expect(() =>
                getByIdCase(new StatusRequests({ ...testId }), repository),
            ).rejects.toThrowError(BadRequest);
        });
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(new StatusRequests({ id: uuid.v4() }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

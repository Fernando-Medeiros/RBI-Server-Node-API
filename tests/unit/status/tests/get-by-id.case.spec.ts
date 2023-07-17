import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/inMemoryStatusRepository';
import { getByIdCase } from 'app/use-cases/status-cases/get-by-id.case';
import { StatusRequests } from 'infra/routes/requests/status.request';

const repository = new InMemoryStatusRepository();
const { id } = repository.helpers.pubId();

describe('Get-By-Id-> Status-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should get a status by id', async () => {
        const res = await getByIdCase(new StatusRequests({ id }), repository);

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Status-Exceptions', () => {
    it('Should return error when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(new StatusRequests({ id: '000-000' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return error when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new StatusRequests({ id: '' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return [not found] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new StatusRequests({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                repository,
            ),
        ).rejects.toThrowError('not found');
    });
});

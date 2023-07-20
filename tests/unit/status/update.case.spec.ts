import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/in-memory.status.repository';
import { StatusRequests } from 'infra/routes/requests/status.request.impl';
import { updateCase } from 'app/use-cases/status-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryStatusRepository();

const { pubId: id, ...data } = repository.getDataMock();

repository.save(repository.getDataMock());

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

describe('Update-> Status-OK', () => {
    it('Should update all status', async () => {
        expect(
            await updateCase(new StatusRequests({ id, ...data }), repository),
        ).toBeUndefined();
    });

    it('Should update all fields', () => {
        usingArrayFields<number>(10).forEach(async field => {
            expect(
                await updateCase(
                    new StatusRequests({ id, ...field }),
                    repository,
                ),
            ).toBeUndefined();
        });
    });
});

describe('Update-> Status-Exceptions', () => {
    it('Should return [BadRequest] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when passing wrong types to update', () => {
        usingArrayFields<string>('stringValue').forEach(async field => {
            await expect(() =>
                updateCase(
                    new StatusRequests({ id, ...Object(field) }),
                    repository,
                ),
            ).rejects.toThrowError(BadRequest);
        });
    });

    it('Should return [BadRequest] when passing negative numbers', () => {
        usingArrayFields<number>(-1).forEach(async field => {
            await expect(() =>
                updateCase(new StatusRequests({ id, ...field }), repository),
            ).rejects.toThrowError(BadRequest);
        });
    });
});

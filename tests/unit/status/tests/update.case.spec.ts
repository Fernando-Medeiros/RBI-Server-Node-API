import { describe, it, expect } from 'vitest';
import { InMemoryStatusRepository } from './mock/inMemoryStatusRepository';
import { updateCase } from 'app/use-cases/status-cases/update.case';
import { StatusRequests } from 'infra/routes/requests/status.request';

const repository = new InMemoryStatusRepository();
const { id } = repository.helpers.pubId();

describe('Update-> Status-OK', () => {
    repository.helpers.insertOneToDatabase();

    const data = repository.helpers.getDataMock();

    it('Should update all status', async () => {
        const res = await updateCase(
            new StatusRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update points to assign', async () => {
        const res = await updateCase(
            new StatusRequests({ id, points: 10 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update experience', async () => {
        const res = await updateCase(
            new StatusRequests({ id, experience: 500 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update strength', async () => {
        const res = await updateCase(
            new StatusRequests({ id, strength: 2 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update intelligence', async () => {
        const res = await updateCase(
            new StatusRequests({ id, intelligence: 10 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update dexterity', async () => {
        const res = await updateCase(
            new StatusRequests({ id, dexterity: 80 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update vitality', async () => {
        const res = await updateCase(
            new StatusRequests({ id, vitality: 99 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update health', async () => {
        const res = await updateCase(
            new StatusRequests({ id, health: 1 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update energy', async () => {
        const res = await updateCase(
            new StatusRequests({ id, energy: 400 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update currentHealth', async () => {
        const res = await updateCase(
            new StatusRequests({ id, currentHealth: 111 }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update currentEnergy', async () => {
        const res = await updateCase(
            new StatusRequests({ id, currentEnergy: 222 }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Status-Exceptions', () => {
    it('Should return [no data] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id }), repository),
        ).rejects.toThrowError('No data');
    });

    it('Should return an error when sending invalid points', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, points: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid experience', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, experience: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid strength', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, strength: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid intelligence', async () => {
        await expect(() =>
            updateCase(
                new StatusRequests({ id, intelligence: -1 }),
                repository,
            ),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid dexterity', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, dexterity: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid vitality', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, vitality: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid health', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, health: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid energy', async () => {
        await expect(() =>
            updateCase(new StatusRequests({ id, energy: -1 }), repository),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid currentHealth', async () => {
        await expect(() =>
            updateCase(
                new StatusRequests({ id, currentHealth: -1 }),
                repository,
            ),
        ).rejects.toThrowError('format must be a number');
    });

    it('Should return an error when sending invalid currentEnergy', async () => {
        await expect(() =>
            updateCase(
                new StatusRequests({ id, currentEnergy: -1 }),
                repository,
            ),
        ).rejects.toThrowError('format must be a number');
    });
});

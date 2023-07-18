import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { getByIdCase } from 'app/use-cases/equipment-cases/get-by-id.case';

const repository = new InMemoryEquipmentRepository();
const { id } = repository.helpers.pubId();

describe('Get-By-Id-> Equipment-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should get a Equipment by id', async () => {
        const res = await getByIdCase(
            new EquipmentRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Equipment-Exceptions', () => {
    it('Should return error when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(new EquipmentRequests({ id: '000-000' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return error when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new EquipmentRequests({ id: '' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return [not found] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new EquipmentRequests({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                repository,
            ),
        ).rejects.toThrowError('not found');
    });
});

import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { deleteCase } from 'app/use-cases/equipment-cases/delete.case';

const repository = new InMemoryEquipmentRepository();
const { id } = repository.helpers.pubId();

describe('Delete-> Equipment-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should delete the Equipment', async () => {
        const res = await deleteCase(new EquipmentRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Equipment-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError('not found');
    });
});

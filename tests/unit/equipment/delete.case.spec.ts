import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/in-memory.equipment.repository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { deleteCase } from 'app/use-cases/equipment-cases/delete.case';
import { NotFound } from 'utils/http.exceptions';

const repository = new InMemoryEquipmentRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Delete-> Equipment-OK', () => {
    it('Should delete the Equipment', async () => {
        const res = await deleteCase(new EquipmentRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Equipment-Exceptions', () => {
    it('Should return [NotFound] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

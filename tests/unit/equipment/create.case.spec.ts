import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/in-memory.equipment.repository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { createCase } from 'app/use-cases/equipment-cases/create.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryEquipmentRepository();

const { pubId: id } = repository.getDataMock();

describe('Create-> Equipment-OK', () => {
    it('Should create the equipment', async () => {
        const res = await createCase(new EquipmentRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Equipment-Exceptions', () => {
    it('Should return [BadRequest] when trying to duplicate a equipment in use', async () => {
        await expect(() =>
            createCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });
});

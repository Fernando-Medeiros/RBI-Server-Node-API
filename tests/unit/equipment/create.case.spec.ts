import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { createCase } from 'app/use-cases/equipment-cases/create.case';

const repository = new InMemoryEquipmentRepository();
const { id } = repository.helpers.pubId();

describe('Create-> Equipment-OK', () => {
    it('Should create the equipment', async () => {
        const res = await createCase(new EquipmentRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Equipment-Exceptions', () => {
    it('Should return error when trying to duplicate a equipment in use', async () => {
        await expect(() =>
            createCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError('one equipment allowed per character');
    });
});

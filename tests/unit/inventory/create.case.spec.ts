import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { createCase } from 'app/use-cases/inventory-cases/create.case';

const repository = new InMemoryInventoryRepository();
const { id } = repository.helpers.pubId();

describe('Create-> Inventory-OK', () => {
    it('Should create the Inventory', async () => {
        const res = await createCase(new InventoryRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Inventory-Exceptions', () => {
    it('Should return error when trying to duplicate a Inventory in use', async () => {
        await expect(() =>
            createCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError('one Inventory allowed per character');
    });
});

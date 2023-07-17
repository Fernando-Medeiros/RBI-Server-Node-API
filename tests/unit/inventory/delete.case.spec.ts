import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { deleteCase } from 'app/use-cases/inventory-cases/delete.case';

const repository = new InMemoryInventoryRepository();
const { id } = repository.helpers.pubId();

describe('Delete-> Inventory-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should delete the Inventory', async () => {
        const res = await deleteCase(new InventoryRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Inventory-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError('not found');
    });
});

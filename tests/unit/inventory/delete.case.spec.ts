import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/in-memory.inventory.repository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { deleteCase } from 'app/use-cases/inventory-cases/delete.case';
import { NotFound } from 'utils/http.exceptions';

const repository = new InMemoryInventoryRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Delete-> Inventory-OK', () => {
    it('Should delete the Inventory', async () => {
        const res = await deleteCase(new InventoryRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Inventory-Exceptions', () => {
    it('Should return [NotFound] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

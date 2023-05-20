import { describe, it, expect } from 'vitest';
import { InventoryRequestsToDelete } from '../requests/delete.requests';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { UseCaseInventoryHelpers } from './mock/utils';
import { deleteCase } from '../delete.case';

const Repository = new InMemoryInventoryRepository();
const Helpers = new UseCaseInventoryHelpers(Repository);

describe('Delete-> Inventory-OK', () => {
    Helpers.insertOneToDatabase();

    it('Should delete the Inventory', async () => {
        const res = await deleteCase(
            new InventoryRequestsToDelete({ sub: Helpers.pubId() }),
            Repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Inventory-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new InventoryRequestsToDelete({ sub: '' }), Repository),
        ).rejects.toThrowError('not found');
    });
});

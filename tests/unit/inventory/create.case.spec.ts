import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/in-memory.inventory.repository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { createCase } from 'app/use-cases/inventory-cases/create.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryInventoryRepository();

const { pubId: id } = repository.getDataMock();

describe('Create-> Inventory-OK', () => {
    it('Should create the Inventory', async () => {
        const res = await createCase(new InventoryRequests({ id }), repository);

        expect(res).toBeUndefined();
    });
});

describe('Create-> Inventory-Exceptions', () => {
    it('Should return [BadRequest] when trying to duplicate a Inventory in use', async () => {
        await expect(() =>
            createCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });
});

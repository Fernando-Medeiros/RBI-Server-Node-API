import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { getByIdCase } from 'app/use-cases/inventory-cases/get-by-id.case';

const repository = new InMemoryInventoryRepository();
const { id } = repository.helpers.pubId();

describe('Get-By-Id-> Inventory-OK', () => {
    repository.helpers.insertOneToDatabase();

    it('Should get a Inventory by id', async () => {
        const res = await getByIdCase(
            new InventoryRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Inventory-Exceptions', () => {
    it('Should return error when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(new InventoryRequests({ id: '000-000' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return error when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new InventoryRequests({ id: '' }), repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return [not found] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new InventoryRequests({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                repository,
            ),
        ).rejects.toThrowError('not found');
    });
});

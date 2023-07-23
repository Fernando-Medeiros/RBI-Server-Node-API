import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/in-memory.inventory.repository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { getByIdCase } from 'app/use-cases/inventory-cases/get-by-id.case';
import { BadRequest, NotFound } from 'utils/http.exceptions';
import * as uuid from 'uuid';

const repository = new InMemoryInventoryRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Get-By-Id-> Inventory-OK', () => {
    it('Should get a Inventory by id', async () => {
        const res = await getByIdCase(
            new InventoryRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Inventory-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', () => {
        const usingArrayIds = [{ id: '' }, { id: '000-000' }];

        usingArrayIds.forEach(async testId => {
            await expect(() =>
                getByIdCase(new InventoryRequests({ ...testId }), repository),
            ).rejects.toThrowError(BadRequest);
        });
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(new InventoryRequests({ id: uuid.v4() }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

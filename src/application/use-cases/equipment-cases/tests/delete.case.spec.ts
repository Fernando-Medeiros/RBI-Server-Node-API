import { describe, it, expect } from 'vitest';
import { EquipmentRequestsToDelete } from '../requests/delete.requests';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { UseCaseEquipmentsHelpers } from './mock/utils';
import { deleteCase } from '../delete.case';

const Repository = new InMemoryEquipmentRepository();
const Helpers = new UseCaseEquipmentsHelpers(Repository);

describe('Delete-> Equipment-OK', () => {
    Helpers.insertOneToDatabase();

    it('Should delete the Equipment', async () => {
        const res = await deleteCase(
            new EquipmentRequestsToDelete({ sub: Helpers.pubId() }),
            Repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Delete-> Equipment-Exceptions', () => {
    it('Should return [not found] when informing an id that does not exist in the database', async () => {
        await expect(() =>
            deleteCase(new EquipmentRequestsToDelete({ sub: '' }), Repository),
        ).rejects.toThrowError('not found');
    });
});

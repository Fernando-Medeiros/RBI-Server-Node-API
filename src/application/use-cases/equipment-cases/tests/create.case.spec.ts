import { describe, it, expect } from 'vitest';
import { EquipmentRequestsToCreate } from '../requests/create.requests';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { UseCaseEquipmentsHelpers } from './mock/utils';
import { createCase } from '../create.case';

const Repository = new InMemoryEquipmentRepository();
const Helpers = new UseCaseEquipmentsHelpers(Repository);

describe('Create-> Equipment-OK', () => {
    it('Should create the equipment', async () => {
        const res = await createCase(
            new EquipmentRequestsToCreate({ sub: Helpers.pubId() }),
            Repository,
        );

        expect(res).toBeUndefined();
    });
});

describe('Create-> Equipment-Exceptions', () => {
    it('Should return error when trying to duplicate a equipment in use', async () => {
        await expect(() =>
            createCase(
                new EquipmentRequestsToCreate({ sub: Helpers.pubId() }),
                Repository,
            ),
        ).rejects.toThrowError('one equipment allowed per character');
    });
});

import { describe, it, expect } from 'vitest';
import { EquipmentRequestsToGetById } from '../requests/get-by-id.requests';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { UseCaseEquipmentsHelpers } from './mock/utils';
import { getByIdCase } from '../get-by-id.case';

const Repository = new InMemoryEquipmentRepository();
const Helpers = new UseCaseEquipmentsHelpers(Repository);

describe('Get-By-Id-> Equipment-OK', () => {
    Helpers.insertOneToDatabase();

    it('Should get a Equipment by id', async () => {
        const res = await getByIdCase(
            new EquipmentRequestsToGetById({ id: Helpers.pubId() }),
            Repository,
        );

        expect(res).toContain({ pubId: Helpers.pubId() });
    });
});

describe('Get-By-Id-> Equipment-Exceptions', () => {
    it('Should return error when passing an invalid id', async () => {
        await expect(() =>
            getByIdCase(
                new EquipmentRequestsToGetById({ id: '000-000' }),
                Repository,
            ),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return error when passing an null id', async () => {
        await expect(() =>
            getByIdCase(new EquipmentRequestsToGetById({ id: '' }), Repository),
        ).rejects.toThrowError('Could not verify credentials');
    });

    it('Should return [not found] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(
                new EquipmentRequestsToGetById({
                    id: 'b2cd80d6-825d-4b67-a7a5-3cface4f19b9',
                }),
                Repository,
            ),
        ).rejects.toThrowError('not found');
    });
});

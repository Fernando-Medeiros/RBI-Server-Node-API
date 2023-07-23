import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/in-memory.equipment.repository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { getByIdCase } from 'app/use-cases/equipment-cases/get-by-id.case';
import { BadRequest, NotFound } from 'utils/http.exceptions';
import * as uuid from 'uuid';

const repository = new InMemoryEquipmentRepository();

const { pubId: id } = repository.getDataMock();

repository.save(repository.getDataMock());

describe('Get-By-Id-> Equipment-OK', () => {
    it('Should get a Equipment by id', async () => {
        const res = await getByIdCase(
            new EquipmentRequests({ id }),
            repository,
        );

        expect(res).toContain({ pubId: id });
    });
});

describe('Get-By-Id-> Equipment-Exceptions', () => {
    it('Should return [BadRequest] when passing an invalid id', async () => {
        const usingArrayIds = [{ id: '' }, { id: '000-000' }];

        usingArrayIds.forEach(async testId => {
            await expect(() =>
                getByIdCase(new EquipmentRequests({ ...testId }), repository),
            ).rejects.toThrowError(BadRequest);
        });
    });

    it('Should return [NotFound] when entering a valid but non-existent id', async () => {
        await expect(() =>
            getByIdCase(new EquipmentRequests({ id: uuid.v4() }), repository),
        ).rejects.toThrowError(NotFound);
    });
});

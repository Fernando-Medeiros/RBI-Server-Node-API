import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/inMemoryEquipmentRepository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { updateCase } from 'app/use-cases/equipment-cases/update.case';

const repository = new InMemoryEquipmentRepository();
const { id } = repository.helpers.pubId();

describe('Update-> Equipment-OK', () => {
    repository.helpers.insertOneToDatabase();

    const equipments = repository.helpers.getDataMock();

    it('Should update all Equipment', async () => {
        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update head', async () => {
        equipments.head = repository.helpers.getFakeArmor();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update body', async () => {
        equipments.body = repository.helpers.getFakeArmor();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update leg', async () => {
        equipments.leg = repository.helpers.getFakeArmor();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update handLeft', async () => {
        equipments.handLeft = repository.helpers.getFakeWeapon();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update handRight', async () => {
        equipments.handRight = repository.helpers.getFakeWeapon();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessoryLeft', async () => {
        equipments.accessoryLeft = repository.helpers.getFakeAccessory();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessoryRight', async () => {
        equipments.accessoryRight = repository.helpers.getFakeAccessory();

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Equipment-Exceptions', () => {
    it('Should return [no data] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError('No data');
    });

    it('Should return an error when sending invalid names', async () => {
        const arrayFields = [
            { head: { name: 111 } },
            { body: { name: 111 } },
            { leg: { name: 111 } },
            { handLeft: { name: 111 } },
            { handRight: { name: 111 } },
            { accessoryLeft: { name: 111 } },
            { accessoryRight: { name: 111 } },
        ];

        arrayFields.forEach(element => {
            expect(
                async () =>
                    await updateCase(
                        new EquipmentRequests({ id, ...element }),
                        repository,
                    ),
            ).rejects.toThrowError('Missing fields');
        });
    });
});

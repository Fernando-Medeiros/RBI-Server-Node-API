import { describe, it, expect } from 'vitest';
import { InMemoryEquipmentRepository } from './mock/in-memory.equipment.repository';
import { EquipmentRequests } from 'infra/routes/requests/equipment.request.impl';
import { updateCase } from 'app/use-cases/equipment-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryEquipmentRepository();

const { pubId: id, ...equipments } = repository.getDataMock();

const [armor, accessory, weapon] = [
    repository.getFakeArmor(),
    repository.getFakeAccessory(),
    repository.getFakeWeapon(),
];

function usingArrayEquipments<T>(value: T) {
    return [
        { head: value },
        { body: value },
        { leg: value },
        { handLeft: value },
        { handRight: value },
        { accessoryLeft: value },
        { accessoryRight: value },
    ];
}

repository.save(repository.getDataMock());

describe('Update-> Equipment-OK', () => {
    it('Should update all Equipment', async () => {
        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update head', async () => {
        equipments.head = armor;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update body', async () => {
        equipments.body = armor;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update leg', async () => {
        equipments.leg = armor;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update handLeft', async () => {
        equipments.handLeft = weapon;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update handRight', async () => {
        equipments.handRight = weapon;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessoryLeft', async () => {
        equipments.accessoryLeft = accessory;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessoryRight', async () => {
        equipments.accessoryRight = accessory;

        const res = await updateCase(
            new EquipmentRequests({ id, ...equipments }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Equipment-Exceptions', () => {
    it('Should return [BadRequest] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new EquipmentRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return [BadRequest] when sending invalid items', () => {
        usingArrayEquipments({ name: 111 }).forEach(async equipment => {
            await expect(() =>
                updateCase(
                    new EquipmentRequests({ id, ...equipment }),
                    repository,
                ),
            ).rejects.toThrowError(BadRequest);
        });
    });
});

import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/in-memory.inventory.repository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { updateCase } from 'app/use-cases/inventory-cases/update.case';
import { BadRequest } from 'utils/http.exceptions';

const repository = new InMemoryInventoryRepository();

const { pubId: id, ...data } = repository.getDataMock();

const [armor, accessory, weapon, consumable, material] = [
    repository.getFakeArmor(),
    repository.getFakeAccessory(),
    repository.getFakeWeapon(),
    repository.getFakeConsumable(),
    repository.getFakeMaterial(),
];

function usingArrayItems<T>(value: T[]) {
    return [
        { armors: value },
        { accessories: value },
        { consumables: value },
        { materials: value },
        { weapons: value },
    ];
}

repository.save(repository.getDataMock());

describe('Update-> Inventory-OK', () => {
    it('Should update all Inventory', async () => {
        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessory', async () => {
        data.accessories.push(accessory);

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update armor', async () => {
        data.armors.push(armor);

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update consumable', async () => {
        data.consumables.push(consumable);

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update material', async () => {
        data.materials.push(material);

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update weapon', async () => {
        data.weapons.push(weapon);

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Inventory-Exceptions', () => {
    it('Should return [BadRequest] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError(BadRequest);
    });

    it('Should return BadRequest when sending invalid ITEM', () => {
        usingArrayItems([Object({ name: '', description: '' })]).forEach(
            async item => {
                await expect(() =>
                    updateCase(
                        new InventoryRequests({ id, ...item }),
                        repository,
                    ),
                ).rejects.toThrowError(BadRequest);
            },
        );
    });
});

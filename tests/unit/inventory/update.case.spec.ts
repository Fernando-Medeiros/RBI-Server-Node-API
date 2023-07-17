import { describe, it, expect } from 'vitest';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { InventoryRequests } from 'infra/routes/requests/inventory.request.impl';
import { updateCase } from 'app/use-cases/inventory-cases/update.case';

const repository = new InMemoryInventoryRepository();
const { id } = repository.helpers.pubId();

describe('Update-> Inventory-OK', () => {
    repository.helpers.insertOneToDatabase();

    const data = Object.assign(repository.helpers.getDataMock());

    it('Should update all Inventory', async () => {
        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessory', async () => {
        data.accessories.push(repository.helpers.getFakeAccessory());

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update armor', async () => {
        data.armors.push(repository.helpers.getFakeArmor());

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update consumable', async () => {
        data.consumables.push(repository.helpers.getFakeConsumable());

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update material', async () => {
        data.materials.push(repository.helpers.getFakeMaterial());

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update weapon', async () => {
        data.weapons.push(repository.helpers.getFakeWeapon());

        const res = await updateCase(
            new InventoryRequests({ id, ...data }),
            repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Inventory-Exceptions', () => {
    it('Should return [no data] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new InventoryRequests({ id }), repository),
        ).rejects.toThrowError('No data');
    });

    it('Should return an error when sending invalid accessory', async () => {
        const accessories = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(new InventoryRequests({ id, accessories }), repository),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid armor', async () => {
        const armors = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(new InventoryRequests({ id, armors }), repository),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid consumable', async () => {
        const consumables = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(new InventoryRequests({ id, consumables }), repository),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid material', async () => {
        const materials = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(new InventoryRequests({ id, materials }), repository),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid weapon', async () => {
        const weapons = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(new InventoryRequests({ id, weapons }), repository),
        ).rejects.toThrowError('Missing fields');
    });
});

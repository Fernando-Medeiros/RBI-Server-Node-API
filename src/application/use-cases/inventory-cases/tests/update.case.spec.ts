import { describe, it, expect } from 'vitest';
import { InventoryRequestsToUpdate } from '../requests/update.requests';
import { InMemoryInventoryRepository } from './mock/inMemoryInventoryRepository';
import { UseCaseInventoryHelpers } from './mock/utils';
import { updateCase } from '../update.case';

const Repository = new InMemoryInventoryRepository();
const Helpers = new UseCaseInventoryHelpers(Repository);
const sub = Helpers.pubId();

describe('Update-> Inventory-OK', () => {
    Helpers.insertOneToDatabase();

    const data = Object.assign(Helpers.getDataMock());

    it('Should update all Inventory', async () => {
        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update accessory', async () => {
        data.accessories.push(Helpers.getFakeAccessory());

        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update armor', async () => {
        data.armors.push(Helpers.getFakeArmor());

        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update consumable', async () => {
        data.consumables.push(Helpers.getFakeConsumable());

        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update material', async () => {
        data.materials.push(Helpers.getFakeMaterial());

        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });

    it('Should update weapon', async () => {
        data.weapons.push(Helpers.getFakeWeapon());

        const res = await updateCase(
            new InventoryRequestsToUpdate({ sub, ...data }),
            Repository,
        );
        expect(res).toBeUndefined();
    });
});

describe('Update-> Inventory-Exceptions', () => {
    it('Should return [no data] when passing an empty object', async () => {
        await expect(() =>
            updateCase(new InventoryRequestsToUpdate({ sub }), Repository),
        ).rejects.toThrowError('No data');
    });

    it('Should return an error when sending invalid accessory', async () => {
        const accessories = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(
                new InventoryRequestsToUpdate({ sub, accessories }),
                Repository,
            ),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid armor', async () => {
        const armors = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(
                new InventoryRequestsToUpdate({ sub, armors }),
                Repository,
            ),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid consumable', async () => {
        const consumables = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(
                new InventoryRequestsToUpdate({ sub, consumables }),
                Repository,
            ),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid material', async () => {
        const materials = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(
                new InventoryRequestsToUpdate({ sub, materials }),
                Repository,
            ),
        ).rejects.toThrowError('Missing fields');
    });

    it('Should return an error when sending invalid weapon', async () => {
        const weapons = [Object({ name: '', description: '' })];

        await expect(() =>
            updateCase(
                new InventoryRequestsToUpdate({ sub, weapons }),
                Repository,
            ),
        ).rejects.toThrowError('Missing fields');
    });
});

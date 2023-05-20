import type {
    Armor,
    Accessory,
    Consumable,
    Material,
    Weapon,
} from 'domain/items/items.interface';
import type { IInventoryRepository } from '../../repository/inventory.repository.interfaces';
import inventoryDataMock from 'example/inventory.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import consumableExample from 'example/items/consumable.example.json';
import materialExample from 'example/items/material.example.json';
import weaponExample from 'example/items/weapon.example.json';

export class UseCaseInventoryHelpers {
    constructor(private database: IInventoryRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(inventoryDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = inventoryDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId(): string {
        return inventoryDataMock.pubId;
    }

    getDataMock() {
        return Object.assign(
            {},
            {
                armors: [] as Armor[],
                accessories: [] as Accessory[],
                consumables: [] as Consumable[],
                materials: [] as Material[],
                weapons: [] as Weapon[],
            },
        );
    }

    getFakeAccessory() {
        return accessoryExample;
    }

    getFakeArmor() {
        return armorExample;
    }

    getFakeConsumable() {
        return consumableExample;
    }

    getFakeMaterial() {
        return materialExample;
    }

    getFakeWeapon() {
        return weaponExample;
    }
}

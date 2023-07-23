import type {
    Armor,
    Accessory,
    Consumable,
    Material,
    Weapon,
} from 'domain/items/items.interface';
import type {
    InventoryDto,
    UpdateInventoryDto,
} from 'app/use-cases/inventory-cases/common/inventory.dto';
import { MemoryRepository } from 'tests/unit/in-memory-repository';
import inventoryDataMock from 'example/inventory.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import consumableExample from 'example/items/consumable.example.json';
import materialExample from 'example/items/material.example.json';
import weaponExample from 'example/items/weapon.example.json';

export class InMemoryInventoryRepository extends MemoryRepository<
    InventoryDto,
    UpdateInventoryDto
> {
    getFakeArmor = (): Armor => armorExample;

    getFakeAccessory = (): Accessory => accessoryExample;

    getFakeConsumable = (): Consumable => consumableExample;

    getFakeMaterial = (): Material => materialExample;

    getFakeWeapon = (): Weapon => weaponExample;

    getDataMock = (): InventoryDto => Object.assign({}, inventoryDataMock);
}

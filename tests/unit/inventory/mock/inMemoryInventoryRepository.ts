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
import type { IInventoryRepository } from 'app/use-cases/inventory-cases/common/inventory.repository.interface';
import inventoryDataMock from 'example/inventory.data.mock.json';
import accessoryExample from 'example/items/accessory.example.json';
import armorExample from 'example/items/armor.example.json';
import consumableExample from 'example/items/consumable.example.json';
import materialExample from 'example/items/material.example.json';
import weaponExample from 'example/items/weapon.example.json';

export class InMemoryInventoryRepository implements IInventoryRepository {
    public database: InventoryDto[] = [];
    public helpers: InMemoryHelpers;

    constructor() {
        this.helpers = new InMemoryHelpers(this);
    }

    async findById(id: string): Promise<InventoryDto | null> {
        return this.database.find(INV => INV.pubId === id) || null;
    }

    async findByIdAndDelete(id: string): Promise<InventoryDto | null> {
        const inventory = this.database.filter(INV => INV.pubId === id)[0];

        if (inventory) {
            this.database = this.database.filter(
                INV => INV.pubId != inventory.pubId,
            );
        }
        return inventory || null;
    }

    async findByIdAndUpdate(
        id: string,
        data: UpdateInventoryDto,
    ): Promise<InventoryDto | null> {
        const inventory = this.database.filter(INV => INV.pubId === id)[0];

        if (inventory) {
            this.database = this.database.filter(
                INV => INV.pubId != inventory.pubId,
            );
            this.database.push(Object.assign({}, inventory, data));
        }
        return inventory || null;
    }

    async save(data: InventoryDto): Promise<void> {
        this.database.push(data);
    }
}

export class InMemoryHelpers {
    constructor(private database: IInventoryRepository) {}

    insertOneToDatabase = async (): Promise<void> => {
        await this.database.save(inventoryDataMock);
    };

    removeOneToDatabase = async (): Promise<void> => {
        const { pubId: id } = inventoryDataMock;

        await this.database.findByIdAndDelete(id);
    };

    pubId = (): { id: string } => Object({ id: inventoryDataMock.pubId });

    getFakeArmor = (): Armor => armorExample;

    getFakeAccessory = (): Accessory => accessoryExample;

    getFakeConsumable = (): Consumable => consumableExample;

    getFakeMaterial = (): Material => materialExample;

    getFakeWeapon = (): Weapon => weaponExample;

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
}

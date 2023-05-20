import type {
    Armor,
    Accessory,
    Weapon,
    Consumable,
    Material,
} from 'domain/items/items.interface';

export class Inventory {
    constructor(
        readonly pubId: string,
        readonly armors: Armor[],
        readonly accessories: Accessory[],
        readonly consumables: Consumable[],
        readonly materials: Material[],
        readonly weapons: Weapon[],
        readonly _id?: string,
    ) {}
}

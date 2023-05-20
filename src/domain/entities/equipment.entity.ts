import type { Armor, Weapon, Accessory } from 'domain/items/items.interface';

export class Equipment {
    constructor(
        readonly pubId: string,
        readonly head: Armor | object,
        readonly body: Armor | object,
        readonly leg: Armor | object,
        readonly handLeft: Weapon | object,
        readonly handRight: Weapon | object,
        readonly accessoryLeft: Accessory | object,
        readonly accessoryRight: Accessory | object,
        readonly _id?: string,
    ) {}
}

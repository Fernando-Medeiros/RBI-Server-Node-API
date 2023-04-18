import type {
  Armor,
  Accessory,
  Weapon,
  Consumable,
  Material,
} from "domain/items/items.interface";

export interface IInventory {
  get getArmors(): Armor[];
  set setArmor(item: Armor);
  get getAccessories(): Accessory[];
  set setAccessory(item: Accessory);
  get getWeapons(): Weapon[];
  set setWeapon(item: Weapon);
  get getConsumables(): Consumable[];
  set setConsumable(item: Consumable);
  get getMaterials(): Material[];
  set setMaterial(item: Material);

  findArmor(name: string): Armor | undefined;
  findAccessory(name: string): Accessory | undefined;
  findConsumable(name: string): Consumable | undefined;
  findMaterial(name: string): Material | undefined;
  findWeapon(name: string): Weapon | undefined;

  getDataToSave(): PropsPackage;
}

export type PropsPackage = {
  _id?: string;
  pubId: string;
  armors: Armor[];
  accessories: Accessory[];
  consumables: Consumable[];
  materials: Material[];
  weapons: Weapon[];
};

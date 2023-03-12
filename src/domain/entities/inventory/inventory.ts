import type { IInventory, PropsPackage } from "./inventory.interface";
import type {
  Accessory,
  Armor,
  Consumable,
  Material,
  Weapon,
} from "@root/src/domain/items/items.interface";

export class Inventory implements IInventory {
  private props: PropsPackage;

  constructor(data: PropsPackage) {
    this.props = data;
  }

  get getArmors(): Armor[] {
    return this.props.armors;
  }
  set setArmor(item: Armor) {
    this.props.armors?.push(item);
  }
  get getAccessories(): Accessory[] {
    return this.props.accessories;
  }
  set setAccessory(item: Accessory) {
    this.props.accessories?.push(item);
  }
  get getWeapons(): Weapon[] {
    return this.props.weapons;
  }
  set setWeapon(item: Weapon) {
    this.props.weapons?.push(item);
  }
  get getConsumables(): Consumable[] {
    return this.props.consumables;
  }
  set setConsumable(item: Consumable) {
    this.props.consumables?.push(item);
  }
  get getMaterials(): Material[] {
    return this.props.materials;
  }
  set setMaterial(item: Material) {
    this.props.materials?.push(item);
  }

  findArmor(name: string): Armor | undefined {
    return this.props.armors?.find((item) => item.name === name);
  }
  findAccessory(name: string): Accessory | undefined {
    return this.props.accessories?.find((item) => item.name === name);
  }
  findWeapon(name: string): Weapon | undefined {
    return this.props.weapons?.find((item) => item.name === name);
  }
  findConsumable(name: string): Consumable | undefined {
    return this.props.consumables?.find((item) => item.name === name);
  }
  findMaterial(name: string): Material | undefined {
    return this.props.materials?.find((item) => item.name === name);
  }

  getDataToSave(): PropsPackage {
    return this.props;
  }
}

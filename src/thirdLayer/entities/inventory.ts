import type {
  Armor,
  Consumable,
  IInventory,
  Material,
  Weapon,
  Package,
} from "../interfaces/inventory.interface";

export class Inventory implements IInventory {
  private package: Package;

  constructor(items: Package) {
    this.package = items;
  }
  getArmor(name: string): Armor | undefined {
    return this.package.armors?.find((item) => item.name === name);
  }
  setArmor(item: Armor): void {
    this.package.armors?.push(item);
  }
  getWeapon(name: string): Weapon | undefined {
    return this.package.weapons?.find((item) => item.name === name);
  }
  setWeapon(item: Weapon): void {
    this.package.weapons?.push(item);
  }
  getConsumable(name: string): Consumable | undefined {
    return this.package.consumables?.find((item) => item.name === name);
  }
  setConsumable(item: Consumable): void {
    this.package.consumables?.push(item);
  }
  getMaterial(name: string): Material | undefined {
    return this.package.materials?.find((item) => item.name === name);
  }
  setMaterial(item: Material): void {
    this.package.materials?.push(item);
  }
  getPackageToSave(): Package {
    return this.package;
  }
}

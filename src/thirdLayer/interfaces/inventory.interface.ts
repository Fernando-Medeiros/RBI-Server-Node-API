export interface IInventory {
  getArmor(name: string): Armor | undefined;
  setArmor(item: Armor): void;
  getWeapon(name: string): Weapon | undefined;
  setWeapon(item: Weapon): void;
  getConsumable(name: string): Consumable | undefined;
  setConsumable(item: Consumable): void;
  getMaterial(name: string): Material | undefined;
  setMaterial(item: Material): void;
  getPackageToSave(): Package;
}

export type Package = {
  armors?: Armor[];
  weapons?: Weapon[];
  consumables?: Consumable[];
  materials?: Material[];
};

export type Armor = {
  name: string;
  defense: number;
  resistance: number;
  value: number;
  health?: number;
  energy?: number;
  description?: string;
};

export type Weapon = {
  name: string;
  attack: number;
  magic: number;
  value: number;
  health?: number;
  energy?: number;
  description?: string;
};

export type Consumable = {
  name: string;
  restore: number;
  type: string;
  total: number;
  value: number;
};

export type Material = {
  name: string;
  type: string;
  total: number;
  value: number;
};

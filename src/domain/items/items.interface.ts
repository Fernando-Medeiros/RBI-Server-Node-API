export type Armor = {
  name: string;
  defense: number;
  resistance: number;
  value: number;
  description?: string;
};

export type Weapon = {
  name: string;
  attack: number;
  magic: number;
  value: number;
  description?: string;
};

export type Consumable = {
  name: string;
  type: string;
  restore: number;
  total: number;
  value: number;
  description?: string;
};

export type Material = {
  name: string;
  type: string;
  total: number;
  value: number;
  description?: string;
};

export type Accessory = {
  name: string;
  type: string;
  value: number;
  health: number;
  energy: number;
  description?: string;
};

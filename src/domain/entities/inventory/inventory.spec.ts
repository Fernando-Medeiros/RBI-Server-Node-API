import { describe, it, expect } from "vitest";

import { Inventory } from "./inventory";

const dataMock = {
  armors: [],
  accessories: [],
  consumables: [],
  materials: [],
  weapons: [],
};

const itemsMock = {
  armor: { name: "glove", defense: 2, resistance: 1, value: 1 },
  accessory: { name: "wooden ring", type: "ring", value: 4, health: 2, energy: 2},
  weapon: { name: "dagger", attack: 2, magic: 0, value: 1 },
  consumable: { name: "apple", type: "health", restore: 5, total: 1, value: 1 },
  material: { name: "gold", type: "trade", total: 1, value: 1 },
};

const inventory = new Inventory(dataMock);

describe("Domain -> Inventory -> OK", () => {
  it("Should get the data to save", () => {
    expect(inventory.getDataToSave()).toEqual(dataMock);
    expect(inventory.getDataToSave()).toBeTypeOf("object");
  });
});

describe("Domain -> Inventory -> SET Items -> OK", () => {
  it("Should add a armor to inventory", () => {
    const { armor } = itemsMock;

    inventory.setArmor = armor;
  });

  it("Should add a accessory to inventory", () => {
    const { accessory } = itemsMock;

    inventory.setAccessory = accessory;
  });

  it("Should add a weapon to inventory", () => {
    const { weapon } = itemsMock;

    inventory.setWeapon = weapon;
  });

  it("Should add a consumable to inventory", () => {
    const { consumable } = itemsMock;

    inventory.setConsumable = consumable;
  });

  it("Should add a material to inventory", () => {
    const { material } = itemsMock;

    inventory.setMaterial = material;
  });
});

describe("Domain -> Inventory -> GET Items[] -> OK", () => {
  it("Should get the armor inside the inventory", () => {
    const { armor } = itemsMock;

    expect(inventory.getArmors).toContain(armor);
  });

  it("Should get the accessory inside the inventory", () => {
    const { accessory } = itemsMock;

    expect(inventory.getAccessories).toContain(accessory);
  });

  it("Should get the weapon inside the inventory", () => {
    const { weapon } = itemsMock;

    expect(inventory.getWeapons).toContain(weapon);
  });

  it("Should get the consumable inside the inventory", () => {
    const { consumable } = itemsMock;

    expect(inventory.getConsumables).toContain(consumable);
  });

  it("Should get the material inside the inventory", () => {
    const { material } = itemsMock;

    expect(inventory.getMaterials).toContain(material);
  });
});

describe("Domain -> Inventory -> FIND Items -> OK", () => {
  it("Should get the armor inside the inventory", () => {
    const { armor } = itemsMock;

    expect(inventory.findArmor(armor.name)).toEqual(armor);
  });

  it("Should get the accessory inside the inventory", () => {
    const { accessory } = itemsMock;

    expect(inventory.findAccessory(accessory.name)).toEqual(accessory);
  });

  it("Should get the weapon inside the inventory", () => {
    const { weapon } = itemsMock;

    expect(inventory.findWeapon(weapon.name)).toEqual(weapon);
  });

  it("Should get the consumable inside the inventory", () => {
    const { consumable } = itemsMock;

    expect(inventory.findConsumable(consumable.name)).toEqual(consumable);
  });

  it("Should get the material inside the inventory", () => {
    const { material } = itemsMock;

    expect(inventory.findMaterial(material.name)).toEqual(material);
  });
});

import { describe, it, expect } from "vitest";

import { Inventory } from "../entities/inventory";

const packageMock = {
  armors: [],
  consumables: [],
  materials: [],
  weapons: [],
};

const itemsMock = {
  armor: { name: "glove", defense: 2, resistance: 1, value: 1 },
  weapon: { name: "dagger", attack: 2, magic: 0, value: 1 },
  consumable: { name: "apple", restore: 5, type: "health", total: 1, value: 1 },
  material: { name: "gold", type: "trade", total: 1, value: 1 },
};

const inventory = new Inventory(packageMock);

describe("Domain -> Inventory -> OK", () => {
  it("Should get the data to save", () => {
    expect(inventory.getPackageToSave()).toEqual(packageMock);
    expect(inventory.getPackageToSave()).toBeTypeOf("object");
  });
});

describe("Domain -> Inventory -> SET Items -> OK", () => {
  it("Should add a armor to inventory", () => {
    const { armor } = itemsMock;

    expect(inventory.setArmor(armor)).toBeNull;
  });

  it("Should add a weapon to inventory", () => {
    const { weapon } = itemsMock;

    expect(inventory.setWeapon(weapon)).toBeNull;
  });

  it("Should add a consumable to inventory", () => {
    const { consumable } = itemsMock;

    expect(inventory.setConsumable(consumable)).toBeNull;
  });

  it("Should add a material to inventory", () => {
    const { material } = itemsMock;

    expect(inventory.setMaterial(material)).toBeNull;
  });
});

describe("Domain -> Inventory -> GET Items -> OK", () => {
  it("Should get the armor inside the inventory", () => {
    const { armor } = itemsMock;

    expect(inventory.getArmor(armor.name)).toEqual(armor);
  });

  it("Should get the weapon inside the inventory", () => {
    const { weapon } = itemsMock;

    expect(inventory.getWeapon(weapon.name)).toEqual(weapon);
  });

  it("Should get the consumable inside the inventory", () => {
    const { consumable } = itemsMock;

    expect(inventory.getConsumable(consumable.name)).toEqual(consumable);
  });

  it("Should get the material inside the inventory", () => {
    const { material } = itemsMock;

    expect(inventory.getMaterial(material.name)).toEqual(material);
  });
});

import { InMemoryInventoryRepository } from "./inMemoryInventoryRepository";

import inventoryDataMock from "./inventory.data.mock.json";

import accessoryExample from "domain/items/examples/accessory.example.json";
import armorExample from "domain/items/examples/armor.example.json";
import consumableExample from "domain/items/examples/consumable.example.json";
import materialExample from "domain/items/examples/material.example.json";
import weaponExample from "domain/items/examples/weapon.example.json";

const database = new InMemoryInventoryRepository();

const inventory = {
  armors: [] as object[],
  accessories: [] as object[],
  consumables: [] as object[],
  materials: [] as object[],
  weapons: [] as object[],
};

export class UseCaseInventoryHelpers {
  public static insertOneToDatabase = async (): Promise<void> => {
    await database.save(inventoryDataMock);
  };

  public static removeOneToDatabase = async (): Promise<void> => {
    const { pubId: id } = inventoryDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getPubId(): string {
    return inventoryDataMock.pubId;
  }

  public static getDataMock() {
    return Object.assign({}, inventory);
  }

  public static getFakeAccessory() {
    return accessoryExample;
  }

  public static getFakeArmor() {
    return armorExample;
  }

  public static getFakeConsumable() {
    return consumableExample;
  }

  public static getFakeMaterial() {
    return materialExample;
  }

  public static getFakeWeapon() {
    return weaponExample;
  }
}

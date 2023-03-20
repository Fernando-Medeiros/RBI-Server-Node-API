import { InMemoryInventoryRepository } from "./inMemoryInventoryRepository";

import InventoryDataMock from "./inventory.data.mock.json";

import accessoryExample from "@dom/items/examples/accessory.example.json";
import armorExample from "@dom/items/examples/armor.example.json";
import consumableExample from "@dom/items/examples/consumable.example.json";
import materialExample from "@dom/items/examples/material.example.json";
import weaponExample from "@dom/items/examples/weapon.example.json";

const database = new InMemoryInventoryRepository();

export class UseCaseInventoryHelpers {
  public static insertOneToDatabase = async (): Promise<void> => {
    await database.save(InventoryDataMock);
  };

  public static removeOneToDatabase = async (): Promise<void> => {
    const { pubId: id } = InventoryDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getPubId(): string {
    return InventoryDataMock.pubId;
  }

  public static getDataMock() {
    return Object.assign({}, InventoryDataMock);
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

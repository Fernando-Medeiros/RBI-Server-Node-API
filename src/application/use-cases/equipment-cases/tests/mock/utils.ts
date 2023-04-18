import { InMemoryEquipmentRepository } from "./inMemoryEquipmentRepository";

import equipmentDataMock from "example/equipment.data.mock.json";

import accessoryExample from "example/items/accessory.example.json";
import armorExample from "example/items/armor.example.json";
import weaponExample from "example/items/weapon.example.json";

const database = new InMemoryEquipmentRepository();

export class UseCaseEquipmentsHelpers {
  public static insertOneToDatabase = async (): Promise<void> => {
    await database.save(equipmentDataMock);
  };

  public static removeOneToDatabase = async (): Promise<void> => {
    const { pubId: id } = equipmentDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getDataMock() {
    return Object.assign({}, equipmentDataMock);
  }

  public static getFakeArmor() {
    return armorExample;
  }

  public static getFakeWeapon() {
    return weaponExample;
  }

  public static getFakeAccessory() {
    return accessoryExample;
  }
}

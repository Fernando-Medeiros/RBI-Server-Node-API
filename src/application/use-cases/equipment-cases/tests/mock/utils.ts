import { InMemoryEquipmentRepository } from "./inMemoryEquipmentRepository";

import equipmentDataMock from "./equipment.data.mock.json";

import accessoryExample from "@dom/items/examples/accessory.example.json";
import armorExample from "@dom/items/examples/armor.example.json";
import weaponExample from "@dom/items/examples/weapon.example.json";

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

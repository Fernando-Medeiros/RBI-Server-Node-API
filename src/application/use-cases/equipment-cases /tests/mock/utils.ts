import { InMemoryEquipmentRepository } from "./inMemoryEquipmentRepository";

import equipmentDataMock from "./equipment.data.mock.json";
import armorItem from "./armor.data.mock.json";
import weaponItem from "./weapon.data.mock.json";
import accessoryItem from "./accessory.data.mock.json";

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
    return armorItem;
  }

  public static getFakeWeapon() {
    return weaponItem;
  }

  public static getFakeAccessory() {
    return accessoryItem;
  }
}

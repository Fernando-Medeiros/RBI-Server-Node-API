import { BadRequest } from "@src/utils/http.exceptions";

function testFields(item: object, keys: string[]) {
  const itemKeys = Object.keys(item);
  const itemValues = Object.values(item);

  if (itemValues.length >= 1) {
    if (!(itemKeys.toString() === keys.toString())) {
      throw new BadRequest(`Missing fields: ${keys}`);
    }
  }
}

export class EquipmentValidators {
  static validateArmor(item: unknown) {
    testFields(item || {}, [
      "name",
      "defense",
      "resistance",
      "value",
      "description",
    ]);
    return item;
  }

  static validateAccessory(item: unknown) {
    testFields(item || {}, [
      "name",
      "type",
      "value",
      "health",
      "energy",
      "description",
    ]);
    return item;
  }

  static validateWeapon(item: unknown) {
    testFields(item || {}, ["name", "attack", "magic", "value", "description"]);
    return item;
  }
}

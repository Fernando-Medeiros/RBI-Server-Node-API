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
  static armor(item: object) {
    testFields(item, ["name", "defense", "resistance", "value", "description"]);
    return item;
  }

  static accessory(item: object) {
    testFields(item, [
      "name",
      "type",
      "value",
      "health",
      "energy",
      "description",
    ]);
    return item;
  }

  static weapon(item: object) {
    testFields(item, ["name", "attack", "magic", "value", "description"]);
    return item;
  }
}

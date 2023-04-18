import { BadRequest } from "utils/http.exceptions";

function clearInvalidItems(packaged: [] | object[]) {
  const packageItems = [];

  for (const items of packaged) {
    for (const item in items) {
      if (Object.values(item).length >= 4) {
        packageItems.push(items);
      }
    }
  }
  return packageItems;
}

function testFields(packageItems: [] | object[], fields: string[]) {
  const items = clearInvalidItems(packageItems);

  for (const item of items) {
    const itemFields = Object.keys(item);

    if (!(itemFields.toString() === fields.toString())) {
      throw new BadRequest(`Missing fields: ${fields}`);
    }
  }
  return items;
}

export class InventoryValidators {
  static armor(items: [] | object[]) {
    const fields = ["name", "defense", "resistance", "value", "description"];

    return testFields(items, fields);
  }
  static accessory(items: [] | object[]) {
    const fields = ["name", "type", "value", "health", "energy", "description"];

    return testFields(items, fields);
  }
  static consumable(items: [] | object[]) {
    const fields = ["name", "type", "restore", "total", "value", "description"];

    return testFields(items, fields);
  }
  static material(items: [] | object[]) {
    const fields = ["name", "type", "total", "value", "description"];

    return testFields(items, fields);
  }
  static weapon(items: [] | object[]) {
    const fields = ["name", "attack", "magic", "value", "description"];

    return testFields(items, fields);
  }
}

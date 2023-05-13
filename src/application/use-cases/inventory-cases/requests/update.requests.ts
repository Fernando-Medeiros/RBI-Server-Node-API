import type { Inventory } from "domain/entities/inventory.entity";
import type { IInventoryRequestsToUpdate } from "../repository/inventory.requests.interfaces";
import { InventoryValidators as validate } from "../validators/validators";
import { BadRequest } from "utils/http.exceptions";

export class InventoryRequestsToUpdate implements IInventoryRequestsToUpdate {
  constructor(readonly payload: Partial<Inventory> & { sub: string }) {}

  getRequestToUpdate(): {
    sub: string;
    toUpdate: Partial<Inventory>;
  } {
    const { sub, armors, accessories, consumables, materials, weapons } =
      this.payload;

    const toUpdate = {
      ...(armors && { armors: validate.armor(armors) }),
      ...(accessories && { accessories: validate.accessory(accessories) }),
      ...(consumables && { consumables: validate.consumable(consumables) }),
      ...(materials && { materials: validate.material(materials) }),
      ...(weapons && { weapons: validate.weapon(weapons) }),
    };

    if (!Object.values(toUpdate).length) {
      throw new BadRequest("No data to be updated!");
    }

    return { sub, toUpdate: Object(toUpdate) };
  }
}

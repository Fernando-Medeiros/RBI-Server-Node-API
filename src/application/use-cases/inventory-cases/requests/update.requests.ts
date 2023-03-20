import type { InventoryUpdateProps } from "../repository/inventory.props";
import type { IInventoryRequestsToUpdate } from "../repository/inventory.requests.interfaces";
import { InventoryValidators as validate } from "../validators/validators";
import { BadRequest } from "@src/utils/http.exceptions";

export class InventoryRequestsToUpdate implements IInventoryRequestsToUpdate {
  constructor(
    protected sub: string,
    protected props: {
      armors?: [] | object[];
      accessories?: [] | object[];
      consumables?: [] | object[];
      materials?: [] | object[];
      weapons?: [] | object[];
    }
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: InventoryUpdateProps } {
    const { armors, accessories, consumables, materials, weapons } = this.props;

    const inventory = {
      ...(armors && { armors: validate.armor(armors) }),
      ...(accessories && { accessories: validate.accessory(accessories) }),
      ...(consumables && { consumables: validate.consumable(consumables) }),
      ...(materials && { materials: validate.material(materials) }),
      ...(weapons && { weapons: validate.weapon(weapons) }),
    };

    const items = Object.values(inventory).filter(
      (I) => I?.values != undefined
    );

    if (items.length === 0) {
      throw new BadRequest("No data to be updated!");
    }

    const dataToUpdate = {};

    Object.assign(dataToUpdate, inventory);

    return { sub: this.sub, toUpdate: dataToUpdate };
  }
}

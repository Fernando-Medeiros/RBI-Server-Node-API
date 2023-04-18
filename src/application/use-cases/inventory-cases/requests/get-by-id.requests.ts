import type { IInventoryRequestsToGetById } from "../repository/inventory.requests.interfaces";
import { CommonValidators } from "app/validators/common.validators";

export class InventoryRequestsToGetById implements IInventoryRequestsToGetById {
  constructor(protected sub: string) {}

  getRequestToGetById(): { sub: string } {
    CommonValidators.validateID(this.sub);

    return { sub: this.sub };
  }
}

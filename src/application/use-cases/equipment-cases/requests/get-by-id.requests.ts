import type { IEquipmentRequestsToGetById } from "../repository/equipment.requests.interfaces";
import { CommonValidators } from "@app/validators/common.validators";

export class EquipmentRequestsToGetById implements IEquipmentRequestsToGetById {
  constructor(protected sub: string) {}

  getRequestToGetById(): { sub: string } {
    CommonValidators.validateID(this.sub);

    return { sub: this.sub };
  }
}

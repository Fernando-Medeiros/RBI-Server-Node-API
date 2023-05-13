import type { IEquipmentRequestsToGetById } from "../repository/equipment.requests.interfaces";
import { CommonValidators } from "app/validators/common.validators";

export class EquipmentRequestsToGetById implements IEquipmentRequestsToGetById {
  constructor(readonly payload: { id: string }) {}

  getRequestToGetById(): { sub: string } {
    const { id: sub } = this.payload;

    CommonValidators.validateID(sub);

    return { sub };
  }
}

import type { IStatusRequestsToGetById } from "../repository/status.requests.interfaces";
import { CommonValidators } from "app/validators/common.validators";

export class StatusRequestsToGetById implements IStatusRequestsToGetById {
  constructor(readonly payload: { id: string }) {}

  getRequestToGetById(): { sub: string } {
    const { id: sub } = this.payload;

    CommonValidators.validateID(sub);

    return { sub };
  }
}

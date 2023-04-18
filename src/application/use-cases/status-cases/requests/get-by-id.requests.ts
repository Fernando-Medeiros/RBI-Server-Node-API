import type { IStatusRequestsToGetById } from "../repository/status.requests.interfaces";
import { CommonValidators } from "app/validators/common.validators";

export class StatusRequestsToGetById implements IStatusRequestsToGetById {
  constructor(protected sub: string) {}

  getRequestToGetById(): { sub: string } {
    CommonValidators.validateID(this.sub);

    return { sub: this.sub };
  }
}

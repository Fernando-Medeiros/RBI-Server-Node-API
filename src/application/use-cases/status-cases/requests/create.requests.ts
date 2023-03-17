import type { IStatusRequestsToCreate } from "../repository/status.requests.interfaces";

export class StatusRequestsToCreate implements IStatusRequestsToCreate {
  constructor(protected sub: string) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.sub };
  }
}

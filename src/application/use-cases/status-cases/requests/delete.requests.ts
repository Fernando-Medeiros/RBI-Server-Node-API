import type { IStatusRequestsToDelete } from "../repository/status.requests.interfaces";

export class StatusRequestsToDelete implements IStatusRequestsToDelete {
  constructor(protected sub: string) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.sub };
  }
}

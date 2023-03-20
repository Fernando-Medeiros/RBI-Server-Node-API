import type { IInventoryRequestsToCreate } from "../repository/inventory.requests.interfaces";

export class InventoryRequestsToCreate implements IInventoryRequestsToCreate {
  constructor(protected sub: string) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.sub };
  }
}

import type { IInventoryRequestsToDelete } from "../repository/inventory.requests.interfaces";

export class InventoryRequestsToDelete implements IInventoryRequestsToDelete {
  constructor(protected sub: string) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.sub };
  }
}

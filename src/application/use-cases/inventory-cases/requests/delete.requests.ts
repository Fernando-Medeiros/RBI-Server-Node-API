import type { IInventoryRequestsToDelete } from "../repository/inventory.requests.interfaces";

export class InventoryRequestsToDelete implements IInventoryRequestsToDelete {
  constructor(readonly payload: { sub: string }) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.payload.sub };
  }
}

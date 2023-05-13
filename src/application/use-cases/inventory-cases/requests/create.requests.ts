import type { IInventoryRequestsToCreate } from "../repository/inventory.requests.interfaces";

export class InventoryRequestsToCreate implements IInventoryRequestsToCreate {
  constructor(readonly payload: { sub: string }) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.payload.sub };
  }
}

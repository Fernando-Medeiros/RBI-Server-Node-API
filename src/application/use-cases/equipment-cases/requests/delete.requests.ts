import type { IEquipmentRequestsToDelete } from "../repository/equipment.requests.interfaces";

export class EquipmentRequestsToDelete implements IEquipmentRequestsToDelete {
  constructor(readonly payload: { sub: string }) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.payload.sub };
  }
}

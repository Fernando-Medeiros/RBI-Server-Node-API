import type { IEquipmentRequestsToDelete } from "../repository/equipment.requests.interfaces";

export class EquipmentRequestsToDelete implements IEquipmentRequestsToDelete {
  constructor(protected sub: string) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.sub };
  }
}

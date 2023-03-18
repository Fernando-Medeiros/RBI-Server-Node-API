import type { IEquipmentRequestsToCreate } from "../repository/equipment.requests.interfaces";

export class EquipmentRequestsToCreate implements IEquipmentRequestsToCreate {
  constructor(protected sub: string) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.sub };
  }
}

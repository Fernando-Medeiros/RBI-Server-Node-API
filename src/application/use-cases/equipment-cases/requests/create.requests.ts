import type { IEquipmentRequestsToCreate } from '../repository/equipment.requests.interfaces';

export class EquipmentRequestsToCreate implements IEquipmentRequestsToCreate {
    constructor(readonly payload: { sub: string }) {}

    getRequestToCreate(): { sub: string } {
        return { sub: this.payload.sub };
    }
}

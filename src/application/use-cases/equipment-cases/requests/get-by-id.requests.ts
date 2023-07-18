import { CommonValidators } from 'utils/common.validators';
import type { IEquipmentRequestsToGetById } from '../repository/equipment.requests.interfaces';

export class EquipmentRequestsToGetById implements IEquipmentRequestsToGetById {
    constructor(readonly payload: { id: string }) {}

    getRequestToGetById(): { sub: string } {
        const { id: sub } = this.payload;

        CommonValidators.validateUUID(sub);

        return { sub };
    }
}

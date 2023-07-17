import { CommonValidators } from 'utils/common.validators';
import type { IInventoryRequestsToGetById } from '../repository/inventory.requests.interfaces';

export class InventoryRequestsToGetById implements IInventoryRequestsToGetById {
    constructor(readonly payload: { id: string }) {}

    getRequestToGetById(): { sub: string } {
        const { id: sub } = this.payload;

        CommonValidators.validateUUID(sub);

        return { sub };
    }
}

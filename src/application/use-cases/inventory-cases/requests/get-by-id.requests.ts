import type { IInventoryRequestsToGetById } from '../repository/inventory.requests.interfaces';
import { CommonValidators } from 'app/validators/common.validators';

export class InventoryRequestsToGetById implements IInventoryRequestsToGetById {
    constructor(readonly payload: { id: string }) {}

    getRequestToGetById(): { sub: string } {
        const { id: sub } = this.payload;

        CommonValidators.validateID(sub);

        return { sub };
    }
}

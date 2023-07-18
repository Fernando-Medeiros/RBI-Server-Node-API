import type {
    IRequestToCreate,
    IRequestToDelete,
    IRequestToGetById,
} from 'core/requests.interface';
import { CommonValidators } from 'utils/common.validators';

export class BaseRequests
    implements IRequestToCreate, IRequestToDelete, IRequestToGetById
{
    constructor(protected payload: { id: string }) {}

    getRequestToCreate(): { id: string; data: object } {
        const { id } = this.payload;
        CommonValidators.validateUUID(id);
        return { id, data: {} };
    }

    getRequestToDelete(): { id: string } {
        const { id } = this.payload;
        CommonValidators.validateUUID(id);
        return { id };
    }

    getRequestToGetById(): { id: string } {
        const { id } = this.payload;
        CommonValidators.validateUUID(id);
        return { id };
    }
}

import type { IStatusRequestsToDelete } from '../repository/status.requests.interfaces';

export class StatusRequestsToDelete implements IStatusRequestsToDelete {
    constructor(readonly payload: { sub: string }) {}

    getRequestToDelete(): { sub: string } {
        return { sub: this.payload.sub };
    }
}

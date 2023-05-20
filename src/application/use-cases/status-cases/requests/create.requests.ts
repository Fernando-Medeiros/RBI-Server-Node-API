import type { IStatusRequestsToCreate } from '../repository/status.requests.interfaces';

export class StatusRequestsToCreate implements IStatusRequestsToCreate {
    constructor(readonly payload: { sub: string }) {}

    getRequestToCreate(): { sub: string } {
        return { sub: this.payload.sub };
    }
}

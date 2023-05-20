import type { StatusUpdateProps } from './status.props';

export interface IStatusRequestsToCreate {
    getRequestToCreate(): { sub: string };
}

export interface IStatusRequestsToUpdate {
    getRequestToUpdate(): { sub: string; toUpdate: StatusUpdateProps };
}

export interface IStatusRequestsToDelete {
    getRequestToDelete(): { sub: string };
}

export interface IStatusRequestsToGetById {
    getRequestToGetById(): { sub: string };
}

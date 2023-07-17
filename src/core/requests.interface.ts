export interface IRequestToCreate {
    getRequestToCreate(): { id: string };
}

export interface IRequestToUpdate<T> {
    getRequestToUpdate(): { id: string; data: T };
}

export interface IRequestToDelete {
    getRequestToDelete(): { id: string };
}

export interface IRequestToGetById {
    getRequestToGetById(): { id: string };
}

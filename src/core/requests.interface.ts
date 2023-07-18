export interface IRequestToCreate<T = object> {
    getRequestToCreate(): { id: string; data: T };
}

export interface IRequestToUpdate<T = object> {
    getRequestToUpdate(): { id: string; data: T };
}

export interface IRequestToDelete {
    getRequestToDelete(): { id: string };
}

export interface IRequestToGetById {
    getRequestToGetById(): { id: string };
}

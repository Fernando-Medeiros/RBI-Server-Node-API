import type { Inventory } from 'domain/entities/inventory.entity';

export interface IInventoryRequestsToCreate {
    getRequestToCreate(): { sub: string };
}

export interface IInventoryRequestsToUpdate {
    getRequestToUpdate(): { sub: string; toUpdate: Partial<Inventory> };
}

export interface IInventoryRequestsToDelete {
    getRequestToDelete(): { sub: string };
}

export interface IInventoryRequestsToGetById {
    getRequestToGetById(): { sub: string };
}

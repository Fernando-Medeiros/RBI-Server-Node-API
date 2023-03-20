import type { InventoryUpdateProps } from "./inventory.props";

export interface IInventoryRequestsToCreate {
  getRequestToCreate(): { sub: string };
}

export interface IInventoryRequestsToUpdate {
  getRequestToUpdate(): { sub: string; toUpdate: InventoryUpdateProps };
}

export interface IInventoryRequestsToDelete {
  getRequestToDelete(): { sub: string };
}

export interface IInventoryRequestsToGetById {
  getRequestToGetById(): { sub: string };
}

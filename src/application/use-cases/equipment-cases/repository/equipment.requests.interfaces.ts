import type { EquipmentUpdateProps } from "./equipment.props";

export interface IEquipmentRequestsToCreate {
  getRequestToCreate(): { sub: string };
}

export interface IEquipmentRequestsToUpdate {
  getRequestToUpdate(): { sub: string; toUpdate: EquipmentUpdateProps };
}

export interface IEquipmentRequestsToDelete {
  getRequestToDelete(): { sub: string };
}

export interface IEquipmentRequestsToGetById {
  getRequestToGetById(): { sub: string };
}

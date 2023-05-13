import type { IEquipmentRepository } from "./repository/equipment.repository.interfaces";
import type { IEquipmentRequestsToDelete } from "./repository/equipment.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const deleteCase = async (
  requests: IEquipmentRequestsToDelete,
  repository: IEquipmentRepository
) => {
  const { sub } = requests.getRequestToDelete();

  const result = await repository.findByIdAndDelete(sub);

  if (!result) {
    throw new NotFound("Equipments not found!");
  }
};

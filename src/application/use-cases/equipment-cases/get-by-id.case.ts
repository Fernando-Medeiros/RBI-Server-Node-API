import type { IEquipmentRepository } from "./repository/equipment.repository.interfaces";
import type { IEquipmentRequestsToGetById } from "./repository/equipment.requests.interfaces";
import { NotFound } from "@src/utils/http.exceptions";

export const getByIdCase = async (
  requests: IEquipmentRequestsToGetById,
  repository: IEquipmentRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const status = await repository.findById(sub);

  if (status === null) {
    throw new NotFound("Equipments not found!");
  }

  return status;
};

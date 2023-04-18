import type { IEquipmentRepository } from "./repository/equipment.repository.interfaces";
import type { IEquipmentRequestsToGetById } from "./repository/equipment.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const getByIdCase = async (
  requests: IEquipmentRequestsToGetById,
  repository: IEquipmentRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const equipments = await repository.findById(sub);

  if (equipments === null) {
    throw new NotFound("Equipments not found!");
  }

  return {
    pubId: equipments.pubId,
    head: equipments.head,
    body: equipments.body,
    leg: equipments.leg,
    handLeft: equipments.handLeft,
    handRight: equipments.handRight,
    accessoryLeft: equipments.accessoryLeft,
    accessoryRight: equipments.accessoryRight,
  };
};

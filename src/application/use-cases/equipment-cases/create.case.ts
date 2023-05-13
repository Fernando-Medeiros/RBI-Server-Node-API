import type { IEquipmentRepository } from "./repository/equipment.repository.interfaces";
import type { IEquipmentRequestsToCreate } from "./repository/equipment.requests.interfaces";
import { BadRequest } from "utils/http.exceptions";

export const createCase = async (
  requests: IEquipmentRequestsToCreate,
  repository: IEquipmentRepository
) => {
  const { sub } = requests.getRequestToCreate();

  if (await repository.findById(sub)) {
    throw new BadRequest("Only one equipment allowed per character!");
  }
  const equipment = {
    pubId: sub,
    head: {},
    body: {},
    leg: {},
    handLeft: {},
    handRight: {},
    accessoryLeft: {},
    accessoryRight: {},
  };

  await repository.save(equipment);
};

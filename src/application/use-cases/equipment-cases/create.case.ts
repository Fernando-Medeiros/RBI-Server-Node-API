import type { IEquipmentRepository } from "./repository/equipment.repository.interfaces";
import type { IEquipmentRequestsToCreate } from "./repository/equipment.requests.interfaces";
import { Equipment } from "@dom/entities/equipment/equipment";
import { BadRequest } from "@src/utils/http.exceptions";

export const createCase = async (
  requests: IEquipmentRequestsToCreate,
  repository: IEquipmentRepository
) => {
  const { sub } = requests.getRequestToCreate();

  if (await repository.findById(sub)) {
    throw new BadRequest("Only one equipment allowed per character!");
  }
  const equipment = new Equipment({
    pubId: sub,
    head: {},
    body: {},
    leg: {},
    handLeft: {},
    handRight: {},
    accessoryLeft: {},
    accessoryRight: {},
  });

  await repository.save(equipment.getDataToSave());
};

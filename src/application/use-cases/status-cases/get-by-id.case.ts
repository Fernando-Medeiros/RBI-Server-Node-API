import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToGetById } from "./repository/status.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const getByIdCase = async (
  requests: IStatusRequestsToGetById,
  repository: IStatusRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const status = await repository.findById(sub);

  if (status === null) {
    throw new NotFound("Status not found!");
  }

  return {
    pubId: status.pubId,
    points: status.points,
    experience: status.experience,
    strength: status.strength,
    intelligence: status.intelligence,
    dexterity: status.dexterity,
    vitality: status.vitality,
    health: status.health,
    energy: status.energy,
    currentHealth: status.currentHealth,
    currentEnergy: status.currentEnergy,
  };
};

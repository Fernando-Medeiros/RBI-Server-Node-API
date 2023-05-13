import type { IStatusRepository } from "./repository/status.repository.interfaces";
import type { IStatusRequestsToGetById } from "./repository/status.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const getByIdCase = async (
  requests: IStatusRequestsToGetById,
  repository: IStatusRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const status = await repository.findById(sub);

  if (!status) {
    throw new NotFound("Status not found!");
  }

  const {
    pubId,
    points,
    experience,
    strength,
    intelligence,
    dexterity,
    vitality,
    health,
    energy,
    currentHealth,
    currentEnergy,
  } = status;

  return {
    pubId,
    points,
    experience,
    strength,
    intelligence,
    dexterity,
    vitality,
    health,
    energy,
    currentHealth,
    currentEnergy,
  };
};

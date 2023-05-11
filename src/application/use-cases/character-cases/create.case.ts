import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToCreate } from "./repository/character.requests.interfaces";
import { BadRequest } from "utils/http.exceptions";

export const createCase = async (
  requests: ICharacterRequestsToCreate,
  repository: ICharacterRepository
) => {
  const { sub, toCreate } = requests.getRequestToCreate();

  toCreate.pubId = sub;

  const nameExists = await repository.findByName(toCreate.charName);

  if (nameExists) {
    throw new BadRequest("Character name is already in use!");
  }

  await repository.save(toCreate);
};

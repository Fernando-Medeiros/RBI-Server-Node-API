import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToCreate } from "./repository/character.requests.interfaces";

import { BadRequest } from "@root/src/utils/http.exceptions";

export const createCase = async (
  requests: ICharacterRequestsToCreate,
  repository: ICharacterRepository
) => {
  const [sub, toCreate] = requests.getRequestToCreate();

  toCreate.pubId = sub as string;

  const nameExists = await repository.findByName(toCreate.charName);

  if (nameExists != null) {
    throw new BadRequest("Character name is already in use!");
  }

  await repository.save(toCreate);
};

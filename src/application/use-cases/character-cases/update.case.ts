import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToUpdate } from "./repository/character.requests.interfaces";

import { BadRequest, NotFound } from "@src/utils/http.exceptions";

export const updateCase = async (
  requests: ICharacterRequestsToUpdate,
  repository: ICharacterRepository
) => {
  const { sub, toUpdate } = requests.getRequestToUpdate();

  const nameExists = toUpdate?.charName
    ? await repository.findByName(toUpdate.charName)
    : null;

  if (nameExists != null) {
    throw new BadRequest("Character name is already in use!");
  }

  const result = await repository.findByIdAndUpdate(sub as string, toUpdate);

  if (result === null) {
    throw new NotFound("Character not found!");
  }
};

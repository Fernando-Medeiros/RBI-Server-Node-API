import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToDelete } from "./repository/character.requests.interfaces";

import { NotFound } from "@src/utils/http.exceptions";

export const deleteCase = async (
  requests: ICharacterRequestsToDelete,
  repository: ICharacterRepository
): Promise<void> => {
  const { sub } = requests.getRequestToDelete();

  const result = await repository.findByIdAndDelete(sub as string);

  if (result === null) {
    throw new NotFound("Character not found!");
  }
};

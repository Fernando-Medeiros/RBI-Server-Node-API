import type { ICharacterRepository } from "./repository/character.interface";

export const getAllCase = async (repository: ICharacterRepository) => {
  const characters = await repository.find();

  const toResponse = [];

  for (const C of characters) {
    toResponse.push({
      pubId: C.pubId,
      level: C.level,
      charName: C.charName,
      className: C.className,
    });
  }

  return toResponse;
};

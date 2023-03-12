import type { ICharacterRepository } from "./repository/character.interface";

export const getAllCase = async (repository: ICharacterRepository) => {
  return await repository.find();
};

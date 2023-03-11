import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

export const getByNameCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { name } = requests.getRequestToFindByName(req);

  const character = await repository.findByName(name);

  delete character?._id;

  return character;
};

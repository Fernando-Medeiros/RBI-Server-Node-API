import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

export const getByIdCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { id } = requests.getRequestToFindById(req);

  const character = await repository.findById(id);

  delete character?._id;

  return character;
};

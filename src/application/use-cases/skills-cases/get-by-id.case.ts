import type { ISkillsRepository } from "./repository/skills.repository.interfaces";
import type { ISkillsRequestsToGetById } from "./repository/skills.requests.interfaces";
import { NotFound } from "@src/utils/http.exceptions";

export const getByIdCase = async (
  requests: ISkillsRequestsToGetById,
  repository: ISkillsRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const skills = await repository.findById(sub);

  if (skills === null) {
    throw new NotFound("Skills not found!");
  }

  return {
    pubId: skills.pubId,
    offensive: skills.offensive,
    defensive: skills.defensive,
  };
};

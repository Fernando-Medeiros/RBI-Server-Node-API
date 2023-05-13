import type { ISkillsRepository } from "./repository/skills.repository.interfaces";
import type { ISkillsRequestsToGetById } from "./repository/skills.requests.interfaces";
import { NotFound } from "utils/http.exceptions";

export const getByIdCase = async (
  requests: ISkillsRequestsToGetById,
  repository: ISkillsRepository
) => {
  const { sub } = requests.getRequestToGetById();

  const skills = await repository.findById(sub);

  if (!skills) {
    throw new NotFound("Skills not found!");
  }

  const { pubId, offensive, defensive } = skills;

  return {
    pubId,
    offensive,
    defensive,
  };
};

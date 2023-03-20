import type { ISkillsRepository } from "./repository/skills.repository.interfaces";
import type { ISkillsRequestsToCreate } from "./repository/skills.requests.interfaces";
import { Skill } from "@dom/entities/skills/skills";
import { BadRequest } from "@src/utils/http.exceptions";

export const createCase = async (
  requests: ISkillsRequestsToCreate,
  repository: ISkillsRepository
) => {
  const { sub } = requests.getRequestToCreate();

  if (await repository.findById(sub)) {
    throw new BadRequest("Only one Skills allowed per character!");
  }
  const skills = new Skill({
    pubId: sub,
    offensive: [],
    defensive: [],
  });

  await repository.save(skills.getDataToSave());
};

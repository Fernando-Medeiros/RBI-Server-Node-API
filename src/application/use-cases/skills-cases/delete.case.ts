import type { ISkillsRepository } from "./repository/skills.repository.interfaces";
import type { ISkillsRequestsToDelete } from "./repository/skills.requests.interfaces";
import { NotFound } from "@src/utils/http.exceptions";

export const deleteCase = async (
  requests: ISkillsRequestsToDelete,
  repository: ISkillsRepository
) => {
  const { sub } = requests.getRequestToDelete();

  const result = await repository.findByIdAndDelete(sub);

  if (result === null) {
    throw new NotFound("Skills not found!");
  }
};

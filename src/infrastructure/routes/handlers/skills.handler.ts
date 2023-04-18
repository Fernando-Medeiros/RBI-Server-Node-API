import type { Request } from "express";

import { SkillsRepository } from "infra/repositories/skills.repository.impl";
import { SkillsRequestsToCreate } from "app/use-cases/skills-cases/requests/create.requests";
import { SkillsRequestsToDelete } from "app/use-cases/skills-cases/requests/delete.requests";
import { SkillsRequestsToUpdate } from "app/use-cases/skills-cases/requests/update.requests";
import { SkillsRequestsToGetById } from "app/use-cases/skills-cases/requests/get-by-id.requests";

import { createCase } from "app/use-cases/skills-cases/create.case";
import { deleteCase } from "app/use-cases/skills-cases/delete.case";
import { getByIdCase } from "app/use-cases/skills-cases/get-by-id.case";
import { updateCase } from "app/use-cases/skills-cases/update.case";

export const SkillsHandler = {
  async getSkillsById(req: Request) {
    const { id } = req.params;

    return await getByIdCase(
      new SkillsRequestsToGetById(id as string),
      new SkillsRepository()
    );
  },

  async createSkills(req: Request) {
    const { sub } = req.headers;

    return await createCase(
      new SkillsRequestsToCreate(sub as string),
      new SkillsRepository()
    );
  },

  async deleteSkills(req: Request) {
    const { sub } = req.headers;

    return await deleteCase(
      new SkillsRequestsToDelete(sub as string),
      new SkillsRepository()
    );
  },

  async updateSkills(req: Request) {
    const { sub } = req.headers;
    const { offensive, defensive } = req.body;

    return await updateCase(
      new SkillsRequestsToUpdate(sub as string, { offensive, defensive }),
      new SkillsRepository()
    );
  },
};

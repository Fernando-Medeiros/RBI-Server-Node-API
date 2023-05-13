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

export class SkillsHandler {
  private readonly Repository = new SkillsRepository();

  async getSkillsById(req: Request) {
    return await getByIdCase(
      new SkillsRequestsToGetById(Object(req.params)),
      this.Repository
    );
  }

  async createSkills(req: Request) {
    return await createCase(
      new SkillsRequestsToCreate(Object(req.headers)),
      this.Repository
    );
  }

  async deleteSkills(req: Request) {
    return await deleteCase(
      new SkillsRequestsToDelete(Object(req.headers)),
      this.Repository
    );
  }

  async updateSkills(req: Request) {
    return await updateCase(
      new SkillsRequestsToUpdate(Object.assign({}, req.headers, req.body)),
      this.Repository
    );
  }
}
